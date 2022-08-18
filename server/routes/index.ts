import { Router } from 'express';
import Task from '../models/Task'


const router = Router();

router.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    res.send(tasks)
});

router.post('/tasks', async (req, res) => {
    console.log('tasks', req.body);
    const {title, why, when, where, who, how, howmuch, howmuchValor, priority, description} = req.body;

    const task = new Task({title, why, when, where, who, how, howmuch, howmuchValor, priority, description})
    await task.save();
    res.json(task);
});

router.get('/tasks/:id', async (req, res) => { 
    try {
        const task = await Task.findById(req.params.id);

        if (!task) return res.status(404).json({ message: "Tasks not found" });
        res.send(task);
    } catch (error) {
        return res.status(500).send(error);
    }   
   
});

router.delete('/tasks/:id', async (req, res) => {
    try{
        const task = await Task.findByIdAndDelete(req.params.id);

        if(!task) return res.status(404).json({ message: "Task not found" });    
        return res.json(task);
    }catch (error) {    
        return res.status(500).send(error); 
    }
    
});

router.put('/tasks/:id', async (req, res) => {
  const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,    
  });
  res.json(updateTask);
});

export default router;