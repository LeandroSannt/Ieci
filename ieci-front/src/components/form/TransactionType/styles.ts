import styled, { css } from "styled-components";

export const TransactionTypeContainer =styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
gap: 1.5rem;

margin-top: 20px;

`

interface RadioBoxProps{
    isActive:boolean;
    activeColor: 'purple400' | 'purple900';
}

const colors= {
    purple400:'#E1CEFA',
    purple900:'#965FC1'
}

export const RadioBox = styled.label<RadioBoxProps> `
    width: 224px;
    height: 160px;
    cursor: pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
    transition:border-color 0.2s;
    filter: drop-shadow(0px 0px 20px rgba(95, 95, 95, 0.25));
    border-radius: 24px;

    @media(max-width:648px ){
      height: 120px;
    }

    svg{
      width: 53px;
      height: 42px;
      margin-bottom: 8px;

      @media(max-width:648px ){
        width: 32px;
        height: 23px;
      }
    }

    ${(props)=> props.isActive ? 
    css`
      border: 6px solid ${colors.purple900};
    `
    :
    css`
      border: 6px solid ${colors.purple400};
    `}

    span{
      color:#666666 !important;
      font-weight: bold;
      margin-bottom: 3px;
      margin-top: 5px !important;
    }

`