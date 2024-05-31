import express from 'express';
import cors from 'cors';
import config from './src/configs/db-config.js';
import pkg from 'pg';
/*import aux from './src/entities/province.js' */
import ProvinceRouter from './src/controllers/province-controller.js';
import EventRouter from './src/controllers/event-controller.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/event', EventRouter);
app.use('/api/province', ProvinceRouter);
/*
const client = new Client(config);
await client.connect();

let sql = `SELECT * from provinces`;
let result = await client.query(sql)
await client.end();
console.log(result.rows);
*/
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});