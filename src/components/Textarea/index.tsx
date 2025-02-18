import React from 'react';

interface TextareaProps {
  formik: any;
  name: string;
  label: string;
  width?: string;
}

const Textarea: React.FC<TextareaProps> = ({ formik, name, label, width = '12vw' }) => {
  return (
    <>
      <div className="custom-textarea-container">
        <label
          className={`custom-label ${formik.touched[name] && formik.errors[name] && 'text-red-500'}`}
          htmlFor={name}
        >
          {label}
        </label>
        <textarea
          className={`custom-textarea w-${width} ${formik.touched[name] && formik.errors[name] && 'border-red-500 bg-red-100'}`}
          {...formik.getFieldProps(name)}
          name={name}
          id={name}
        ></textarea>
        {formik.touched[name] && formik.errors[name] ? <div className="custom-error">{formik.errors[name]}</div> : null}
      </div>
    </>
  );
};

export default Textarea;
