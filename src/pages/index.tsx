import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import serviceData from "@/data/servicesData";
import toolData from "@/data/toolsData";

const HeroSection = dynamic(() => import('@/sections/Hero'));
const ServicesSection = dynamic(() => import('@/sections/Service'));
const ContactSection = dynamic(() => import('@/sections/Contact'));
const ToolsSection = dynamic(() => import('@/sections/Tools'));

const Home = ({ data }: { data: any }) => (
  <main>
    <HeroSection />
    <ServicesSection servicesItems={data.servicesItems} />
    <ToolsSection categoriesItems={data.categoriesItems} />
    <ContactSection />
  </main>
);

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'ru', ['common'])),
    data: {
      servicesItems: serviceData,
      categoriesItems: toolData,
    },
  },
});

export default Home;
