import pkg from 'pg'

import config from '../configs/db-config.js';
const { Client } = pkg
const client = new Client(config);

await client.connect();
export default class LocationRepository {
    
    getAllAsync = async () => {
       
        let sql = `select l.id,l.name,p.*,l.latitude,l.longitude from locations l inner join provinces p on l.id_province = p.id`;
        let result = await client.query(sql)
        const Location = result.rows;
        return Location
    }
    getByIdAsync = async (id) => {
        
        let sql = `select l.id,l.name,p.*,l.latitude,l.longitude from locations l inner join provinces p on l.id_province = l.id WHERE l.id=$1`;
        const values = [id];
        let result = await client.query(sql, values)
        const Location = result.rows;
        return Location
    }
    getLocationByIdAsync = async (id) => {
        
        let sql = `select l.id,l.name,p.*,l.latitude,l.longitude from locations l inner join provinces p on l.id_province = l.id WHERE p.id=$1`;
        const values = [id];
        let result = await client.query(sql, values)
        const Location = result.rows;
        return Location
    }
}