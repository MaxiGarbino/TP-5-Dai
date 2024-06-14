import pkg from 'pg'

import config from '../configs/db-config.js';
const { Client } = pkg
const client = new Client(config);

await client.connect();
export default class EventLocationRepository {
    
    getAllAsync = async () => {
       
        let sql = `SELECT el.id, l.* , el.name, el.full_address, el.max_capacity, el.latitude, el.longitude, u.*
        FROM public.event_locations el inner join locations l on l.id = el.id_location inner join users u on u.id = el.id_creator_user`;
        let result = await client.query(sql)
        const eventLocation = result.rows;
        return eventLocation
    }
    getByIdAsync = async (id) => {
        
        let sql = `SELECT el.id, l.* , el.name, el.full_address, el.max_capacity, el.latitude, el.longitude, u.*
        FROM public.event_locations el inner join locations l on l.id = el.id_location inner join users u on u.id = el.id_creator_user WHERE el.id=$1`;
        const values = [id];
        let result = await client.query(sql, values)
        const eventLocation = result.rows;
        return eventLocation
    }
    getLocationByIdAsync = async (id) => {
        
        let sql = `SELECT el.id, l.* , el.name, el.full_address, el.max_capacity, el.latitude, el.longitude, u.*
        FROM public.event_locations el inner join locations l on l.id = el.id_location inner join users u on u.id = el.id_creator_user WHERE l.id=$1`;
        const values = [id];
        let result = await client.query(sql, values)
        const eventLocation = result.rows;
        return eventLocation
    }
}