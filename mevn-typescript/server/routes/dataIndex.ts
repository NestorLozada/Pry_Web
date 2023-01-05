import { json, Router } from "express";
import Data from '../models/Data'
const router = Router()

router.get('/data', async (req, res) =>{
    const data = await Data.find()
    res.send(data);
});

router.post('/registerData', async (req, res) =>{
    const{esfuerzo, description, done, fecha_real } = req.body

    const data = new Data({esfuerzo, description, done, fecha_real })
    await data.save();
    res.json(data);
    
});
router.get('/Data/:id', async (req, res) =>{
    try {
        const data = await Data.findById(req.params.id);
    
        if(!data) return res.status(404).json({message: "Data no encontrada"});
        res.send(data);

    } catch (error) {
        return res.status(500).send(error);
    }

});

router.delete('/data/:id', async(req, res) =>{
    try {
        const data = await Data.findByIdAndDelete(req.params.id);

        if (!data) return res.status(404).json({message: "Data no encotrada"});

        return res.json(data);
        
    } catch (error) {
        return res.status(500).send(error);
    }

});
router.put('/data/:id', async (req, res) =>{
    const updatedData= await Data.findByIdAndUpdate(req.params.id,req.body, {
        new: true, 
    });
    res.json(updatedData);
});
export default router