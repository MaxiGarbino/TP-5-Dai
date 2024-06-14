import pkg from "pg";
import jwt from "jsonwebtoken";
import config from "../configs/db-config.js";
const { Client } = pkg;
const client = new Client(config);

await client.connect();
export default class UserRepository {
  createAsync = async (body) => {
    try {
      let first_name = body.first_name;
      let last_name = body.last_name;
      let username = body.username;
      let password = body.password;

      function validarEmail(username) {
        // Expresión regular para validar un correo electrónico
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(username);
      }

      if (first_name.lenght < 3 || last_name.length < 3) {
        return [
          "Nombre o apellido estan vacion o tienen menos de 3 caracteres",
          400,
        ];
      } else {
        if (!validarEmail(username)) {
          return ["No se valido el email", 400];
        } else {
          if (password.length < 3) {
            return ["Contraseña vacio o con pocos caracteres", 400];
          } else {
            const sql = `
            INSERT INTO users
                (first_name, last_name, username, password)
            VALUES
                ($1,$2,$3,$4)`;
            const values = [first_name, last_name, username, password];
            const result = await client.query(sql, values);
            return ["created", 200];
          }
        }
      }
    } catch (error) {
      return [error, 404];
    }
  };
  logAsync = async (body) => {
    function validarEmail(username) {
      // Expresión regular para validar un correo electrónico
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return regex.test(username);
    }
    
    let usuario = body.username;
    let contraseña = body.password;
    
    if (validarEmail(usuario)) {
      const sql = `SELECT * FROM users WHERE username = $1 AND password = $2`;
      const values = [usuario, contraseña];
      
      try {
        const result = await client.query(sql, values);
        const usuarioDevuelto = result.rows[0]; // Obtenemos el primer resultado de la consulta
  
        if (usuarioDevuelto && usuarioDevuelto.username === usuario && usuarioDevuelto.password === contraseña) {
          const payload = {
            id: usuarioDevuelto.id,
            username: usuarioDevuelto.username,
          };
          const secretKey = "ClaveSecreta3000$";
          const options = {
            expiresIn: "2h",
            issuer: "miOrganizacion",
          };
          const token = jwt.sign(payload, secretKey, options);
          return [{ success: true, message: "", token: token }, 200];
        } else {
          return [{ success: false, message: "Usuario o clave inválida", token: "" }, 401];
        }
      } catch (error) {
        console.error("Error al ejecutar la consulta SQL:", error);
        return [{ success: false, message: "Error en la base de datos", token: "" }, 500];
      }
    } else {
      return [{ success: false, message: "El email es inválido", token: "" }, 400];
    }
  };
  
}
