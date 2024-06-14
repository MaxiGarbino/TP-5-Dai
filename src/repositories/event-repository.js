import pkg from 'pg';
const { Client } = pkg;
import config from '../configs/db-config.js';

export default class EventRepository {

    // async getAllAsync() {
    //     const client = new Client(config);
    //     await client.connect();

    //     try {
    //         const sql = `SELECT * FROM events`;
    //         const result = await client.query(sql);
    //         return result.rows;
    //     } finally {
    //         await client.end();
    //     }
    // }

    
    searchAsync = async (params) => {
        const client = new Client(config);
        await client.connect();

        try {
            let sql = `SELECT e.* FROM events as e INNER JOIN event_categories as ec ON e.id_event_category = ec.id INNER JOIN event_tags et ON e.id = et.id_event INNER JOIN tags as t on t.id = et.id_tag`;
            const values = [];
            const conditions = [];

            if (params.name) {
                conditions.push(`e.name ILIKE $${values.length + 1}`);
                values.push(`%${params.name}%`);
            }

            if (params.category) {
                conditions.push(`ec.name ILIKE $${values.length + 1} 
                `);
                values.push(`%${params.category}%`);
            }   

            if (params.startdate) {
                conditions.push(`e.start_date = $${values.length + 1}`);
                values.push(params.startdate);
                
            }

            if (params.tag) { 
                conditions.push(`t.name ILIKE $${values.length + 1}  `);
                values.push(`%${params.tag}%`);
            }

            if (conditions.length > 0) {
                sql += ` WHERE ${conditions.join(' AND ')}`;
            }

            const result = await client.query(sql, values);
            return result.rows;
        } finally {
            await client.end();
        }
    
    }


        getByIdAsync = async (id) => {
            const client = new Client(config);
            await client.connect();
    
            let sql = `SELECT * from events WHERE id=$1`;
            const values = [id];
            let result = await client.query(sql, values)
            const evento = result.rows;
            return evento
        }


        searchEnrollments = async (eventId, params) => {
            const client = new Client(config);
            await client.connect();
        
            try {
                let sql = `SELECT u.* FROM users as u INNER JOIN event_enrollments as e ON u.id = e.id_user INNER JOIN events as ev on e.id_event = ev. id WHERE ev.id = $1`;
                const values = [eventId];
        
                if (params != null) {
                    if (params.first_name !== undefined) {
                        sql += ` AND u.first_name ILIKE $${values.length + 1}`;
                        values.push(`%${params.first_name}%`);
                    }
        
                    if (params.last_name !== undefined) {
                        sql += ` AND u.last_name ILIKE $${values.length + 1}`;
                        values.push(`%${params.last_name}%`);
                    }
        
                    if (params.username !== undefined) {
                        sql += ` AND u.username ILIKE $${values.length + 1}`;
                        values.push(`%${params.username}%`);
                    }
        
                    if (params.attended !== undefined) {
                        sql += ` AND e.attended = $${values.length + 1}`;
                        values.push(params.attended);
                    }
        
                    if (params.rating !== undefined) {
                        sql += ` AND e.rating >= $${values.length + 1}`;
                        values.push(params.rating);
                    }
                }
        
                const result = await client.query(sql, values);
                return result.rows;
            } finally {
                await client.end();
            }
        };
        


    //     const client = new Client(config);
    //     await client.connect();

    //     try {
    //         const sql = `SELECT * FROM events`;
    //         const result = await client.query(sql);
    //         return result.rows;
    //     } finally {
    //         await client.end();
    //     }
    // }

    

}
