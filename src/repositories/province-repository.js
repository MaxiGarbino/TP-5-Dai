import pkg from 'pg'
import Province from '../entities/province.js';

import config from '../configs/db-config.js';
const { Client } = pkg
const client = new Client(config);

await client.connect();
export default class ProvinceRepository {
    
    getAllAsync = async () => {
       
        let sql = `SELECT * from provinces`;
        let result = await client.query(sql)
        const provincias = result.rows;
        return provincias
    }
    getByIdAsync = async (id) => {
        let sql = `SELECT * from provinces WHERE id=$1`;
        const values = [id];
        let result = await client.query(sql, values)
        const provincia = result.rows;
        return provincia
    }
    createAsync = async (body) => {
        try{
        let nombre = body.name;
        let full_nombre = body.full_name;
        let latitud = parseInt(body.latitude);
        let longitud = parseInt(body.longitude);
        let display_orden = parseInt(body.display_order);
        const sql = `
            INSERT INTO provinces
                (name, full_name, latitude, longitude, display_order)
            VALUES
                ($1,$2,$3,$4,$5)`;
        const values = [nombre, full_nombre, latitud, longitud,display_orden];
        const result = await client.query(sql, values);
        return ["created",200]; 
        }
        catch (error){
            return [error,404];
        }
    }
    putAsync = async (body) => {
        
        let resArray;
        let sql1 = `SELECT id from provinces WHERE id=$1`;
        const valuesID = [parseInt(body.id)];
        let resultID = await client.query(sql1, valuesID)
        let sql2 = `UPDATE provinces
        Set name = $1
            full_name = $2
            latitude = $3
            longitude = $4
            display_order = $5 
            WHERE id = $6
        `
        const values = [body.name, body.full_name, body.latitude, body.longitude, body.display_order, resultID];
        let result = await client.query(sql2, values)
        if( body.name="" || body.name.length <= 3)
        {
            resArray = ["No cumple con las reglas de negocio",400]
        }
        else if(resultID < 1){
            resArray = ["Provincia no encontrada",404]
        }
        else
        {
            resArray = ["Update",201]
            
        }
        return resArray;
        
        /*let resArray = "";
        const createPutAsync = body.id;
        const provincefv = provincias.findIndex(provincia => provincia.id == body.id)
        if (provincefv != -1) {
            if( body.name="" || body.name.length <= 3)
            {
                resArray = ["No cumple con las reglas de negocio",400]
            }
            else
            {
                resArray = ["Created",201]
                provincias[body.id-1] = 
                {
                    id: body.id,
                    name: body.name,
                    full_name : body.full_name,
                    latitude: body.atitude,
                    longitude: body.longitude,
                    display_order : body.display_order
                }
            }
        } 
        else {
            resArray = ["Provincia no encontrada",404]
        }
        return resArray;*/
    }
    deleateAsync = async (id) => {
        let resArray;
        const valuesID = [parseInt(id)];
        try
        {
            let sql2 = `DELETE FROM provinces WHERE id=$1`
            let result = await client.query(sql2, valuesID)
            resArray = ["Provincia eliminada correctamente",200];
        }
        catch(error)
        {
            resArray = ["Provincia no encontrada",404];
            console.log(error);
        }
        
        return resArray;
    }
    /*
    getByIdAsync = async (id) => {...}
    createAsync = async (entity) => {...}
    updateAsync = async (entity) => {...}
    deleteByIdAsync = async (id) => {...}*/
}