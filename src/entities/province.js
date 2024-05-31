import config from './../configs/db-config.js'
import pkg from 'pg'
const {Client} = pkg;

const client = new Client(config);
await client.connect();

let sql = 'SELECT * FROM provinces ORDER BY id ASC';
let result = await client.query(sql);
await client.end();
let provincias = result.rows;
console.log(provincias);
class Province{
    id;
    name;
    full_name;
    latitude;
    longitude;
    display_order;
}
export default provincias;