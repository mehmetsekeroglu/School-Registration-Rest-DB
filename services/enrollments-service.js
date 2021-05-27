import * as enrollmentsRepository from '../persistency/enrollments-repository.js'

export async function getAllEnrollments(){
    return await enrollmentsRepository.getAll();
}

export async function getEnrollmentById(pId){
    let enrollment = await enrollmentsRepository.findById(pId)
    return enrollment;
}

export async function createEnrollment(pEnrollment){
    return await enrollmentsRepository.create(pEnrollment);
}

export async function deleteEnrollment(pId){
    return await enrollmentsRepository.remove(pId);
}