import EventLocationRepository from '../repositories/event-location-repository.js';
export default class EventLocationService{
    getAllAsync = async () => {
        const repo = new EventLocationRepository();
        const arrayEventLocation= await repo.getAllAsync();
        let resArray;
        if(arrayEventLocation != ''){
            resArray = [arrayEventLocation, 200];
        }
        else{
            resArray = ["No se encuentran ubicaciones de eventos", 404]
        }
        return resArray; 
    }

    getByIdAsync = async (id) =>{
        const repo = new EventLocationRepository();
        const arrayEventLocation= await repo.getByIdAsync(id);
        let resArray;
        if (arrayEventLocation != '') {
            
            resArray = [arrayEventLocation,200];;
        } else {
            resArray = ["Ubicacion no encontrada",404];
        }
        return resArray;
    }
    getLocationByIdAsync = async (id) =>{
        const repo = new EventLocationRepository();
        const arrayEventLocation= await repo.getLocationByIdAsync(id);
        let resArray;
        if (arrayEventLocation != '') {
            
            resArray = [arrayEventLocation,200];;
        } else {
            resArray = ["Ubicacion no encontrada",404];
        }
        return resArray;
    }

       
}