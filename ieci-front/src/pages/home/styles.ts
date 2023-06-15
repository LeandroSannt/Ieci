import styled from 'styled-components'
import Image from 'next/image'
import wavebg from '../../assets/wave.png'

const InitialSection = styled.section`
min-height: 734px;
width: 100%;
background: #EFDBFE;

display: flex;
justify-content: space-between;

 @media (max-width: 1100px){
    min-height: 561px;
  }

   @media (max-width: 760px){
    min-height: 440px;
  }

  @media (max-width: 580px){
    min-height: 164px;
  }

`

const PopularCourses = styled.section`

  width: 100%;
  //min-height: 688px;
  background: #F4EDFA;
  padding: 83px 0px 40px 40px;

  .title{
   max-width: 700px;
   margin-bottom: 50px;

   @media (max-width: 540px) {
    margin-bottom: 24px;
  }

    h1{
      font-size: 3rem;
      line-height: 3rem;
      margin-bottom: 20px;
      color: #62498A;

      @media (max-width: 540px) {
        font-size: 24px;
        margin-bottom: 8px;
        line-height: 29px;

      }
    }

    p{
      font-style: normal;
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 1.5rem;
      color: #9F9F9F;

      @media (max-width: 540px) {
        font-size:12px;
        line-height: 15px;
      }
    }
  }

  @media (max-width: 540px) {
    padding: 20px 0px 20px 20px;
    h1{
      font-size: 24px;
    }
  }
`

const Wave = styled.div`
  width: 100%;
  height: calc(100%);
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: -1;
    span{
      left: -20px;
      width: 740px !important;
      height: 100% !important;

      @media (max-width: 1100px){
        width: 100% !important;
      }

      @media (max-width: 580px){
        left: 0px;
        height: 175% !important;
      }
    }
    img{
      object-fit: cover;
    }

    @media (max-width: 1100px){

      span{
        width: 100%;
      }
      
    }

`

const Woman = styled.div`
    position: absolute;
    width: 415px;
    height: 534px;
    bottom: 0;
    left: 59px;

    @media (max-width: 1100px){
      left: initial;
      right: 4% ; 
    }

    @media (max-width: 760px){
      width: 340px;
      height: 440px;
    }

    @media (max-width: 580px){
      width: 150px;
      height: 171px;
      overflow: hidden;
    }


`

const Courses = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;


  margin-top: 136px;

  margin-left: auto;
  width: 60vw;

  z-index: 3;
  right: 0;

  .contentCourses{
    width: 100%;
  }

  h4{
    margin-left: 153px;
  }

  @media (max-width: 1100px){
    display: none;
  }

`

const CoursesResponsive = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  display: none;
  padding: 0 24px;

  margin-top: 136px;

  margin-left: auto;
  width: 60vw;

  z-index: 3;
  right: 0;

  .contentCourses{
    width: 100%;
  }

  h4{
    text-align: center;
  }

  @media (max-width: 1100px){
   display: initial;
   
  }

  @media (max-width: 480px){
   h4{
     font-size: 14px;
     color: #965FC1 !important;
   }
  }

  

`

const BgWave = styled.div`
position: absolute;
min-height: 734px;
width: 100%;
z-index: 1;
background: #EFDBFE;

@media (max-width: 1100px){
    min-height: 561px;
}

@media (max-width: 760px){
  min-height: 440px;
}

@media (max-width: 580px){
  min-height: 164px;
}

.title{
  margin:5rem 0 0 1.5rem;

  @media (max-width: 760px){
        margin:1.5rem 0 0 1rem;
    }

  h1{
    font-size: 56px !important;

    @media (max-width: 1100px){
      font-size: 2.5rem !important;
    }

    @media (max-width: 760px){
      font-size: 2rem !important;
    }

    @media (max-width: 580px){
      font-size: 1.5rem !important;
    }

    @media (max-width: 376px){
    line-height: 24px;

      font-size: 1.25rem !important;
    }
    
  }

  span{
    color: #EAEAEA;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #EAEAEA;

    @media (max-width: 1100px){
      font-size: 1.3rem !important;
    }

    @media (max-width: 760px){
      font-size: 1.1rem !important;
    }

    @media (max-width: 760px){
      font-size: 0.8rem !important;
    }

    @media (max-width: 376px){
    line-height: 16px;

      font-size: 0.8rem !important;
    }
  }
}

`

const MostWanted = styled.section`
padding: 75px 40px;
display: flex;
max-width: 1100px;
margin: 0 auto;
justify-content:center;
align-items: flex-start;
padding-bottom: 0;

  .content-wanted{
    max-width: 278px;
    height: 100%;

    h3{
    font-size: 48px;
    line-height: 58px;
    /* Primary/05 */
    color: #62498A;

    @media (max-width: 540px){
      margin-top: 32px;
      font-size: 24px;
    }
    }

    p{
      margin-top: 20px;
      margin-bottom:40px;

      @media (max-width: 540px){
        margin: 0 auto;
        font-size: 12px;
        line-height: 15px;
        margin-top: 0;
        margin-bottom:32px;
        max-width: 335px;
      }
    }

    .btnResponsive{
      width: 195px ;
      margin-top: auto;

      @media (max-width: 800px){
        display: none;
      }

    }
  }

  .cardReverse{
    padding: 20px 0;
    display: flex;
    flex-direction: column-reverse;
    width:100%;

    
    
    .gridCards{
      width: 100%;
      margin-left: 20px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 9px;
      margin-bottom: 32px;
      place-items: center;

       @media (max-width: 760px){
          margin-left: 0;
        }
    }
    .btnResponsive2{
        display: none;
      }

    @media (max-width: 800px){
      .btnResponsive2{
        display: initial;
      }
    }
  }

  @media (max-width: 760px){
      width: 100%;
      max-width: 100%;

      .content-wanted{
        max-width: 100%;
        width: 100%;

      }

      h3{
        font-size: 24px;
        text-align: center;
      }

      p{
        text-align: center;
      }

      h4{
        font-size: 12px;
      }

  }

  @media (max-width: 800px){
    padding: 32px 20px ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

`

const Feedbacks = styled.section`
width: 100%;
background: #62498A;
padding: 40px 0;
padding-left: 40px;

  h2{
    color:#EFDBFE ;

    @media (max-width: 540px){
      line-height: 34px;
      font-size: 28px;
    }
  }
  p{
    color: #C69EEE;

    @media (max-width: 540px){
      line-height: 17px;
      font-size: 14;
    }
  }

`

const OurPlataform = styled.section`
margin: 0 auto;
width: 100%;
width: calc(100% - 348px );
min-height:796px ;
background: #F9F1FF;
padding: 60px 40px 0 40px;

display: flex;
align-items: flex-start;
justify-content: space-between;
flex-direction: column;


  .title{
    margin-bottom: 31px;
    padding-left: 5px;
    
    h4{
      color: #B1B1B1;
      line-height: 40px;
    }
    h2{
      color: #62498A;
      line-height: 56px;
    }
  }

  span{
    width: 100% !important;
  }

  .informations{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid: 20px;

    h5{
      font-size: 1.3rem;
      color: #965FC1;
      font-weight: 700;
      line-height: 32px;
      text-align: center;

      word-break:  break-all;
    }
  }

  .help-me-course{
    margin-bottom: -53px;
    margin-top: 10px;
    display: flex;
    align-items: flex-start;
    min-height: 373px;
    width: 100%;

  }
`

export {InitialSection,PopularCourses,MostWanted,Feedbacks,OurPlataform,Wave,Woman,BgWave,Courses,CoursesResponsive}