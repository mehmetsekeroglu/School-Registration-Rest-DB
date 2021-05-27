export default (sequelize, Sequelize) => {
    const Enrollments = sequelize.define("Enrollments", {
      teacherId: {
        type: Sequelize.INTEGER
      },
      lectureId: {
        type: Sequelize.INTEGER
      },
      studentId: {
        type: Sequelize.INTEGER
      }
    });
  
    return Enrollments;
  };