import express from "express";
let router = express.Router();
//import * as service from '../services/teachers-service';

router.get('/', async function (req, res) {
    res.send("Teachers")
})

export default router;