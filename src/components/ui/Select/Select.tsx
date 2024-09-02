import React, { useState, useRef, useEffect } from 'react';
import { clsx } from 'clsx';

interface Option {
  label: string;
  value: string;
}

interface CustomDropdownProps {
  options: Option[];
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
  ariaLabel?: string;
  title?: React.ReactNode;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  value,
  onValueChange,
  className,
  ariaLabel,
  title,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOptionClick = (optionValue: string) => {
    onValueChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className={clsx('relative cursor-pointer', className)}
      aria-label={ariaLabel}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className='relative flex items-center justify-between bg-[#2f3fe7] rounded-[7px] text-[#fff] text-[14px] font-bold py-2 px-4'>
        {title}
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2" aria-hidden="true">
          <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
        </svg>
      </div>
      {isOpen && (
        <div className="absolute mt-2 right-[-34px] border border-gray-300 rounded-lg shadow-lg z-50" style={{ width: "140px", backdropFilter: "blur(25px)" }}>
          {options.map((option, index) => (
            <div
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className={`w-full flex items-center justify-between py-2 px-4 cursor-pointer text-white ${value === option.value ? '' : ''} ${index < options.length - 1 ? 'border-b border-gray-500' : ''}`}
            >
              {option.label}
              {value === option.value && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
