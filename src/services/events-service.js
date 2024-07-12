import EventRepository from '../repositories/event-repository.js';
export default class EventService{

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
            if (arrayEventos && Object.keys(arrayEventos).length !== 0) {
            return [arrayEventos, 200];
        } else {
            return ["Evento no encontrado", 404];
        }
    }

    searchEnrollments = async (eventId, params) => {
        const repo = new EventRepository();
            const enrollments = await repo.searchEnrollments(eventId, params);
            let resArray;            
            if (enrollments.collection.length>0) {
            
                resArray = [enrollments,200];;
            } else {
                resArray = ["Participante no encontrado",404];
            }
            return resArray;

    };

    createAsync = async (body,token) => {
        const repo = new EventRepository();
        let resArray = repo.createAsync(body,token);
        return resArray;
    }

    UpdateAsync =  async (body,token) =>{
        const repo = new EventRepository();
        let restArray
        if (body.id) {
            
            return repo.updateAsync(body.id, body, token);
        } else {
            resArray = ["Id missing",404];

                return restArray;
        }
    }
    
    deleteEventAsync = async (id) => {
        const repo = new EventRepository();
        let Res = await repo.deleteEventAsync(id);
        return Res;
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
