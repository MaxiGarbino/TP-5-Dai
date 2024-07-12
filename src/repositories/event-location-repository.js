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
        
        try{
            const secretKey = "ClaveSecreta3000$";
        let payloadOriginal = null;
        payloadOriginal = await jwt.verify(token,secretKey);
        if(payloadOriginal != null){
        let sql = `SELECT el.id, l.* , el.name, el.full_address, el.max_capacity, el.latitude, el.longitude, u.*
        FROM public.event_locations el inner join locations l on l.id = el.id_location inner join users u on u.id = el.id_creator_user WHERE el.id=$1`;
        const values = [id];
        let result = await client.query(sql, values);
        console.log(result);
        let sql1 = 'select id_creator_user from event_locations where id = $1'
        let result1 = await client.query(sql1, values);
        console.log(payloadOriginal);
        const eventLocation = result.rows;
        if(eventLocation != null){
            return [eventLocation,200];
        }else{
            return ["not found",404];
        }
        }else{
            return ["not found",404];
        }
        }catch(e){

        }
        
    }
    createAsync = async (body) => {
        try {
          const sql1 = `SELECT id FROM public.users ORDER BY id DESC limit 1;`;
          const result1 = await client.query(sql1);
          let obj = result1.rows[0];
          const id = obj.id + 1;
          let nombre = body.name;
          let display_order = body.display_order;
          const sql = `
                INSERT INTO event_categories
                    (id,name,display_order)
                VALUES
                    ($1,$2,$3)`;
          const values = [id, nombre, parseInt(display_order)];
          const result = await client.query(sql, values);
          return ["created", 200];
        } catch (error) {
          return [error, 404];
        }
      };
}