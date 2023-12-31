import { useField } from "@unform/core";
import React, { ReactElement, SelectHTMLAttributes, useCallback, useEffect, useRef, useState } from "react";
import { SelectContainer } from "./styles";


interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  name: string;
  containerStyle?: React.CSSProperties;
}

const Select: React.FC<Props> = ({ name, children,containerStyle = {}, ...rest }) => {
  const { fieldName, defaultValue, registerField } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isField, setIsField] = useState(false);

  const optionRefs = useRef<HTMLOptionElement[]>([]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);

  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: optionRefs.current,
      getValue: (refs: HTMLOptionElement[]) => {
        return refs.find((ref) => ref.selected)?.value || "";
      },
      setValue: (refs: HTMLOptionElement[], value: string) => {
        const option = refs.find((ref) => ref.value === value);

        if (option) option.selected = true;
      },
      clearValue: (refs: HTMLOptionElement[]) => {
        refs.forEach((ref) => (ref.selected = false));
      }
    });
  }, [fieldName, registerField]);

  return (
    <SelectContainer
      style={containerStyle}
      isField={isField}
      isFocused={isFocused}>

      <select 
        name={fieldName} 
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
       {...rest}>

        {React.Children.map(children, (child) =>
          React.cloneElement(child as ReactElement, {
            ref: (ref: HTMLOptionElement) => optionRefs.current.push(ref)
          })
        )}
      </select>

    </SelectContainer>
  );
};

export default Select;