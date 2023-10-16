const express = require('express');
const vehicleSpotRoutes = require('./src/apps/vehicleSpot/routes')

const app = express();
const PORT = process.env.SERVER_PORT || 3001;

app.use(express.json());
vehicleSpotRoutes(app)


app.listen(PORT, () => {
  console.log(`Servidor em execução na porta ${PORT}`);
});
