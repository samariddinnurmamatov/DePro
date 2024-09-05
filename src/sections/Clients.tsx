import React, { useEffect, useRef } from 'react';
import CustomContainer from '@/components/ui/Container';
import { ProductItem } from '@/types';
import { safer } from '@/utils/safer';
import Image from 'next/image';
import defaultImage from '@/assets/pop_brand_img1.svg'; // Default image if needed
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useTranslation } from 'next-i18next';

interface ClientsSectionProps {
  clientsItems: ProductItem[];
}

const ClientsSection: React.FC<ClientsSectionProps> = ({ clientsItems }) => {
  const { t } = useTranslation('common');

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    initial: 1,
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 30 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 5, spacing: 40 },
      },
    },
    slides: { perView: 1, spacing: 5 },
  });

  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (instanceRef.current) {
      timer.current = setInterval(() => {
        instanceRef.current?.next();
      }, 2000);
    }

    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, [instanceRef]);

  return (
    <div className="pt-40 text-center px-2" id="clients-section">
      <CustomContainer>
        <div ref={sliderRef} className="keen-slider">
          {clientsItems.map((item) => (
            <div key={item.id} className="keen-slider__slide flex gap-5 justify-center items-center">
              <Image 
                src={item.imageSrc || defaultImage}
                alt={item.title || t('clients.image_alt')}
                className="client-image"
                width={150}
                height={150}
              />
            </div>
          ))}
        </div>
        <p className='font-bold max-w-[347px]' style={{ margin: "45px auto 0", color: "hsla(0, 0%, 100%, .47)" }}>
          {t('clients.description')}
        </p>
      </CustomContainer>
    </div>
  );
};

export default safer(ClientsSection);
