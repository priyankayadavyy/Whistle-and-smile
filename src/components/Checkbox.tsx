import React from 'react';
import { Check } from 'lucide-react';
import './Checkbox.css';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: React.ReactNode;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
}) => {
  return (
    <label
      className={`checkbox-wrapper ${checked ? 'checked' : ''}`}
      onClick={() => onChange(!checked)}
    >
      <div className="checkbox-box">
        <Check className="checkbox-check" strokeWidth={3} />
      </div>
      <span className="checkbox-label">{label}</span>
    </label>
  );
};
