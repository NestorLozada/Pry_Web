import { Router } from "express";
import Task from '../models/Task'

const router = Router()

router.get('/tasks', async (req, res) =>{
    const tasks = await Task.find()
    res.send(tasks);
});
router.post('/tasksPost', async (req, res) =>{
    const{title, description} = req.body

    const task = new Task({title, description})
    await task.save();
    res.send("crear");
});
router.get('/tasks/:id', (req, res) =>{
    res.send("obtener 1 ");
});
router.delete('/tasks/:id', (req, res) =>{
    res.send("Eliminar");
});
router.put('/tasks/:id', (req, res) =>{
    res.send("Actualizar");
});

export default router;
