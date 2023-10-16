const Sequelize = require('sequelize');
const sequelize = require('../services/databaseService');
const fs = require('fs');
const path = require('path');

// Use one time or set only a new model
const models = require('../models');

for (let modelName in models) {
    const model = models[modelName];

    const attributes = model.rawAttributes;
    for (let column in attributes) {
        delete attributes[column].Model;
        delete attributes[column].fieldName;
        delete attributes[column].field;
        for (let property in attributes[column]) {
            if (property.startsWith('_')) {
                delete attributes[column][property];
            }
        }

        if (typeof attributes[column]['type'] !== 'undefined') {
            if (typeof attributes[column]['type']['options'] !== 'undefined' && typeof attributes[column]['type']['options'].toString === 'function') {
                attributes[column]['type']['options'] = attributes[column]['type']['options'].toString(sequelize);
            }

            if (typeof attributes[column]['type'].toString === 'function') {
                attributes[column]['type'] = attributes[column]['type'].toString(sequelize);
            }
        }
    }

    const schema = JSON.stringify(attributes, null, 4);
    const tableName = model.tableName;
    const indexes = ['\n'];

    if (model.options.indexes.length) {
        model.options.indexes.forEach((obj) => {
            indexes.push('        .then(() => {');
            indexes.push('            return queryInterface.addIndex(');
            indexes.push(`                '${tableName}',`);
            indexes.push(`                ['${obj.fields.join("','")}']`);

            const opts = {};
            if (obj.name) {
                opts.indexName = obj.name;
            }
            if (obj.unique === true) {
                opts.indicesType = 'UNIQUE';
            }
            if (obj.method === true) {
                opts.indexType = obj.method;
            }
            if (Object.keys(opts).length) {
                indexes.push(`                , ${JSON.stringify(opts)}`)
            }

            indexes.push('            )');
            indexes.push('        })');
        });
    }

    const formattedSchema = schema.split('\n').map((line) => '            ' + line).join('\n');

    const template = `'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
        .then(() => {
            return queryInterface.createTable('${tableName}',
${formattedSchema})
        })${indexes.join('\n')}
        .then(() => {
            return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
        });
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
        .then(() => {
            return queryInterface.dropTable('${tableName}');
        })
        .then(() => {
            return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
        });
    }
};`;

    const d = new Date();

    const filename = [d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()]
        .map((num) => (num <= 60 && (num + 100).toString().substring(1)) || num)
        .join('') + `-${model.tableName}`;

    // Defina o caminho de saída como '../migrations'
    const outputPath = path.join(__dirname, '..', 'migrations', `${filename}.js`);

    fs.writeFileSync(outputPath, template);
}
