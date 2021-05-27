import db from "../sequelize-setup.js"

export async function getAll(){
    return await db.teachers.findAll();
  }
  
  export async function findById(pId){
    return await db.teachers.findByPk(pId);
  }
  
  export async function create(pMovie){
    return await db.teachers.create(pMovie);
  }
  
  export async function remove(pId){
    return await db.teachers.destroy({
      where: { id: pId }
    })
  }