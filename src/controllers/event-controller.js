import { Router } from 'express';
import EventService from '../services/events-service.js'

const router = Router();
const svc = new EventService();


router.get('', async(req, res) => {
    const resArray = await svc.getAllAsync();
    res.status(resArray[1]).send(resArray[0]);
});

export default router;