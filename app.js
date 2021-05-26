import express from "express";

//Middlewares
import cookieParser from "cookie-parser";
import logger from 'morgan';
import cors from 'cors';

//Routers
import studentsRouter from './routes/students.js';
import teachersRouter from './routes/teachers.js';
import lecturesRouter from './routes/lectures.js';
import enrollmentsRouter from './routes/enrollments.js';


let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cors());

app.get('/', async function (req, res) {
    res.send("School")
})
app.use('/students', studentsRouter);
app.use('/teachers', teachersRouter);
app.use('/lectures', lecturesRouter);
app.use('/enrollments', enrollmentsRouter);


app.listen(3001, ()=>{
    console.log("running")
})