import React from 'react'
import { ContentCourses } from './styles'
import {Course} from '../course'

interface CourseProps{
  courses:Array<string>
}

const BallonCourses:React.FC<CourseProps> = ({courses}) =>{

  try{
    if(courses.length > 26){
    throw Error('so é possivel receber no maximo 26 cursos')
  }

  }catch(err){
    courses = []
  }

  const arrSelecao = courses.slice(0, 2);
  const arrSelecao2 = courses.slice(2, 5);
  const arrSelecao3 = courses.slice(5, 9);
  const arrSelecao4 = courses.slice(9, 13);
  const arrSelecao5 = courses.slice(13, 17);
  const arrSelecao6 = courses.slice(17, 21);
  const arrSelecao7 = courses.slice(21, 24);
  const arrSelecao8 = courses.slice(24, 26);

  return(
    <ContentCourses>
      <div className='slice' style={{marginLeft:'170px'}}>
        {arrSelecao.map((item,index) =>{
          return(
            <Course key={index} text={item}/>
          )
        })}
      </div>

      <div className='slice' style={{marginLeft:'150px'}}>
        {arrSelecao2.map((item,index) =>{
        return(
          <Course key={index} text={item}/>
        )
      })}
      </div>

      <div className='slice' style={{marginLeft:'80px'}}>
        {arrSelecao3.map((item,index) =>{
        return(
          <Course key={index} text={item}/>
        )
      })}
      </div>

      <div className='slice' style={{marginLeft:'10px'}}>
        {arrSelecao4.map((item,index) =>{
        return(
          <Course key={index} text={item}/>
        )
      })}
      </div>

      <div className='slice' style={{marginLeft:'20px'}}>
        {arrSelecao5.map((item,index) =>{
        return(
          <Course key={index} text={item}/>
        )
      })}
      </div>

      <div className='slice' style={{marginLeft:'20px'}}>
        {arrSelecao6.map((item,index) =>{
        return(
          <Course key={index} text={item}/>
        )
      })}
      </div>

      <div className='slice'>
        {arrSelecao7.map((item,index) =>{
        return(
          <Course key={index} text={item}/>
        )
      })}
      </div>

      <div className='slice'>
        {arrSelecao8.map((item,index) =>{
        return(
          <Course key={index} text={item}/>
        )
      })}
      </div>
      
    </ContentCourses>
  )
}

export default BallonCourses