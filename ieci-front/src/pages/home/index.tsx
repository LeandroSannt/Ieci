/* eslint-disable react/jsx-key */
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SwiperSlide } from 'swiper/react'
import bgWanteds from '../../assets/bg-wanteds.png'
import background from '../../assets/ilustração.svg'
import menDefault from '../../assets/menDefault.png'
import tutorial from '../../assets/tutorial_simples.svg'
import wavebg from '../../assets/wave.png'
import woman from '../../assets/woman.png'
import womanDefault from '../../assets/womanDefault.png'
import { BallonCourses, Button, Carrousel, Footer } from '../../components'
import { CardArea, CardCoures, CardFeedback } from '../../components/cards'
import { BgWave, Courses, CoursesResponsive, Feedbacks, InitialSection, MostWanted, OurPlataform, PopularCourses, Wave, Woman } from './styles'


import { useLang } from '../../hooks/useLang'

import { useQuery } from 'react-query'
import Header from '../../components/header'
import { useAuth } from '../../hooks/useAuth'
import api from '../../services/api'
import { AreasProps, CoursesProps } from '../../Types'
const Home: NextPage = () => {

   const {data,isLoading} = useQuery<CoursesProps[]>(['courses'], async () =>{
    const response = await api.get('/course',{
      params:{
        category_id:2,
      }
    })
    return response.data
  },{
    refetchOnWindowFocus:false
  })


  const areas = useQuery<AreasProps[]>('category', async () =>{
    const response = await api.get('/category')
    return response.data
    }
  )

  const {t} = useLang()
  const {user} = useAuth()

  const arr = ['Comunicação e Marketing','Psicologia','Tecnologia','Ecologia e Sustentabilidade','Saúde','Nutrição','Contabilidade e Finanças','Veterinária','MBA','Administração Pública','Serviço Social','Educação Física','Turismo','Engenharia e Segurança','Empresarial','Música','Enfermagem','Inclusão Social','Teologia','Estética e Bem Estar','Direito','Agronomia','Recursos Humanos','Trânsito','Segurança','Farmácia']

  const arrCards2 = [
  <CardFeedback  name={'Caio Castro'} avatar={menDefault.src} feedback={'Impressionado com apraticidade que tive deencontrar e comprar ocurso que eu procurava'} gender={'m'}/>,
  <CardFeedback  name={'Caio Castro'} avatar={womanDefault.src} feedback={'Curso íncrivel! Não poderiater escolhido uma plataforma melhor para encontrar minha pós-graduação'}
  gender={'f'}/>,
  <CardFeedback  name={'Caio Castro'} avatar={menDefault.src} feedback={'Sensacional! Site simples edescomplicado, oferecesomente cursos de qualidade'} gender={'m'}/>,
  <CardFeedback  name={'Caio Castro'} avatar={womanDefault.src} feedback={'Impressionado com apraticidade que tive deencontrar e comprar ocurso que eu procurava'} gender={'m'}/>,
  <CardFeedback  name={'Caio Castro'} avatar={menDefault.src} feedback={'Sensacional! Site simples edescomplicado, oferecesomente cursos de qualidade'} gender={'f'}/>,
  ]
  return (

    <>
      <Header />
      <InitialSection>
        <BgWave>
          <div className='title'>
            <h1 style={{color:"#EFDBFE"}}>{t.HOME.POSGRATUATION}</h1>
            <span>
              {t.HOME.TRANSFORM}
            </span>
          </div>
          <Wave>
            <Image src={wavebg} alt="Picture of the author"/>
          </Wave>
          <Woman >
            <Image src={woman} alt="Picture of the author" />
          </Woman>
        </BgWave>
        <Courses>
          <h4 style={{color:"#62498A" }}>{t.HOME.SEE_OUR_AREAS}</h4>
          <BallonCourses courses={arr}/>
        </Courses>
   
      </InitialSection>

      <CoursesResponsive>
        <h4 style={{color:"#62498A" }}>{t.HOME.SEE_OUR_AREAS}</h4>
        <BallonCourses courses={arr}/>
      </CoursesResponsive>

      <PopularCourses>
        <div className='title'> 
          <h1>{t.HOME.POPULAR_COURSES}</h1>
          <p>
           {t.HOME.PROGRAMS_WITH_CONTENT}
          </p>
        </div>  
        <Carrousel totalCards={4}  spacing={30}>
          {data?.map((card,index) =>(
          <SwiperSlide key={index}>
   <        CardCoures  hasArea course={card}  />,
          </SwiperSlide>
        ))}
        </Carrousel>
        <div className='w-100 flex justify-center items-center relative'>
          <div className='w-64 absolute -bottom-12'>
            
          </div>
        </div>
        
      </PopularCourses>
      
      <MostWanted style={{backgroundImage: `url(${bgWanteds.src})`,
      backgroundRepeat:'no-repeat',
      backgroundPosition:"0% 100%",
      backgroundSize:"450px 300px"}}>
        <div className='content-wanted'>
          <div>
          <h3>{t.HOME.MOST_WANTED_AREAS}</h3>
            <p>
              {t.HOME.PROGRAMS_WITH_CONTENT}
            </p>
            </div>

            <div className='btnResponsive'>
              <Link  href={'/cursos'} passHref>
                <a >
                  <Button typeButton={'eighth'} text={t.GLOBAL.BUTTON.SEE_ALL_AREAS} className={'w-64 -mb-128'}/>
                </a>
              </Link>
            </div>
        </div>

        <div className='cardReverse'>
          <div className='flex justify-center items-center '>
            <div className='w-52 btnResponsive2 '>
              <Button typeButton={'eighth'} text={t.GLOBAL.BUTTON.SEE_ALL_AREAS} className={'w-64 -mb-128'}/>
            </div>
          </div>

          <div className='gridCards'>

            {areas.data?.map((card) =>{
              return(
                <CardArea key={card.id}   modelTwo={false} area={card}/>
              )
            }).slice(0,6)}
           
          </div>
        </div>
      </MostWanted>

      <Feedbacks>
        <h2>{t.HOME.FEEDBACKS}</h2>
        <p className='mb-10'>{t.HOME.WHAT_THEY_HAVE_TO_SAY}</p>
          
        <div className='contentFeedbackCarrousel'>
          <Carrousel totalCards={5} spacing={90} >
            {arrCards2.map((card,index) =>(
            <SwiperSlide key={index}>{card}</SwiperSlide>
          ))}
        </Carrousel>
        </div>
      </Feedbacks>

      <OurPlataform>
        <div className='title'>
          <h4>{t.HOME.OUR_PLATAFORM}</h4>
          <h2>{t.HOME.SIMPLE_AND_FUN}</h2>
        </div>

        <Image src={tutorial} alt="tutorial simples de uso do sistema" width={'100%'} height={"200px"} />
        
        <div 
        className='help-me-course' 
        style={{backgroundImage: `url(${background.src})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:"right",
        backgroundSize:"700px 373px"}}
        >
          <div className='w- flex justify-center items-center -mb-60 mt-12 ml-2 '>
            <div className='w-full -mb-20 '>
              <Button typeButton={'secondary'} text={t.GLOBAL.BUTTON.FIND_MY_COURSE} className={'w-60 -mb-128'}/>
            </div>
          </div>

        </div>
      </OurPlataform> 
       <Footer/>
    </>
    
  )
}

export default Home
