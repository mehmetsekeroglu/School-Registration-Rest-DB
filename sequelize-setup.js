import Sequelize from 'sequelize';
import dbConfig from "./env-config.json";
import StudentsModel from "./persistency/models/students-model.js";
import TeachersModel from "./persistency/models/teachers-model.js";
import LecturesModel from "./persistency/models/lectures-model.js";
import EnrollmentsModel from "./persistency/models/enrolments-model.js";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.teachers = TeachersModel(sequelize, Sequelize);
db.lectures = LecturesModel(sequelize, Sequelize);
db.students = StudentsModel(sequelize, Sequelize);
db.enrollments = EnrollmentsModel(sequelize, Sequelize);

// create relationship
//db.movies.hasMany(db.rents);

// use it to force to create the db from scratch 
// .sync({ force: true })
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

export default db;