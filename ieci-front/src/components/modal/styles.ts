import styled, { css } from 'styled-components'

interface sidebarProps{
  isActive:boolean
}

export const Container = styled.div<sidebarProps>`
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  /* background-color: rgba(125, 125, 125, 0.2); */
  -webkit-backdrop-filter: blur(5px); 
  backdrop-filter: blur(5px);


  ${props =>
    props.isActive ?
    css`
      display: initial;
    `
    :
    css`
      display: none;
    `
    }

  .backgroundBlur{
    background: #62498A;
    border-radius:0 24px 24px 0;
    margin-right: auto;
    left: 0;
    width: 40%;
    max-width: 546px;
    min-height: 100vh;
    height: 100%;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    position: relative;
    z-index: 9999;
    transition: all 400ms;
    animation: 400ms;
  }

`

export const Content = styled.div`

width: 100%;
height: 100vh;
padding: 40px 47px 10px 47px;
display: flex;
flex-direction: column;
justify-content: space-between;


label + label {
  margin-top: 15px !important;
}

  div{
    header{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;

      margin-top: 20px;

      h5{
        margin: 25px 0 55px 0;
        font-size: 26px;
        line-height: 32px;

        color: #EFDBFE
      }
    }

    section{
      h5{

      font-style: normal;
      font-weight: 700;
      font-size: 26px;
      line-height: 32px;
      color: #C69EEE;
      margin-bottom: 16px;
    }
    label{
      width: 100%;
        font-weight: 700;
        font-size: 20px;
        line-height: 32px;
        color: #EFDBFE;

        display: flex;
        align-items: center;

        p{
          margin-left: 5px;
          font-weight: 400;
          color: #EFDBFE;
        }
      }

    }
}
.btnClosed{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: end;
  color: #EFDBFE;
  font-size: 18px;
  transition: transform 400ms;

  &:hover{
    transform: scale(1.05);
  }

  svg{
    margin-left: 10px;
  }
}



`
