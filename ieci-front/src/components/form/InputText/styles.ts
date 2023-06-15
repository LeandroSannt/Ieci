import styled, { css } from 'styled-components';
import { Tooltip } from '../../../components';

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
  color: #C69EEE;
  display: flex;
  align-items: center;
  position: relative;
  height: 56px;

  @media(max-width:460px ){
    font-size:16px;
  }

  ${props =>
    props.secondStyle &&
    css`
      border: 2px solid #965FC1;
      color: #965FC1;
      font-weight: bold;


      &::before{
        content:'Nome impresso no cartão';
        position:absolute;
        top:-17px;
        z-index: 99999;
        background-color: #fff;
        margin-left: 70px;
        padding: 0 15px;

        @media(max-width:460px ){
          padding: 0 12px;
          margin-left: 50px;
          top:-10px;
          font-size: 12px;
        }
      }

      svg {
        color: #965FC1;

        @media(max-width:460px ){
          width: 20px;
          height: 20px;
        }
      }
  `}

  & + & {
    margin-top: 30px;
  }
  ${props =>
    props.isErrored &&
    css`
      color: RGBA( 205, 92, 92, 1 );

    &::placeholder{
      color: RGBA( 205, 92, 92, 1 );

    }
      border-color: RGBA( 205, 92, 92, 1 );
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
    background: inherit !important;
    display: flex;
    color: #C69EEE;
    outline: none;

    &[type="date"]::-webkit-inner-spin-button,
    &[type="date"]::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

     &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px #fff inset;
    }
    /* Cor do texto do autocomplete */
    &:-webkit-autofill {
      -webkit-text-fill-color: #C69EEE !important;
    }

    &::placeholder{
      color: #C69EEE;
      font-weight: bold;

      ${props =>
      props.isErrored &&
      css`
        color: RGBA( 205, 92, 92, 1 );
      `}
    }
  }
   
  svg{
    margin-right: 16px;
    color: #C69EEE;

    @media(max-width:460px ){
      width: 20px;
      height: 20px;
    }

    ${props =>
      props.isErrored &&
      css`
        color: RGBA( 205, 92, 92, 1 );
      `}
  }

  .eyePassword{
    cursor: pointer;
  }
`;

export const Error = styled(Tooltip)`
margin-left: 16px;
height: 20px;
svg{
  margin: 0;
}
span{
  background: #c53030;
  color: #fff;
    &::before{
      border-color: #c53030 transparent;
    }
}
`