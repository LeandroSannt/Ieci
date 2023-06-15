import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  InputHTMLAttributes,
} from 'react';
import { useField } from '@unform/core';
import { Container, Error } from './styles';
import {Eye} from '../../../components/icons'
import { useCard } from '../../../hooks/useCard';
import InputMask from 'react-input-mask';
import { FiAlertCircle } from 'react-icons/fi';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  secondStyle?:boolean
  containerStyle?: React.CSSProperties;
  icon?: JSX.Element;
  flip?:boolean
  mask?:string | Array<RegExp | string>
}

const Input: React.FC<InputProps> = ({
  name,
  containerStyle = {},
  icon,
  type,
  secondStyle = false,
  inputMode,
  flip,
  mask,
  ...rest
}) => {
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isField, setIsField] = useState(false);
  const [typeInput, setTypeInput] = useState('password');
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const {setIsFlipped}  = useCard()

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
    flip && setIsFlipped(flip)

  }, [flip, setIsFlipped]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

  }, []);

 useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },
      clearValue(ref: any) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  const handleInputPassword = useCallback(() =>{

    if(typeInput === 'text'){
      setTypeInput('password')
    }else{
      setTypeInput('text')
    }

  },[typeInput])

  return (
    <Container
      htmlFor={name}
      secondStyle={secondStyle}
      style={containerStyle}
      isErrored={!!error}
      isField={isField}
      isFocused={isFocused}
      data-testid="input-container"
    >
      {icon && icon}

      {mask ? 
      <InputMask 
        id={name}
        mask={mask} 
        ref={inputRef} 
        defaultValue={defaultValue} 
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        type={type === 'password'? typeInput : type }
        {...rest} />
        
        :
        
        <input 
        id={name}
        ref={inputRef} 
        defaultValue={defaultValue} 
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        type={type === 'password'? typeInput : type}
        {...rest} />

      }

        {type === 'password' && 
          <div className='eyePassword' onClick={handleInputPassword}>
            <Eye size={1.6}/>
          </div>
        }

        {error && 
        <Error title={error}>
          <FiAlertCircle color="red" size={20}/>
        </Error>}
      
    </Container>
  );
};
export default Input;