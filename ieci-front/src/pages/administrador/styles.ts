import styled, { css } from 'styled-components';


export const Filters = styled.div`
height: 127px;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

  h5{
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #62498A;
  }

  >div{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

 
`


export const RadioContainer =styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: 20px;
`

interface RadioBoxProps{
    isActive:boolean;
    active: 'Matriculado' | 'Todos' | 'Pendente' | 'Cadastrado';
}

export const RadioBox = styled.label<RadioBoxProps> `
    width: 250px;
    height: 80px;
    cursor: pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:border-color 0.2s;
    filter: drop-shadow(0px 0px 20px rgba(95, 95, 95, 0.25));
    border-radius: 24px;
    animation-name: example;
    animation-duration: 400ms;

    svg{
      margin-right: 12px;
    }

    input[type="radio"] {
      opacity: 0;
      position: fixed;
      width: 0;
    }

    ${(props)=> props.isActive &&
    css`

     &::after {
        content:"";
        text-align: center;
        height:6px;
        border-radius: 20px;
        border: 4px solid #C69EEE;
        background: #C69EEE;
        box-shadow: 0px -2px 10px rgba(98, 73, 138, 0.2);
        position:absolute;
        bottom: 0px;
        width:100%;
        right: 0;
        left: 0;
        bottom: 0;
        color:#FFF;
        text-align:center;
        animation-name: example;
        animation-duration: 400ms;
      }
    `
    }

    span{
      color:#666666 !important;
      font-weight: bold;
      margin-bottom: 3px;
      margin-top: 5px !important;
    }

    @keyframes example {
      0% {
        width: 0;
      }

      100% {
        width:250px
      }
    }

`

export const Table = styled.table`
margin-top: 60px;
width: 100%;


tr{
  height: 64px;
  padding: 0 46px;
  td{
  }
}

thead{
  background-color: #EDE8F1 !important;
  width: 500px;
  margin: 0 auto;
  tr{
  background-color: #EDE8F1 !important;

    th{
  background-color: #EDE8F1 !important;

      text-align: start;

    }

  }
}

tbody{
  padding: 60px;

  tr{
    cursor: pointer !important;
  }

  tr{

    &:hover{
      background-color: rgba(98, 73, 138, 0.2); 
    }
    td{
      margin-left: 40px;

    }
  }
}


tr:nth-child(even) {
  background:#EDE8F1;
}

`

export const Container = styled.main`

    header{
      margin: 0 auto;
      margin-top: 60px;
      width: 90vw;
      
      display: flex;
      justify-content: space-between;
      align-items: center;

      .order{
        cursor:pointer;
        display: flex;
        align-items: center;

        span{
          margin-left: 14px;
          color: #666666;
          font-weight: 700;
        }
      }

        h4{
          font-style: normal;
          font-weight: 700;
          font-size: 26px;
          line-height: 32px;

          color: #62498A;
        }

    }

    tbody{
      tr{
        cursor: pointer;

        &:hover{
          background-color: rgba(98, 73, 138, 0.1); 
        }
      }
    }

`

interface StatusProps{
  status:"Matriculado" | "Pendente" | "Cadastrado"
}

const statusVariations = {
  Matriculado:css`
  background-color: #E05858;
  `,
  Pendente:css`
  background-color: #FDE351;
  `,
  Cadastrado:css`
  background-color: #9BE36F;
  `
}

export const Status = styled.span<StatusProps>`
  width: 16px;
  height: 16px;
  border-radius: 30px;
  margin-left: 10px;

  ${props => statusVariations[props.status]}
`