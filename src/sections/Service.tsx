import React from 'react';
import CustomSection from '../components/ui/Section';
import { safer } from '@/utils/safer';
import Image from 'next/image';
import { ServiceItem } from '@/types';
import Tilt from 'react-parallax-tilt';
import CustomContainer from '@/components/ui/Container';
import { useTranslation } from 'next-i18next';

interface ServicesSectionProps {
    servicesItems: ServiceItem[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ servicesItems }) => {
  const { t } = useTranslation('common');

  return (
    <div className="pt-20 px-5" id="services-section">
        <CustomContainer>
            <div className='px-3'>
                <h1 className='py-9 text-[34px] font-bold'>{t('services.title')}</h1>
                <div className='grid grid-cols-3 gap-6 py-4'>
                    {servicesItems.map((item) => (
                        <Tilt
                            key={item.id}
                            className="card green-pink-gradient p-[1px] rounded-[15px] shadow-card"
                        >
                            <div className="bg-tertiary rounded-[15px] py-5 px-8 min-h-[250px] flex justify-evenly flex-col relative">
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    className="w-16 h-16 object-contain"
                                />
                                <h3 className="text-white text-[20px] font-bold">
                                    {t(`services.items.${item.id}`)}
                                </h3>
                            </div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </CustomContainer>
    </div>
  );
};

export default safer(ServicesSection);
