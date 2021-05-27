import db from "../sequelize-setup.js"

export async function getAll(){
    return await db.lectures.findAll();
  }
  
  export async function findById(pId){
    return await db.lectures.findByPk(pId);
  }
  
  export async function create(pMovie){
    return await db.lectures.create(pMovie);
  }
  
  export async function remove(pId){
    return await db.lectures.destroy({
      where: { id: pId }
    })
  }