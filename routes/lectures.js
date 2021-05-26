import express from "express";
let router = express.Router();
//import * as service from '../services/lectures-service';

router.get('/', async function (req, res) {
    res.send("Lectures")
})

export default router;