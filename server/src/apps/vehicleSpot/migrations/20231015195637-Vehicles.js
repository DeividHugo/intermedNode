'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
        .then(() => {
            return queryInterface.createTable('Vehicles',
            {
                "id": {
                    "type": "INTEGER",
                    "allowNull": false,
                    "primaryKey": true,
                    "autoIncrement": true
                },
                "name": {
                    "type": "VARCHAR(255)",
                    "allowNull": false
                },
                "description": {
                    "type": "TEXT"
                },
                "kms": {
                    "type": "INTEGER",
                    "allowNull": false
                },
                "year": {
                    "type": "VARCHAR(255)"
                },
                "color": {
                    "type": "VARCHAR(255)"
                },
                "seats": {
                    "type": "INTEGER",
                    "allowNull": false
                },
                "price": {
                    "type": "DECIMAL(10,2)",
                    "allowNull": false
                },
                "active": {
                    "type": "TINYINT(1)",
                    "allowNull": false,
                    "defaultValue": true
                },
                "createdAt": {
                    "type": "DATETIME",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": "DATETIME",
                    "allowNull": false
                },
                "VehicleConditionId": {
                    "type": "INTEGER",
                    "allowNull": true,
                    "references": {
                        "model": "VehicleConditions",
                        "key": "id"
                    },
                    "onDelete": "CASCADE",
                    "onUpdate": "CASCADE"
                },
                "VehicleClassificationId": {
                    "type": "INTEGER",
                    "allowNull": true,
                    "references": {
                        "model": "VehicleClassifications",
                        "key": "id"
                    },
                    "onDelete": "CASCADE",
                    "onUpdate": "CASCADE"
                },
                "VehicleGearId": {
                    "type": "INTEGER",
                    "allowNull": true,
                    "references": {
                        "model": "VehicleGears",
                        "key": "id"
                    },
                    "onDelete": "CASCADE",
                    "onUpdate": "CASCADE"
                },
                "ManufactureBrandVersionId": {
                    "type": "INTEGER",
                    "allowNull": true,
                    "references": {
                        "model": "ManufactureBrandVersions",
                        "key": "id"
                    },
                    "onDelete": "CASCADE",
                    "onUpdate": "CASCADE"
                }
            })
        })

        .then(() => {
            return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
        });
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
        .then(() => {
            return queryInterface.dropTable('Vehicles');
        })
        .then(() => {
            return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
        });
    }
};