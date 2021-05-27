import express from "express";
let router = express.Router();
import * as service from '../services/lectures-service.js';

/**GET All Lectures */
router.get('/', async function(req, res, next) {
    const allLectures = await service.getAllLectures();
    res.send(allLectures);
  });

  /**GET a lecture by ID */
router.get('/:id', async function(req, res, next) {
    let lectureId = req.params.id;
    const lecture = await service.getLectureById(lectureId)
    res.send(lecture);
  });

  /**Add a new lecture */
router.post('/', async function(req, res, next) {
    const newLecture = req.body; 
    const createdLecture = await service.createLecture(newLecture);
    res.status(201).send(createdLecture);
  });

/**Delete a lecture */
router.delete('/:id', async function(req, res, next) {
    let lectureId = req.params.id;
    await service.deleteTeacher(lectureId);
    res.status(200).send({});
  });
  
export default router;