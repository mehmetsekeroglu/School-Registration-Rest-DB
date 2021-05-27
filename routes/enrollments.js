import express from "express";
let router = express.Router();
import * as service from '../services/enrollments-service.js';

/**GET All Enrollments */
router.get('/', async function(req, res, next) {
    const allEnrollments = await service.getAllEnrollments();
    res.send(allEnrollments);
  });

  /**GET a enrollment by ID */
router.get('/:id', async function(req, res, next) {
    let enrollmentId = req.params.id;
    const enrollment = await service.getEnrollmentById(enrollmentId)
    res.send(enrollment);
  });

  /**Add a new enrollment */
router.post('/', async function(req, res, next) {
    const newEnrollment = req.body; 
    const createdEnrollment = await service.createEnrollment(newEnrollment);
    res.status(201).send(createdEnrollment);
  });

/**Delete a enrollment  */
router.delete('/:id', async function(req, res, next) {
    let enrollmentId = req.params.id;
    await service.deleteEnrollment(enrollmentId);
    res.status(200).send({});
  });
  
export default router;