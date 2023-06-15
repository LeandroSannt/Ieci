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
  z-index: 9999;
  background-color: rgba(125, 125, 125, 0.2);
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
    margin-left: auto;
    right: 0;
    width: 45%;
    min-width: 315px;
    min-height: 100vh;
    height: 100%;
    background: #F9F1FF; 
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    position: relative;
    z-index: 9999;
    transition: all 400ms;
    animation: 400ms;
    animation-name:subjects;

    @keyframes subjects {
      0% {
        transform: translateX(200%) ;
      }

      50%{
        transform: translateX(100%) ;
      }
      100% {
        display: none;
      }
    }

    >div{
      >div{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      min-height: 224px;
      background-color: #62498A;
      padding: 50px 24px 50px 24px;

      @media(max-width:648px ){
        min-height: 148px;
        font-size: 20px;
        padding: 33px 14px 33px 14px;
        background-size: 42% !important;
        background-position:80% 70% !important;
      }

        h4{
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          color: #FAF7FC;
          font-size: 40px;
          line-height: 48px;
          
          @media(max-width:648px ){
            width: 90%;
            line-height: 28px;
            font-size: 20px;
          }

          svg{
            font-weight: bold;
            font-size: 50px;
            margin-top: -30px;
            cursor: pointer;
            transition: all 400ms;

            @media(max-width:648px ){
              font-size: 25px;
            }
              &:hover{
                transform: scale(1.1);
                opacity: 0.8;
              }
          }
        }

        p{
          display: flex;
          align-items: center;
          color: #b1b1b1;
          font-weight: bold;

          @media(max-width:648px ){
            font-size: 14px;
          }

            svg{
              margin-right: 5px;
              
            }
        }
      }
    }

    section{
      div{
        height: calc(100vh - 268px);

        /* width */
        &::-webkit-scrollbar {
          width: 10px;
          border-radius: 50%;
        }

        /* Track */
        &::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 50%;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
          background: #EFDBFE;
          border-radius: 30px;
        }

      table{
        margin-top: 60px;
        thead{
          tr{
            color: #62498A;
            font-weight: 700;
          }
        }
        tr{
          font-size: 24px;
          color: #666666;
        }
        tbody{
          tr:nth-child(odd) {
            background:#F2E6FD;
          }
        }
      }
      }
    }
  }

`
