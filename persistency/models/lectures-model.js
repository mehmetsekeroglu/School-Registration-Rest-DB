export default (sequelize, Sequelize) => {
    const Lectures = sequelize.define("Lectures", {
      id: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      }
    });
  
    return Lectures;
  };