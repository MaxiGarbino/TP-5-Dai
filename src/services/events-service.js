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
    getByIdAsync = async (id) => {
        const repo = new EventRepository();
        const arrayEventos = await repo.getByIdAsync(id);
            if (Array.isArray(arrayEventos) && arrayEventos.length > 0) {
            return [arrayEventos, 200];
        } else {
            return ["Evento no encontrado", 404];
        }
    }

    searchEnrollments = async (eventId, params) => {
        const repo = new EventRepository();
            const enrollments = await repo.searchEnrollments(eventId, params);
            let resArray;
            if (enrollments.collection.length >= 1) {
            
                resArray = [enrollments,200];;
            } else {
                resArray = ["Participante no encontrado",404];
            }
            return resArray;

    };

    createAsync = async (body) => {
        const repo = new EventRepository();
        let resArray = repo.createAsync(body);
        return resArray;
    }

    UpdateAsync =  async (body) =>{
        const repo = new EventRepository();
        let restArray
        if (body.id) {
            return repo.updateAsync(body.id, body);
        } else {
            resArray = ["Id missing",404];

                return restArray;
        }
    }
    
     deleteEvent = async(id)=> {
        try {
            const repo = new EventRepository();
            const result = await repo.deleteEvent(id);
            return result;
        } catch (error) {
            throw error;
        }
    }

    addEnrollmentOfUser = async(id) =>
    {
        const repo = new EventRepository();
        const result = await repo.addEnrollmentOfUser(id)
        return result;
        
    }

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

}
