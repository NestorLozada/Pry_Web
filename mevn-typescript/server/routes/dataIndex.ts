import { json, Router } from "express";
import Categorias from "../models/Categorias";
import Data from '../models/Categorias'
import Task from "../models/Task";
const router = Router()

router.get('/categorias', async (req, res) =>{
    const data = await Data.find()
    res.send(data);
});

router.post('/registerCategorias', async (req, res) =>{
    const{titulo, description } = req.body

    const data = new Data({titulo, description })
    await data.save();
    res.json(data);
    
});
router.get('/categoria/:id', async (req, res) =>{
    try {
        const data = await Data.findById(req.params.id);
    
        if(!data) return res.status(404).json({message: "Data no encontrada"});
        res.send(data);

    } catch (error) {
        return res.status(500).send(error);
    }

});

router.delete('/categoria/:id', async(req, res) =>{
    try {
        const data:any = await Data.findByIdAndDelete(req.params.id);

        if (!data) return res.status(404).json({message: "Data no encotrada"});

        return res.json(data);
        
    } catch (error) {
        return res.status(500).send(error);
    }

});
router.put('/categoria/:id', async (req, res) =>{
    const updatedData= await Data.findByIdAndUpdate(req.params.id,req.body, {
      new: true, 
    });
    res.json(updatedData);
  });
  
  router.post('/info', async (req, res) => {
    try {
      // get the month and year from the query string
      const month = req.body.month;
      const year = req.body.year;
      
      if (!month || !year) {
        
        return res.status(400).send({ message: 'Month and year are required' });
      }
      const month_int = Number(month);
      const year_int = Number(year);
      if (month_int < 1 || month_int > 12) {
        return res.status(400).send({ message: 'Invalid month' });
      }
      if (year_int < 1000 || year_int > 9999) {
        return res.status(400).send({ message: 'Invalid year' });
      } 

        const tasksByCategory = await Categorias.aggregate([
          /*{
            $match: {
              fecha_creacion: {
                $gte: new Date(`${year_int}-${month_int}-01`),
                $lt: new Date(`${year_int}-${month_int + 1}-01`)
              
              }
          }
        },*/
        {
            $lookup: {
              from: 'tasks',
              localField: '_id',   
              foreignField: 'category',
              as: 'tasks'
            }
          }
        ]);
        const results:any = [] 
        const fecha_min = new Date(`${year_int}-${month_int}-01`)
        const fecha_max = new Date(`${year_int}-${month_int + 1}-01`)
        tasksByCategory.forEach(category => {
          const tasks = category.tasks.filter((taske:any) => {
            
            const fecha = taske.fecha_creacion
            return fecha.getTime() >= fecha_min.getTime() && fecha.getTime() <= fecha_max

          })
          const totalEsfuerzo = tasks.reduce((total: number, task:any) => total + task.esfuerzo, 0)
            const totalTasks = tasks.length
            results.push({
            category: category.titulo,
            avgEsfuerzo:  totalTasks == 0 ? 0 : totalEsfuerzo / totalTasks
            })
        })
        
       ///reporte en un rango de fecha se require escoger el nivel de esfuerzo elevado 
       /// tareas pendientes 

        // send the response
        res.send(results);
      } catch (error) {
        res.status(500).send(error);
      }
    });

    /////////////////////////////////////

    router.post('/filteredTasks', async (req, res) => {
          try {
               
               const fechaInicio = new Date(req.body.fechaInicio);
               const fechaFin = new Date(req.body.fechaFin);
               const minEsfuerzo = new Number(req.body.esfuerzo);
               const tasks = await Task.find()
               const filteredTasks = tasks.filter((task: any) => {
                  const fecha = task.fecha_creacion.getTime()
                  return fecha >= fechaInicio && fecha <= fechaFin && task.esfuerzo >= minEsfuerzo && !task.done;
              })
              console.log(minEsfuerzo)
              return res.send(filteredTasks) ;
          }
          catch(error) {
            res.status(500).send(error);
          }
         });
export default router;