import styled, { css } from 'styled-components';


interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
  isErrored: boolean;
  secondStyle:boolean
}

export const Container = styled.label<ContainerProps>`
  background: inherit;
  border: 2px solid #C69EEE;
  border-radius: 24px;
  padding: 14px 20px;
  width: 100%;
  color: #C69EEE !important;
  display: flex;
  align-items: center;
  position: relative;
  height: 56px;

  ${props =>
    props.secondStyle &&
    css`
      border: 2px solid #965FC1;
      color: #965FC1 !important;
      font-weight: bold;

      &::before{
        content:'Nome impresso no cartão';
        position:absolute;
        top:-17px;
        z-index: 99999;
        background-color: #fff;
        margin-left: 70px;
        padding: 0 15px;
      }

      svg {
        color: #965FC1 !important;
      }
    `}

  & + div {
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      border-color: #965FC1;
    `}
  ${props =>
    props.isField &&
    css`
      color: #ff9000;
    `}
  input{
    width: 100%;
    flex: 1;
    border: 0;
    background: transparent !important;
    display: flex;
    color: #C69EEE;
    outline: none;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    
    &[type="month"]::-webkit-inner-spin-button,
    &[type="month"]::-webkit-calendar-picker-indicator,
    &[type="date"]::-webkit-inner-spin-button,
    &[type="date"]::-webkit-calendar-picker-indicator{
        display: none;
        -webkit-appearance: none;
    }

    &[type="month"]::placeholder{
      display: none;
    }

     &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px #232129 inset;
    }
    /* Cor do texto do autocomplete */
    &:-webkit-autofill {
      -webkit-text-fill-color: #fff !important;
    }

    &::placeholder{
      color: #C69EEE;
      font-weight: bold;
    }
        
  }
   
  svg{
    margin-right: 16px;
    color: #C69EEE;
  }

  .eyePassword{
    cursor: pointer;
  }
`;

export const Error = styled.div`
 
`;