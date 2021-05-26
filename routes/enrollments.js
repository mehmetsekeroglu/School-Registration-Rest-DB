import express from "express";
let router = express.Router();
//import * as service from '../services/enrollments-service';

router.get('/', async function (req, res) {
    res.send("enrollments")
})

export default router;