import { StylesConfig } from 'react-select';
import styled from 'styled-components';

export const Container = styled.div`
`

export const Header = styled.header`
margin:80px 60px ;
display: flex;
justify-content: space-between;
width: calc(60vw + 20px);

button{
  display: flex;
  align-items: center;
  color: #666666;
  font-size: 20px;
  transition: all 400ms;

  svg{
    margin-right: 20px;
    width: 34px !important;
    height: 34px !important;

    
  }
  &:hover{
      transform: scale(1.1);
    }
}

`

export const UserData = styled.div`
margin: 0 60px 60px 60px;

.container{
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items:flex-start ;

  max-width: 1300px;
  margin: 0 auto;

  margin-left: 300px;
}

h3{
  text-align: center;
  font-size: 26px;
  line-height: 32px;
  color: #62498A;
  margin-bottom: 60px;
}

`

export const ContainerSelect = styled.div`
display: flex;
align-items: center;
justify-content: center;
border: 1px solid #965FC1;
/* Input-Shadow */

padding: 8px 48px;

filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.3));
border-radius: 24px;
h5{
  color: #62498A;
  font-size: 20px;
}
`

export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const DataTable = styled.div`

  h5{
    font-size: 26px;
      line-height: 32px;
      color: #C69EEE;
      margin: 40px 0;
    }

    >div{
    }

`
const dot = (color = 'transparent') => ({
  alignItems: 'center',
  display: 'flex',

  ':after': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'flex',
    alignItens:'center',
    marginLeft: 8,
    height: 15,
    width: 15,
  },
});

export const ColourStyles: StylesConfig<ColourOption> = {
  control: (styles,{isFocused}) => ({ ...styles, backgroundColor: 'inherit',
  width: '200px',
  border: isFocused ?  'none' : "none",

  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = data.color;
    return {
      ...styles,
      
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color
        : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? color
          ? 'white'
          : 'black'
        : '',
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color
          : undefined,
      },
    };
  },
  input: (styles) => ({ ...styles, ...dot() }),
  placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};