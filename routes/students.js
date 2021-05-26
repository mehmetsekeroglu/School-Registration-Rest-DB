import express from "express";
let router = express.Router();
//import * as service from '../services/students-service';

router.get('/', async function (req, res) {
    res.send("Students")
})

export default router;