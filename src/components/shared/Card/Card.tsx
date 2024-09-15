import Image, { StaticImageData } from 'next/image';

interface CardProps {
  imageSrc: StaticImageData;
  title: string;
  price: string;
}

const CustomCard = ({ imageSrc, title, price }: CardProps) => {
  return (
    <div className='card' style={{ width: "100%" }}>
      <Image src={imageSrc} alt={title} width={100} height={100} style={{ width: "100%" }} layout="fixed" loading="lazy" />
      <div className='flex justify-between p-2'>
        <div className='flex flex-col gap-2'>
          <h3>{title}</h3>
          <p className='text-gray-500'>{price}</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      </div>
    </div>
  );
};

export default CustomCard;
