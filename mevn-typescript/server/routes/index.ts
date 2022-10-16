import { json, Router } from "express";
import Task from '../models/Task'
import User from '../models/User'

const router = Router()

router.get('/tasks', async (req, res) =>{
    const tasks = await Task.find()
    res.send(tasks);
});
router.post('/tasksPost', async (req, res) =>{
    const{title, description} = req.body

    const task = new Task({title, description})
    await task.save();
    res.json(task);
});

router.get('/tasks/:id', async (req, res) =>{
    try {
        const task = await Task.findById(req.params.id);
    
        if(!task) return res.status(404).json({message: "Tarea no encontrada"});
        res.send(task);

    } catch (error) {
        return res.status(500).send(error);
    }

});

router.delete('/tasks/:id', async(req, res) =>{
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) return res.status(404).json({message: "Tarea no encotrada"});

        return res.json(task);
        
    } catch (error) {
        return res.status(500).send(error);
    }

});
router.put('/tasks/:id', async (req, res) =>{
    const updatedTask = await Task.findByIdAndUpdate(req.params.id,req.body, {
        new: true, 
    });
    res.json(updatedTask);
});

router.post('/login', async (req, res) =>{
    const{ email, passWord} = req.body

    const user = await User.findOne({email})
        if (user === null){
            res.status(401).send({
                message: "No se encontró el usuario!",
                flag: false,
            })
        }
        if (user?.passWord === passWord) {
            res.status(200).send( {
                message: "Ingreso!",
                flag: true,
            })
        }
        else{ 
            res.status(401).send({
                message: "Credenciales erroneas!",
                flag: false,
            })
        }
    
});

export default router;
