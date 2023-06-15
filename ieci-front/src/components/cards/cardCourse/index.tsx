import React, { BaseHTMLAttributes,HTMLAttributes, useEffect,useState } from 'react'
import {Container,Area} from './styles'
import { MdOutlineWatchLater } from 'react-icons/md';
import {Button} from '../../'
import {useSidebar} from '../../../hooks/useSidebar'
import {CoursesProps} from '../../../Types'

import {totalHours} from '../../../utils/sumTotalHours'

interface CardCourseProps extends HTMLAttributes<HTMLDivElement>{
  hasArea?:boolean
  nameArea?:string
  course:CoursesProps
  activeModal?(value:number):void
}

const CardCourse: React.FC<CardCourseProps> = ({nameArea,hasArea = true,course,activeModal, ...rest})=>{
  
  const handleClick = (id:number) =>{
    activeModal && activeModal(id)
    openSidebarSubjects(id)
  }

  const {openSidebarSubjects} = useSidebar()

  return(
    <Container {...rest} title={course.title} hasArea ={hasArea}>
      <div>
        {hasArea &&  <Area>{course.category.name}</Area>}
        <h5>{course.title}</h5>
      </div>
      <div className='time'>
        <div>
          <MdOutlineWatchLater size={25}/>
          {totalHours(course.subject)} horas
        </div>
        <div className='contentBtn' onClick={() =>{handleClick(course.id)}}>
          <Button typeButton={'fourth'} text={'Inscrever-se'}/>
        </div>
      </div>
    </Container>
  )
}

export default CardCourse