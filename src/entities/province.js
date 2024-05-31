import express from 'express';
import cors from 'cors';
import config from '../configs/db-config.js';
import pkg from 'pg';
const { Client } = pkg


const client = new Client(config);
await client.connect();

let sql = `SELECT * from provinces`;
let result = await client.query(sql)
await client.end();
const provincias = result.rows;
export default provincias;
