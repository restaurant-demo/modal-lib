import React from 'react';
import './Input.css';

interface InputProps {
  formik: any;
  name: string;
  label: string;
  width?: string;
}

const Input: React.FC<InputProps> = ({ formik, name, label, width = '12vw' }) => {
  return (
    <div className="custom-input-container">
      <label className={`custom-label ${formik.touched[name] && formik.errors[name] && 'text-red-500'}`} htmlFor={name}>
        {label}
      </label>
      <input className={`custom-input w-${width} ${formik.touched[name] && formik.errors[name] && 'border-red-500 bg-red-100'}`} id={name} type="text" {...formik.getFieldProps(name)} />
      {formik.touched[name] && formik.errors[name] ? <div className="custom-error">{formik.errors[name]}</div> : null}
    </div>
  );
};

export default Input;
