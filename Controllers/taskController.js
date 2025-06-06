import taskModel from '../Models/taskModel.js';
const createTask = async (req, res) => {
    try {
      const { title, description } = req.body;
      if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
      }
      const task = new taskModel({ title, description });
      await task.save();
      res.status(201).json(task);
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  };

  const getAllTasks= async(req, res) => {
    try {
      const tasks = await taskModel.find();
      res.json(tasks);
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  };


  const updateTask = async (req, res) => {
    try {
      const { title, description } = req.body;
      const task = await taskModel.findByIdAndUpdate(
        req.params.id,
        { title, description },
        { new: true, runValidators: true }
      );
      if (!task) return res.status(404).json({ error: 'Task not found' });
      res.json(task);
    } catch (err) {
      res.status(400).json({ error: 'Invalid data or ID' });
    }
  };
  
  const deleteTask = async (req, res) => {
    try {
      const task = await taskModel.findByIdAndDelete(req.params.id);
      if (!task) return res.status(404).json({ error: 'Task not found' });
      res.json({ message: 'Task deleted successfully' });
    } catch (err) {
      res.status(400).json({ error: 'Invalid ID' });
    }
  };
  
  const getTaskById = async (req, res) => {
    try {
      const task = await taskModel.findById(req.params.id);
      if (!task) return res.status(404).json({ error: 'Task not found' });
      res.json(task);
    } catch (err) {
      res.status(400).json({ error: 'Invalid ID' });
    }
  };
  

  export default {createTask,getAllTasks,updateTask ,deleteTask,getTaskById}