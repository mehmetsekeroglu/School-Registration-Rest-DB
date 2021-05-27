import * as studentsRepository from '../persistency/students-repository.js'

export async function getAllStudents(){
    return await studentsRepository.getAll();
}

export async function getStudentById(pId){
    let student = await studentsRepository.findById(pId)
    return student;
}

export async function createStudent(pStudent){
    return await studentsRepository.create(pStudent);
}

export async function deleteStudent(pId){
    return await studentsRepository.remove(pId);
}