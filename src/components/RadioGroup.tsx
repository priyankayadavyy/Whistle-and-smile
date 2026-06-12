import React from 'react';
import './RadioGroup.css';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  name: string;
  label?: string;
  options: RadioOption[];
  selected: string | null;
  onChange: (value: string) => void;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name: _name,
  label,
  options,
  selected,
  onChange,
}) => {
  return (
    <div className="radio-group">
      {label && <p className="radio-group-label">{label}</p>}
      <div className="radio-options">
        {options.map((option) => (
          <label
            key={option.value}
            className={`radio-option ${selected === option.value ? 'selected' : ''}`}
            onClick={() => onChange(option.value)}
          >
            <div className="radio-circle">
              <div className="radio-inner" />
            </div>
            <span className="radio-label-text">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
