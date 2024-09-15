import React from 'react';
import dynamic from 'next/dynamic';
import HomePageImage from '@/assets/svg/HomePageImage.svg'
import { safer } from '@/utils/safer';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
const CustomContainer = dynamic(() => import('@/components/ui/Container'));
const StarsCanvas = dynamic(() => import('@/components/canvas/StarsCanvas'));

const handleScrollToContact = () => {
  const contactSection = document.getElementById("contact-section");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

const HeroSection: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className="relative h-[auto] py-24 px-6 max-[600px]:px-2" id="home-section" aria-labelledby="hero-section-title">
      <CustomContainer>
        <div className='flex gap-5 items-center justify-between px-3 max-[800px]:flex-col max-[800px]:gap-y-10 max-[800px]:items-start'>
          <div className='flex flex-col gap-4 items-start'>
            <div>
              <h2 className='text-[40px] max-[1000px]:text-[30px] max-[400px]:text-[20px]'>
                {t('hero.it').split(' ').map((word: string, index: number) => (
                  <React.Fragment key={index}>
                    {index === 0 ? word : <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">{word}</span>}
                    {' '}
                  </React.Fragment>
                ))}
              </h2>
              <p className="text-lg max-[1000px]:text-[15px] text-gray-400 my-4 max-w-[600px]" style={{ opacity: 1, transform: "none" }}>
                {t('hero.company_desc')}
              </p>
            </div>
            <button onClick={handleScrollToContact} className="bg-[#2f3fe7] rounded-[12px] text-[#fff] text-[16px] max-[1000px]:text-[14px] font-bold py-5 px-20">
              {t('hero.contact')}
            </button>
          </div>
          <div>
            <Image src={HomePageImage} width={600} height={100} alt='Right-Image' layout="fixed" loading="lazy" />
          </div>
        </div>
      </CustomContainer>
      <StarsCanvas />
    </div>
  );
};

export default safer(HeroSection);
