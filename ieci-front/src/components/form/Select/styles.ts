 import styled, { css } from 'styled-components'


 interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
}

 export const SelectContainer = styled.div<ContainerProps>`

  width: 100%;
  height: 56px;
  border:2px solid #C69EEE;
  border-radius: 24px;
  padding: 10px 20px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

    ${props =>
    props.isFocused &&
    css`
      border-color: #965FC1;
    `}

    ${props =>
    props.isField &&
    css`
      border-color: #965FC1;
    `}

    
  select{
    
    border: none;
    outline: none;
    width: 100%;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #C69EEE;

    
  }


    option{
      padding: 10px;
      margin: 10px;
    }

 `
 
 export const customStyles = {
    defaultValue:(provided:any,state:any) =>({
    ...provided,
    color: '#C69EEE',

    }),
  option: (provided:any, state:any) => ({
    ...provided,
    color: state.isSelected ? '#965FC1' : '#C69EEE',
    background: state.isSelected ? '#C69EEE' : '#fff',
    fontWeight: state.isSelected ? 'bold' : 'initial',
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    display:'flex',
    alignItems:'center',
    width: '100%',
    border:'2px solid #C69EEE',
    borderRadius:"24px",
    padding:'10px 20px',
    marginBottom:"30px",
    color:"#C69EEE"

  }),
  singleValue: (provided:any, state:any) => ({
    ...provided,
    color:'#C69EE',
    fontWeight:'bold',
    opacity:state.isDisabled ? 0.5 : 1,
    transition:'300ms'

    // const opacity = state.isDisabled ? 0.5 : 1;
    // const transition = 'opacity 300ms';
    // const color = 'color #C69EE'
    // const fontWeight = 'fontWeight bold'

    // return { ...provided, opacity, transition,color ,fontWeight};
  }),

  placeholder: (provided:any, state:any) => ({
    ...provided,
    color:'#C69EE',
    fontWeight:"bold"
  })
}