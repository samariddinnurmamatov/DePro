import React from 'react';
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
    <section className="pt-14 px-5 max-[600px]:px-2" id="services-section" aria-labelledby="service-section-title">
        <CustomContainer>
            <div className='px-3'>
                <h2 id="service-section-title" className='py-9 text-[34px] max-[550px]:text-[25px] max-[700px]:text-center font-bold'>{t('services.title')}</h2>
                <div className='grid grid-cols-3 gap-6 py-4 max-[860px]:grid-cols-2 max-[650px]:grid-cols-1'>
                    {servicesItems.map((item) => (
                        <Tilt
                            key={item.id}
                            className="card green-pink-gradient p-[1px] rounded-[15px] shadow-card"
                            tiltMaxAngleX={10}
                            tiltMaxAngleY={10}
                            transitionSpeed={500}
                        >
                            <div 
                                className="bg-tertiary rounded-[15px] py-12 px-8 flex justify-between flex-col relative"
                                style={{ minHeight: '230px' }} // Установите минимальную высоту для стабильности
                            >
                                <div 
                                    className="flex items-center justify-center"
                                    style={{ width: '40px', height: '40px' }} // Фиксированные размеры для значков
                                >
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        layout="fixed" // Использование фиксированного макета для избежания смещения
                                        width={40} // Ширина изображения
                                        height={40} // Высота изображения
                                        className="object-contain"
                                        loading="lazy"
                                    />
                                </div>
                                <h3 className="text-white text-[20px] font-bold">
                                    {t(`services.items.${item.id}`)}
                                </h3>
                            </div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </CustomContainer>
    </section>
  );
};

export default safer(ServicesSection);
