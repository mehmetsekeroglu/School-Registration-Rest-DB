export default (sequelize, Sequelize) => {
    const Teachers = sequelize.define("Teachers", {
      id: {
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      }
    });
  
    return Teachers;
  };