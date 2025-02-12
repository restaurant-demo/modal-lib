import React from 'react';
import './RadioButton.css';
import './../../styles.css';

interface RadioButtonProps {
  title: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ title }) => {
  return (
    <>
      <label className="custom-radio-button-label">
        <input
          type="radio"
          name="exists"
          className={`custom-radio-input-${title === "YES" ? "green" : "red"} form-radio`}
          defaultChecked={title === "YES"}
        />
        <span className="custom-radio-button-title">{title}</span>
      </label>
    </>
  );
};

export default RadioButton;
