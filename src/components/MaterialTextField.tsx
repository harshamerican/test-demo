import React, { useEffect, useRef } from 'react';
import '@material/web/all';
import Label from './Label';

interface MaterialTextFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  className?:string
}

const MaterialTextField: React.FC<MaterialTextFieldProps> = ({ label, type, value, onChange,className }) => {
  const textFieldRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (textFieldRef.current) {
      const textField = textFieldRef.current as HTMLInputElement;
      textField.value = value;
      textField.addEventListener('input', handleInput);
    }
    return () => {
      if (textFieldRef.current) {
        textFieldRef.current.removeEventListener('input', handleInput);
      }
    };
  }, [value]);

  const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    onChange(target.value);
  };

  return (
    <div className="p-6 flex flex-col w-1/2">
      <>
        <Label label={label}></Label>
      </>

      <>
        <md-outlined-text-field
          ref={textFieldRef}
          label={label}
          type={type}
          className={className}
        />
      </>
    </div>
  );
};

export default MaterialTextField;
