import React from 'react';
import CustomSection from '../components/ui/Section';
import { safer } from '@/utils/safer';
import StarsCanvas from '@/components/canvas/StarsCanvas';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const HeroSection: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className="relative h-[auto]" id="home-section">
      <CustomSection customClass="additional-styles py-20">
        <div className='flex gap-5 items-center justify-between'>
          <div className='flex flex-col gap-4 items-start'>
            <h1 className="text-[30px] py-[10px] px-[15px] rounded-md border border-[#7042f88b] opacity-[0.9] inline-block font-bold">
              {t('hero.company_name')}
            </h1>
            <div>
              <h2 className='text-[40px]'>
                {t('hero.it').split(' ').map((word: string, index: number) => (
                  <React.Fragment key={index}>
                    {index === 0 ? word : <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">{word}</span>}
                    {' '}
                  </React.Fragment>
                ))}
              </h2>
              <p className="text-lg text-gray-400 my-4 max-w-[600px]" style={{ opacity: 1, transform: "none" }}>
                {t('hero.company_desc')}
              </p>
            </div>
            <button className="bg-[#2f3fe7] rounded-[12px] text-[#fff] text-[16px] font-bold py-5 px-20">
              {t('hero.contact')}
            </button>
          </div>
          <div>
            <Image src={"https://space-portolio.vercel.app/mainIconsdark.svg"} width={600} height={100} alt='Right-Image'/>
          </div>
        </div>
      </CustomSection>
      
      <StarsCanvas />
    </div>
  );
};

export default safer(HeroSection);
