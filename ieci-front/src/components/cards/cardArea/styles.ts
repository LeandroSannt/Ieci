import styled,{css} from 'styled-components'

interface ContaienerProps{
  modelTwo?:boolean
}

export const Container = styled.button<ContaienerProps>`

width: 100%;
max-width: 350px;
//min-width: 200px;
max-height: 200px;

background: #965FC1;
box-shadow: 0px 0px 20px rgba(95, 95, 95, 0.25);
border-radius: 24px;

display: flex;
justify-content: space-between;
flex-direction: column;

padding: 25px 20px;

cursor: pointer;

${(props) => props.modelTwo && 
  css`
  height: 120px;
  border-radius: 8px;
  box-shadow: initial;
  background: #F9F1FF;
  transition: 400ms;
  font-weight: 400;
  padding:10px 20px;


  &{
    margin-bottom: 5px;
  }

  display: flex;
  /* justify-content: center; */
  /* align-content: center; */

  >div{
    justify-content: center;

    h4{
      width: 202px;
      font-size: 22px;
      /* white-space: nowrap; */

    }
  }

  &:hover{
    background: #965FC1;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.25);
   // width: 105%;

    h4{
      color: #F9F1FF;
    }
  }
`
}

  @media (max-width: 648px){
   // min-width: 163px;
    //min-height: 136px;
    padding: 17px 20px;

    justify-content: center;
  }

  @media (max-width: 446px){
   // min-width: 163px;
    //min-height: 136px;
    padding: 17px 20px;
  }

  h4{
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    color: #EFDBFE;
    overflow: hidden;
    /* width :150px; */
    /* text-overflow: ellipsis; */

    text-align: left;

    @media (max-width: 648px){
      margin-bottom: 0;
    }

    ${(props) => props.modelTwo && 
      css`
        font-weight: 400;
        color: #C69EEE;
        font-size: 22px;
        width :202px;

      `
  }

  @media (max-width: 760px){
    font-size: 18px !important;
    font-weight: bold;
    line-height: 24px;
  }
  }

  p{
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 1.25rem;
    line-height: 24px;
    color: #FFFFFF;
    text-align: left !important;

    @media (max-width: 760px){
      font-size: 14px;
      line-height: 14px;
      margin-top: 8px;
    }
  }

.btn-card{
  width: 160px;
  margin-right: 16px;
  margin-top: auto;

  @media (max-width: 446px){
    width: 131px;
    height: 40px;
  }
}



`
