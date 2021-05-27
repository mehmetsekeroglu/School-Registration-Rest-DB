import * as lecturesRepository from '../persistency/lectures-repository.js'

export async function getAllLectures(){
    return await lecturesRepository.getAll();
}

export async function getLectureById(pId){
    let lecture = await lecturesRepository.findById(pId)
    return lecture;
}

export async function createLecture(pLecture){
    return await lecturesRepository.create(pLecture);
}

export async function deleteLecture(pId){
    return await lecturesRepository.remove(pId);
}