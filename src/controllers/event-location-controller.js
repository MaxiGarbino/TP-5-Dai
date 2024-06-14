import { Router } from 'express';
import EventLocationService from '../services/event-location-service.js'

const router = Router();
const svc = new EventLocationService();


router.get('', async(req, res) => {
    const resArray = await svc.getAllAsync();
    res.status(resArray[1]).send(resArray[0]);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const resArray = await svc.getByIdAsync(id);
    res.status(resArray[1]).send(resArray[0]);
    
});
router.get('/location/:id', async (req, res) => {
    const id = req.params.id;
    const resArray = await svc.getLocationByIdAsync(id);
    res.status(resArray[1]).send(resArray[0]);
});

export default router;