import React from 'react';
import { CgClose } from 'react-icons/cg';
import { Container } from './styles';

import { MdOutlineWatchLater } from 'react-icons/md';
import farmacia from '../../assets/farmacia.png';
import { useSidebar } from '../../hooks/useSidebar';

import { useRouter } from 'next/router';
import { useAuth } from '../../hooks/useAuth';
import { useLang } from '../../hooks/useLang';
import { SubjectsProps } from '../../Types';
import { totalHours } from '../../utils/sumTotalHours';
import Button from '../button';

interface SubjectArray{
  subject:SubjectsProps[]
  courseTitle:string
  courseId:number
}

const Subjects:React.FC<SubjectArray> = ({subject,courseTitle,courseId}) =>{

  const {isActiveSubjects,closeSidebarSubjects} = useSidebar()
  const {user} = useAuth()
  const {t} = useLang()

  const router = useRouter();

  const handlePersionRedirect = () =>{
    const pathname = user? 
    `cursos/${courseId}/compra-pagamento-cartao`:
    `cursos/${courseId}/compra-cadastro`

    router.push({pathname});


  }

  return(
    <Container isActive={isActiveSubjects} >
      <div className='backgroundBlur'>
        <div >
          <div style={{
          backgroundImage: `url(${farmacia.src})`,
          backgroundRepeat:'no-repeat',
          backgroundPosition:"100% 70%",
          backgroundSize: '35% '
          }}>
            <h4>{courseTitle}<span><CgClose onClick= {() =>{closeSidebarSubjects()}} /></span></h4>
            <p><span><MdOutlineWatchLater/></span> {totalHours(subject)} Horas</p>
          </div>
        </div>
        <section>
          <div className="overflow-x-auto">
            <table className="table-normal w-full even:bg-purple900">
              <thead>
                <tr className="table-normal w-full ">
                  <th  className="text-left">{t.CURSOS.SUBJECTS}</th>
                  <th>{t.CURSOS.HOURS}</th>
                </tr>
              </thead>
              <tbody >
                  {subject.map((item) =>{
                    return(
                        <tr key={item.id} >
                          <td>{item.description}</td>
                          <td className="text-center">{item.course_load}</td>
                        </tr>
                    )
                  })}
              </tbody>
            </table>
            <aside className='w-60 mx-auto m-5 block'>
              <div onClick={handlePersionRedirect}>
                <a>
                  <Button typeButton={'primary'} text={t.GLOBAL.BUTTON.SING_UP}/>
                </a>
              </div>
            </aside>

          </div>
          
        </section>
        
      </div>
    </Container>
  )
}

export default Subjects