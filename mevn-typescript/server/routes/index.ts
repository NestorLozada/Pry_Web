import { Router } from "express";
import Task from '../models/Task'

const router = Router()

router.get('/tasks', async (req, res) =>{
    const tasks = await Task.find()
    console.log(tasks);
    res.send("obteniendo tareas");
});
router.post('/tasksPost', (req, res) =>{
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
