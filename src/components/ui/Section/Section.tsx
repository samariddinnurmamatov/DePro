import React from 'react';
import CustomContainer from '../Container';

interface SectionProps {
  title?: string;
  children: React.ReactNode;
  customClass?: string;
}

const CustomSection = ({ title, children, customClass }: SectionProps) => {
  return (
    <CustomContainer className={`section_block ${customClass}`}>
      <h2 className='font-bold text-[29px] py-5'>{title}</h2>
      <div className={`py-1`}>{children}</div>
    </CustomContainer>
  );
};

export default CustomSection;
