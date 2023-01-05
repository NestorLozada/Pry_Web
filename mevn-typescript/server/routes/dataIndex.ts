import { json, Router } from "express";
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

router.get('/info', async (req, res) => {
    try {
      // get the month and year from the query string
      const month = req.query.month;
      const year = req.query.year;
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
      // filter the tasks collection by month and year and group by category_code
      const tasksByCategory = await Task.aggregate([
        {
          $match: {
            fecha_creacion: {
              $gte: new Date(`${year_int}-${month_int}-01`),
              $lt: new Date(`${year_int}-${month_int + 1}-01`)
              
            }
          }
        },
        {
            $lookup: {
              from: 'Categorias',
              localField: 'category',   
              foreignField: '_id',
              as: 'category'
            }
          },
          {
            $unwind: '$category'
          },
          {
            $group: {
              _id: '$category._id',
              name: { $first: '$category.titulo' },
              avgEffort: { $avg: '$esfuerzo' }
            }
          }
        ]);
        console.log(tasksByCategory.length);
        // build the response array
        const response = tasksByCategory.map(task => {
          return {
            category: task.name,
            avgEffort: task.avgEffort
          };
        });
        // send the response
        res.send(response);
      } catch (error) {
        res.status(500).send(error);
      }
    });
export default router;