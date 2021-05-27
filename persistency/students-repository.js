import db from "../sequelize-setup.js"

export async function getAll(){
    return await db.students.findAll();
  }
  
  export async function findById(pId){
    return await db.students.findByPk(pId);
  }
  
  export async function create(pMovie){
    return await db.students.create(pMovie);
  }
  
  export async function remove(pId){
    return await db.students.destroy({
      where: { id: pId }
    })
  }