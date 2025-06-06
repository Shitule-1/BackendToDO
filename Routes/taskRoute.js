import express from 'express'
import taskControllers from '../Controllers/taskController.js'
const router=express.Router()

router.post('/tasks/create',taskControllers.createTask)
router.get('/tasks/all',taskControllers.getAllTasks)
router.put('/tasks/update/:id',taskControllers.updateTask)
router.delete('/tasks/delete/:id',taskControllers.deleteTask)
router.get('/tasks/:id',taskControllers.getTaskById)

export default router 