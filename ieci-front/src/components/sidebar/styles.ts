import styled, { css } from 'styled-components'

interface sidebarProps{
  isActive:boolean
}

export const Container = styled.div<sidebarProps>`
  width: 100%;
  max-width: 306px;

  @media(max-width:648px ){
    position: fixed;
    height: 100%;
    top: 0;
    max-width:100%;

    ${props =>
    props.isActive ?
    css`
      background-color: rgba(125, 125, 125, 0.2);
      -webkit-backdrop-filter: blur(5px); 
      backdrop-filter: blur(5px);
    `
    :
    css`
      background-color:initial;
      -webkit-backdrop-filter: initial; 
      backdrop-filter: initial;
      display: none;

    `
  }
  }

  .backgroundBlur{
    width: 306px;
    min-height: 100vh;
    height: 100%;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    padding: 80px 24px 0 24px;
    position: relative;
    z-index: 10;
    transition: all 400ms;
    animation: 400ms;
    animation-name:sidebar;


    ${props =>
     props.isActive ?
      css`
        transition: all 400ms;
        transform: translateX(0) ;
      `
      :
      css`
        @keyframes sidebar {
          0% {
            transform: translateX(-100%) ;
          }
          100% {
            display: none;
          }
        }

      `
    }

    @media(max-width:648px ){
      padding-top: 24px;
    }

    .h4{
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 40px;
      margin-bottom: 45px;
      color: #965FC1;
    
      svg{
        display: none;
        transition: all 400ms;
        cursor: pointer;

        &:hover{
          transform: scale(1.2);
          font-weight: bold;
        }
      }

      @media(max-width:648px ){
        display: flex;
        justify-content: space-between;
        align-items: center;

        svg{
          display: initial;
        }
      }
    }

    .overflow{
      max-height: calc(100vh + 60px);

      @media(max-width:648px ){
        max-height: 81.5vh;
      }
      overflow-y: scroll;
        &::-webkit-scrollbar {
        display: none;
      }
    }

    .filter{
      bottom: 0;
      left: 0;
      height: 160px;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.1);
      -webkit-backdrop-filter: blur(2px); 
      backdrop-filter: blur(2px); 
      position: absolute;
      z-index: 999999;

      @media(max-width:648px ){
        display: none;
      }
    }
  }
 
  >div{
    div + div{
      margin-top: 4px;
    }
  }

`
