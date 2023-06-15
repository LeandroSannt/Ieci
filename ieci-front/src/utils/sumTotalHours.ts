import {SubjectsProps} from '../Types'

 export const totalHours = (subject:SubjectsProps[]) =>{

    const totalHours = subject.reduce(function(soma, atual) {
      return soma + atual.course_load;
    }, 0)


    return totalHours
  }