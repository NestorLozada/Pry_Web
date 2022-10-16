import { json, Router } from "express";
import User from '../models/User'
const router = Router()

router.get('/users', async (req, res) =>{
    const tasks = await User.find()
    res.send(tasks);
});

router.post('/registerUser', async (req, res) =>{
    const{firstName, lastName, email, passWord } = req.body

    const user = new User({firstName, lastName, email, passWord })
    await user.save();
    res.json(user);
    
});
export default router