import styled, { css } from 'styled-components'

interface cardCourseProps{
  hasArea?:boolean
  title?:string
}


export const Container = styled.div<cardCourseProps>`

  overflow: hidden;

  width: 100%;
  min-width: 350px;
  min-height: 200px;
  max-height: 250px;
  height: 250px;

  background: #FBF9FD;
  box-shadow: 0px 1px 2px 0px rgba(95, 95, 95, 0.25);
  border-radius: 24px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  padding: 20px;
  padding-right: 0;

  ${(props) => props.hasArea === true ?
    css`
      margin-bottom: 100px;
    `
      :
    css`
      margin-bottom: none !important;
    `
  }

  @media (max-width: 760px) {
    min-width: 264px;
    height: auto;
    width: 90%;
  }

  @media(max-width:648px ){
    width: 100%;
  }

  h5{
    font-weight: 700;
    line-height: 32px;
    font-size: 24px;
    color: #62498A;
    max-width: 70%;

    @media (max-width: 760px) {
      font-size: 20px;
      max-width: 200px;
      line-height: 26px;
    }
  }

.time{
   display: flex;
   justify-content: space-between;

   margin-top:35px;


   ${(props) => props.title?.length  && props.title.length > 35 ?
    
    css`
      margin-top:11px;

    ` 
    :

     css`
         margin-top:45px;

    ` 

  }

   @media (max-width: 760px) {
   margin-top:20px;
  }

   svg{
     margin-bottom: 3px;
   }
   >div{
     display: flex;
     align-items: center;
     flex-direction: column;
     color:#965FC1;
     font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    @media (max-width: 760px) {
      font-size: 12px;
      line-height: 14px;
    }
   }

   .btn{
     margin-right: 10px;
   }
 }

.contentBtn{
  width: 10.5rem;
  margin-right: 1rem;

  @media (max-width: 760px) {
    width: 8.5rem;
  }
}

`
export const Area = styled.div`
min-width: 150px;
max-width: 70%;
height: 30px;
left: 60px;
top: 40px;

/* Primary/03 */

background: #965FC1;
border-radius: 24px;

font-family: 'Fresca';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;

/* Background/03 */

color: #FAF7FC;

display: flex;
align-items: center;
justify-content: center;

margin-bottom:20px ;


 @media (max-width: 760px) {
    font-size: 12px;
  }
`