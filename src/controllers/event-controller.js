import { Router } from 'express';
import EventService from '../services/events-service.js'

const router = Router();
const svc = new EventService();


router.get('', async(req, res) => {
    const params = req.query;
    const resArray = await svc.searchAsync(params);
    res.status(resArray[1]).send(resArray[0]);
});

router.get('/:id', async(req, res) => {
    const id = req.params.id;
    const resArray = await svc.getByIdAsync(id);
    res.status(resArray[1]).send(resArray[0]);
    
});

router.get('/:id/enrollment', async(req, res) => {
    const eventId = req.params.id;
    const params = req.query;
    const resArray = await svc.searchEnrollments(eventId,params);
    res.status(resArray[1]).send(resArray[0]);
});


router.post('', async(req, res) => {
    const body = req.body;
    const resArray = await svc.createAsync(body);
    res.status(resArray[1]).send(resArray[0]);
});

router.patch('/:id/enrollment/:entero', async(req, res) => {
    const bodyDesc = req.body.observations;
    const eventId = req.params.id;
    const eventRating = req.params.entero;
    const resArray = await svc.ratingEnrollment(eventId,eventRating,bodyDesc);
    res.status(resArray[1]).send(resArray[0]);

})
// router.get('/search', async (req, res) => {
//     const params = req.query;
//     const resArray = await svc.searchAsync(params);
//     res.status(resArray[1]).send(resArray[0]);
// });

export default router;