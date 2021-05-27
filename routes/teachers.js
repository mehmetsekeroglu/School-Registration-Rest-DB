import express from "express";
let router = express.Router();
import * as service from '../services/teachers-service.js';

/**GET All Teachers */
router.get('/', async function(req, res, next) {
    const allTeachers = await service.getAllTeachers();
    res.send(allTeachers);
  });

  /**GET a teacher by ID */
router.get('/:id', async function(req, res, next) {
    let teacherId = req.params.id;
    const teacher = await service.getTeacherById(teacherId)
    res.send(teacher);
  });

  /**Add a new teacher */
router.post('/', async function(req, res, next) {
    const newTeacher = req.body; 
    const createdTeacher = await service.createTeacher(newTeacher);
    res.status(201).send(createdTeacher);
  });

/**Delete a teacher */
router.delete('/:id', async function(req, res, next) {
    let teacherId = req.params.id;
    await service.deleteTeacher(teacherId);
    res.status(200).send({});
  });
export default router;