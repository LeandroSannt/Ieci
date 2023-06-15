import React, { useState } from "react";
import { FiSearch } from 'react-icons/fi';
import { IoIosMenu } from 'react-icons/io';
import amico from '../../assets/amico.svg';
import { Footer, Header, ListCourses, Sidebar } from '../../components';
import { Container, CoursesCategory, Input, Section } from './styles';

import { useLang } from '../../hooks/useLang';
import { useSidebar } from '../../hooks/useSidebar';

const Courses:React.FC = () =>{
  const {t} = useLang()
  const {openSidebar} = useSidebar()

  const [findCourses,setFindCourses] = useState(1)
  const [filterCourse, setFilterCourse] = useState('')

  return (
  <>
    <Container>
    <Header/>

    <Section style={{
    backgroundImage: `url(${amico.src})`,
    width: '100%',
    height: '100%',
    backgroundRepeat:'no-repeat',
    backgroundPosition:"center",
    }}>

    <Input>
      <input type="text" placeholder={t.CURSOS.PLACEHOLDER} onChange={((e) =>{setFilterCourse(e.target.value)})} />
      <FiSearch size={26} color ={'#666666'}/>
    </Input>

    </Section>

      <CoursesCategory>
        <div className="activeSidebar"  onClick={() =>{openSidebar()}}>
          <IoIosMenu/>
          <p>{t.CURSOS.CATEGORY}</p>
        </div>
        <Sidebar setFindCourses={setFindCourses}/>
        <ListCourses category_id={findCourses} filterCourse={filterCourse}/>
      </CoursesCategory>  
    <Footer/>
  </Container>
  </>
  )
}

export default Courses