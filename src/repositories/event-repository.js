import pkg from 'pg'
const { Client, Pool } = pkg;
import eventos from '../entities/event.js';
export default class EventRepository {
    getAllAsync = async () => {
    let returnArray = eventos;
    return returnArray;
    }
    /*
    getByIdAsync = async (id) => {...}
    createAsync = async (entity) => {...}
    updateAsync = async (entity) => {...}
    deleteByIdAsync = async (id) => {...}*/
}