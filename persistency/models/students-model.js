export default (sequelize, Sequelize) => {
    const Students = sequelize.define("Students", {
      id: {
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      class: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      }
    });
  
    return Students;
  };