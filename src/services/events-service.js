import EventRepository from '../repositories/event-repository.js';
export default class EventService{
    // getAllAsync = async () => {
    //     const repo = new EventRepository();
    //     const arrayEventos= await repo.getAllAsync();
    //     let resArray
    //     if(arrayEventos != ''){
    //         resArray = [arrayEventos, 200];
    //     }
    //     else{
    //         resArray = ["No se encuentran eventos", 404]
    //     }
    //     return resArray; 
    // }

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

    getByIdAsync = async (id) =>{
        const repo = new EventRepository();
        const arrayEventos= await repo.getByIdAsync(id);
        let resArray;
        if (arrayEventos != '') {
            
            resArray = [arrayEventos,200];;
        } else {
            resArray = ["Evento no encontrado",404];
        }
        return resArray;
    }

    searchEnrollments = async (eventId, params) => {
        const repo = new EventRepository();
            const enrollments = await repo.searchEnrollments(eventId, params);
            let resArray;
            if (enrollments != '') {
            
                resArray = [enrollments,200];;
            } else {
                resArray = ["Participante no encontrado",404];
            }
            return resArray;

    };
    
    ratingEnrollment = async(eventId,eventRating,bodyDesc) =>
    {
        const repo = new EventRepository();
        const enrollments = await repo.ratingEnrollments(eventId,eventRating,bodyDesc);
        let resArray;
            if (enrollments != '') {
            
                resArray = [enrollments,200];;
            } else {
                resArray = ["id es inexistente",404];
            }
            return resArray;
    };


    createAsync = async (body) => {
        const repo = new EventRepository();
        let resArray = repo.createAsync(body);
        return resArray;
    }
}