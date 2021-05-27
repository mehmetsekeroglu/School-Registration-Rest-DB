import express from "express";
let router = express.Router();
import * as service from '../services/students-service.js';

/**GET All Students */
router.get('/', async function(req, res, next) {
    const allStudents = await service.getAllStudents();
    res.send(allStudents);
  });

  /**GET a student by ID */
router.get('/:id', async function(req, res, next) {
    let studentId = req.params.id;
    const student = await service.getStudentById(studentId)
    res.send(student);
  });

  /**Add a new student */
router.post('/', async function(req, res, next) {
    const newStudent = req.body; 
    const createdStudent = await service.createStudent(newStudent);
    res.status(201).send(createdStudent);
  });

/**Delete a student */
router.delete('/:id', async function(req, res, next) {
    let studentId = req.params.id;
    await service.deleteStudent(studentId);
    res.status(200).send({});
  });
export default router;