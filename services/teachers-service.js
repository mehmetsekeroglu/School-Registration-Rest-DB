import * as teachersRepository from '../persistency/teachers-repository.js'

export async function getAllTeachers(){
    return await teachersRepository.getAll();
}

export async function getTeacherById(pId){
    let teacher = await teachersRepository.findById(pId)
    return teacher;
}

export async function createTeacher(pTeacher){
    return await teachersRepository.create(pTeacher);
}

export async function deleteTeacher(pId){
    return await teachersRepository.remove(pId);
}