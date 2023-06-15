import React, { useEffect, useRef, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';
import { Container } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  options: {
    id: string;
    value: string;
    label: string;
  }[];
}

const Radio: React.FC<Props> = ({ name, options, ...rest }) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const { fieldName, registerField, defaultValue = '' } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {
        return refs.find(ref => ref.checked)?.value || '';
      },
      setValue: (refs: HTMLInputElement[], id: string) => {
        const inputRef = refs.find(ref => ref.id === id);
        if (inputRef) inputRef.checked = true;
      },
      clearValue: (refs: HTMLInputElement[]) => {
        const inputRef = refs.find(ref => ref.checked === true);
        if (inputRef) inputRef.checked = false;
      },
    });
  }, [defaultValue, fieldName, registerField]);

  return (
    <Container>
      {options.map((option, index) => (
        <>
          <div className=''>
          <label htmlFor={option.id} key={option.id}>
            <input
              className='ml-5 radio bg-inherit checked:bg-purple300  border-purple300 border-2 right-0 '
              ref={ref => ref && (inputRefs.current[index] = ref)}
              id={option.id}
              type="radio"
              name={name}
              defaultChecked={defaultValue.includes(option.id)}
              value={option.value}
              {...rest}
            />

            {option.label}
          </label>
          </div>
        </>
      ))}
    </Container>
  );
};

export default Radio;
