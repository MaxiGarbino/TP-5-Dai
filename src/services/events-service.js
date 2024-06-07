import EventRepository from '../repositories/event-repository.js';
export default class EventService{
    getAllAsync = async () => {
        const repo = new EventRepository();
        const arrayEventos= await repo.getAllAsync();
        let resArray
        if(arrayEventos != ''){
            resArray = [arrayEventos, 200];
        }
        else{
            resArray = ["No se encuentran eventos", 404]
        }
        return resArray; 
    }

    searchAsync = async (params) => {
        const repo = new EventRepository();
        const arrayEventos = await repo.searchAsync(params);
        let resArray;
        if (arrayEventos != '') {
            resArray = [arrayEventos, 200];
        } else {
            resArray = ["No se encuentran eventos", 404];
        }
        return resArray;
    }
    
       
}