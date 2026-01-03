import React from 'react';
import { COLORS } from '../utils/Constants';

type DropdownOption = {
  value: string;
  label: string;
};

type DropdownProps = {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  label?: string;
  id?: string;
  required?: boolean;
};

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange, className = '', label, id, required }) => {
  // Use a red from COLORS for the dropdown background and border
  const red = COLORS[0];
  const borderColor = red;
  const focusRing = COLORS[1];
  return (
    <div className="flex flex-col gap-2 w-[160px] text-xs">
      {label && <label htmlFor={id} className="text-white text-xs mb-0.5">{label}</label>}
      <select
        id={id}
        className={`p-1 rounded bg-[#7a0404]/60 text-white text-xs border-2 focus:outline-none w-full h-[32px] ${className}`}
        style={{ borderColor, boxShadow: `0 0 0 2px ${focusRing}55`, minWidth: 0 }}
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
      >
        {(options || []).map((opt: DropdownOption) => (
          <option key={opt.value} value={opt.value} style={{ background: '#7a0404', color: 'white' }}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
