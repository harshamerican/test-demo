import React from 'react'
interface LabelProps {
    label:string
}
const Label: React.FC<LabelProps> = ({ label }) => {
  return <span className='p-2'>{label}</span>;
};

export default Label
