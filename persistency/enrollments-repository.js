import db from "../sequelize-setup.js"

export async function getAll(){
    return await db.enrollments.findAll();
  }
  
  export async function findById(pId){
    return await db.enrollments.findByPk(pId);
  }
  
  export async function create(pMovie){
    return await db.enrollments.create(pMovie);
  }
  
  export async function remove(pId){
    return await db.enrollments.destroy({
      where: { id: pId }
    })
  }