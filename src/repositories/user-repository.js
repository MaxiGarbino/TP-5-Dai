import pkg from 'pg'

import config from '../configs/db-config.js';
const { Client } = pkg
const client = new Client(config);

await client.connect();
export default class UserRepository {
createAsync = async (body) => {
    try{
    let first_name = body.first_name;
    let last_name = body.last_name;
    let username = body.username;
    let password = body.password;

    function validarEmail(username) {
        // Expresión regular para validar un correo electrónico
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(username);
    }

    if(first_name.lenght < 3 || last_name.length <3){
        return ["Nombre o apellido estan vacion o tienen menos de 3 caracteres",400]; 
    }
    else{
        if(!validarEmail(username)){
            return ["No se valido el email",400]
        }
        else{
            if(password.length < 3){
                return ["Contraseña vacio o con pocos caracteres",400]
            }
            else{
                const sql = `
            INSERT INTO users
                (first_name, last_name, username, password)
            VALUES
                ($1,$2,$3,$4)`;
            const values = [first_name, last_name, username, password];
            const result = await client.query(sql, values);
            return ["created",200];
            }
            
        }
     
    }
    }
    catch (error){
        return [error,404];
    }
}
}