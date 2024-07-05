import pkg from 'pg'
import jwt from 'jsonwebtoken';
import {token} from '../repositories/user-repository.js';
import config from '../configs/db-config.js';
const { Client } = pkg
const client = new Client(config);

await client.connect();
export default class EventLocationRepository {
    
    getAllAsync = async () => {
        try{
        
        const secretKey = "ClaveSecreta3000$";
        let validacionToken = token; 
        let payloadOriginal = null;
        payloadOriginal = await jwt.verify(validacionToken,secretKey);
        if(payloadOriginal != null){
        let sql = `SELECT el.id, l.* , el.name, el.full_address, el.max_capacity, el.latitude, el.longitude, u.*
        FROM public.event_locations el inner join locations l on l.id = el.id_location inner join users u on u.id = el.id_creator_user`;
        let result = await client.query(sql)
        const eventLocation = result.rows;
        return [eventLocation,200];
        }
        else{ 
            return ["Unauthorized",401]
        }
    }catch(e){
        console.log(e)
        return ["Unauthorized",401]
    }
    }
    getByIdAsync = async (id) => {
        
        payloadOriginal = await jwt.verify(validacionToken,secretKey);
        if(payloadOriginal != null){
        let sql = `SELECT el.id, l.* , el.name, el.full_address, el.max_capacity, el.latitude, el.longitude, u.*
        FROM public.event_locations el inner join locations l on l.id = el.id_location inner join users u on u.id = el.id_creator_user WHERE el.id=$1`;
        const values = [id];
        let result = await client.query(sql, values);
        let sql1 = 'select id_creator_user from event_locations where id = $1'
        let result1 = await client.query(sql1, values);
        console.log(payloadOriginal);
        const eventLocation = result.rows;
        if(eventLocation != null){
            return [eventLocation,200];
        }else{
            return ["not found",404];
        }
        }
    }
}