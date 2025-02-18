import React, { useEffect, useRef, useState } from 'react';
import './SelectBox.css';

interface SelectBoxProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  name: string;
  label: string;
  width?: string;
}

const SelectBox: React.FC<SelectBoxProps> = ({ options, value, onChange, name, label, width="12vw" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <div className={`custom-select-container`} ref={selectRef}>
      <label htmlFor={name} className="custom-label">
        {label}
      </label>
      <div
        className={`custom-select w-${width}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {value || "Select an option"}
      </div>

      {isOpen && (
        <ul className="custom-option-container">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className="custom-option"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      <div className="custom-select-arrow-container">
        <svg
          className={`custom-select-arrow-icon ${isOpen ? "rotate-180" : "rotate-0"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 111.414-1.414L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default SelectBox;
