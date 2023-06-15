import styled,{css} from 'styled-components'

interface ButtonProps{
  typeButton:'primary'| 'secondary'| 'tertiary' | 'fourth' | 'fifth' | 'eighth'
}


const buttonTypeVariations = {
  primary: css`
    background: #6D42B5;
    color: #ffff;

    &:hover{
    background-color: inherit;
    color: #6D42B5;
    border: solid 2px #6D42B5;
    }
  `,

  secondary: css`
    background: #965FC1;
    color: #FAF7FC;
    font-weight: bold;

     &:hover{
    background-color: inherit;
    color: #965FC1;
    border: solid 2px #965FC1;
    }
    
  `,

  tertiary: css`
    background: #965FC1;
  `,

  fourth: css`
    background: #62498A;
    color: #F4EDFA;
    font-weight: bold;

    &:hover{
    background-color: inherit;
    color:  #62498A;
    border: solid 2px #965FC1;
    }
  `,

  fifth:css`
    background: #EFDBFE;
    color:#965FC1;
    font-weight: bold;
    padding: 8px 16px;
    font-size: 1rem;

  &:hover{
    background-color: inherit;
    color:  #EFDBFE;
    border: solid 2px #EFDBFE;
    }
  `,

  eighth:css`
    background-color: inherit;
    border: solid 2px #6D42B5;
    color:#6D42B5;
    font-weight: 400;
    line-height: 22px;
    padding: 16px;
    font-size: 1rem;
    text-transform: none;

    &:hover{
    background-color: #6D42B5;
    color:  #EFDBFE;
    border: none;
    }
  `
};

export const Container = styled.button <ButtonProps>`

min-width: 140px;
width: 100%;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
border-radius: 24px;

height: 48px;

font-weight: 400;
font-size: 20px;
transition: background 400ms;
padding: 0px  16px !important;

display: flex;
align-items: center;
justify-content: space-around;

 @media (max-width: 530px){
  font-size: 16px !important;
  min-height: 32px !important;
  height: 40px;
  min-width:131px;
}

@media (max-width: 470px){
  font-size: 16px !important;
  min-height: 32px !important;
  height: 40px;
  min-width:80px;

}

@media (max-width: 760px){
  font-size: 14px !important;
}




${(props) => buttonTypeVariations[props.typeButton || 'primary']}

`

