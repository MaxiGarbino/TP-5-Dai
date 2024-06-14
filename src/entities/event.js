import express from 'express';
import cors from 'cors';
import config from '../configs/db-config.js';
import pkg from 'pg';
const { Client } = pkg

/*SELECT e.id,e.name,e.description,ec.*,el.*,e.start_date from events e inner join event_categories ec on e.id_event_category = ec.id inner join event_locations el on e.id_event_location = el.id*/

// const client = new Client(config);
// await client.connect();

// let sql = `SELECT * from events`;
// let result = await client.query(sql)
// await client.end();
// const eventos = result.rows;
// export default eventos;
