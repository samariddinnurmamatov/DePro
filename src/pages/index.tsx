import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";
import Udevs from '@/assets/udevs.svg';
import Najot from '@/assets/najot-talim.svg';
import ReactImg from '@/assets/react.svg'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import ProjectsSlider from "@/sections/Project";

const HeroSection = dynamic(() => import('@/sections/Hero'));
const ClientsSection = dynamic(() => import('@/sections/Clients'));
const ServicesSection = dynamic(() => import('@/sections/Service'));
const ContactSection = dynamic(() => import('@/sections/Contact'));
const ToolsSection = dynamic(() => import('@/sections/Tools'));

const Home = ({ data }: { data: any }) => {
  return (
    <main>
      <HeroSection />

      <ClientsSection clientsItems={data.clientsItems} />

      <ServicesSection servicesItems={data.servicesItems} />
      
      <ToolsSection categoriesItems={data.categoriesItems} />
      
      {/* <ProjectsSlider /> */}

      <ContactSection />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;

  const data = {
    clientsItems: [
      { id: 'product1', imageSrc: Udevs, title: 'Product 1' },
      { id: 'product2', imageSrc: Udevs, title: 'Product 2' },
      { id: 'product3', imageSrc: Udevs, title: 'Product 3' },
      { id: 'product4', imageSrc: Udevs, title: 'Product 4' },
      { id: 'product5', imageSrc: Najot, title: 'Product 5' },
      { id: 'product6', imageSrc: Najot, title: 'Product 6' },
      { id: 'product7', imageSrc: Najot, title: 'Product 7' },
    ],
    servicesItems: [
      { id: "0", title: "Web Developer", icon: Udevs },
      { id: "1", title: "React Native Developer", icon: Udevs },
      { id: "2", title: "Backend Developer", icon: Udevs },
      { id: "3", title: "Content Creator", icon: Udevs },
      { id: "4", title: "Content Creator", icon: Udevs },
      { id: "5", title: "Content Creator", icon: Udevs },
    ],
    categoriesItems: [
      {
        name: "Frontend",
        tools: [
          { name: "HTML", imgSrc: ReactImg },
          { name: "CSS", imgSrc: ReactImg },
          { name: "JavaScript", imgSrc: ReactImg },
          { name: "React", imgSrc: ReactImg },
        ],
      },
      {
        name: "Backend",
        tools: [
          { name: "Node.js", imgSrc: ReactImg },
          { name: "Express", imgSrc: ReactImg },
          { name: "Laravel", imgSrc: ReactImg },
          { name: "Django", imgSrc: ReactImg },
        ],
      },
    ],
  };

  return {
    props: {
      ...(await serverSideTranslations(locale || 'ru', ['common'])),
      data,
    },
  };
};

export default Home;
