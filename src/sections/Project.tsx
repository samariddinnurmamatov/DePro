// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-cards";
// import Udevs from '@/assets/udevs.svg'

// import { Navigation, EffectCards } from "swiper/modules";
// import CustomContainer from "@/components/ui/Container";
// import Image from "next/image";
// import { useKeenSlider } from "keen-slider/react"
// import "keen-slider/keen-slider.min.css"
// import { useEffect, useRef } from "react";
// import { KeenSliderInstance } from "keen-slider";
// import { safer } from "@/utils/safer";

// const ProjectsSlider: React.FC = () => {
//   const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
//     loop: true,
//     breakpoints: {
//       "(min-width: 400px)": {
//         slides: { perView: 2, spacing: 5 },
//       },
//       "(min-width: 1000px)": {
//         slides: { perView: 3, spacing: 10 },
//       },
//     },
//     slides: { perView: 1 },
//   })
//   const sliderInstanceRef = useRef<KeenSliderInstance | null>(null);

//   useEffect(() => {
//     if (slider && slider.current) {
//       sliderInstanceRef.current = slider.current;
//     }
//   }, [slider]);

//   const handlePrev = () => {
//     sliderInstanceRef.current?.prev();
//   };

//   const handleNext = () => {
//     sliderInstanceRef.current?.next();
//   };
//   return (
//     <div id="projects-section" className="px-5">
//         <CustomContainer>
//             <div className="mt-20 w-full max-w-[70%] lg:max-w-[60%] xl:max-w-[55%] mx-auto py-12 px-4 relative">
//                 <h2 className="text-3xl font-bold text-white text-center mb-10 mt-16">
//                 Наши проекты
//                 </h2>

//                 {/* Slider */}
//                 <Swiper
//                 modules={[Navigation, EffectCards]}
//                 effect="cards"
//                 grabCursor={true}
//                 loop={true}
//                 navigation
//                 breakpoints={{
//                     320: {
//                     slidesPerView: 1,
//                     spaceBetween: 10,
//                     cardsEffect: {
//                         perSlideOffset: 5,
//                     },
//                     },
//                     640: {
//                     slidesPerView: 1,
//                     spaceBetween: 8,
//                     cardsEffect: {
//                         perSlideOffset: 8,
//                     },
//                     },
//                     1024: {
//                     slidesPerView: 1,
//                     spaceBetween: 12,
//                     cardsEffect: {
//                         perSlideOffset: 12,
//                     },
//                     },
//                 }}
//                 className="swiper-container"
//                 onBeforeInit={(swiper) => {
//                     swiper.params.effect = "cards";
//                     swiper.params.cardsEffect = {
//                     slideShadows: false,
//                     rotate: false,
//                     perSlideRotate: 0,
//                     perSlideOffset: 10,
//                     };
//                 }}
//                 >
//                 {/* Slide 1 */}
//                 <SwiperSlide className="custom-slider bg-[#15193a] rounded-xl p-8 shadow-lg">
//                     <h3 className="text-xl font-semibold mb-4 text-white">Задача 1</h3>
//                     <p className="mb-6 text-gray-300">
//                     Цель состояла в том, чтобы перенести как крупную систему управления
//                     обучением (LMS), так и систему управления взаимоотношениями с
//                     клиентами (CRM) одного из крупнейших центров изучения английского
//                     языка в Узбекистане на bare-metal инфраструктуру Kubernetes, с
//                     акцентом на обеспечение постоянной поддержки обеих систем в
//                     будущем.
//                     </p>
//                     <h4 className="text-xl font-semibold mb-4 text-white">Решение</h4>
//                     <p className="text-gray-300">
//                     Наша команда выполнила миграцию всей LMS и CRM-системы на наше
//                     решение Kubernetes за очень короткий период - один месяц. Мы также
//                     внедрили новый конвейер CI/CD, систему секретного управления для
//                     безопасного хранения конфиденциальной информации, систему управления
//                     серверами и комплексную систему мониторинга всей инфраструктуры. В
//                     настоящее время мы оказываем постоянную поддержку кластеру.
//                     </p>
//                     <div className="mt-4 flex flex-wrap gap-2">
//                     <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                         Kubernetes
//                     </span>
//                     <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                         Ansible
//                     </span>
//                     <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                         Docker
//                     </span>
//                     <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                         Gitlab
//                     </span>
//                     <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                         Vault
//                     </span>
//                     </div>
//                     <br />
//                     <div className="flex flex-col justify-center items-center text-white text-center py-2 z-20">
//                         <Image src={Udevs} width={100} height={100} alt="udevs" />
//                     </div>
//                 </SwiperSlide>

//                 {/* Slide 2 */}
//                 <SwiperSlide className="custom-slider bg-[#15193a] rounded-xl p-8 shadow-lg">
//                     <h3 className="text-xl font-semibold mb-4 text-white">Задача 2</h3>
//                     <p className="mb-6 text-gray-300">
//                     Цель состояла в том, чтобы перенести как крупную систему управления
//                     обучением (LMS), так и систему управления взаимоотношениями с
//                     клиентами (CRM) одного из крупнейших центров изучения английского
//                     языка в Узбекистане на bare-metal инфраструктуру Kubernetes, с
//                     акцентом на обеспечение постоянной поддержки обеих систем в будущем.
//                     </p>
//                     <h4 className="text-xl font-semibold mb-4 text-white">Решение</h4>
//                     <p className="text-gray-300">
//                     Наша команда выполнила миграцию всей LMS и CRM-системы на наше
//                     решение Kubernetes за очень короткий период - один месяц. Мы также
//                     внедрили новый конвейер CI/CD, систему секретного управления для
//                     безопасного хранения конфиденциальной информации, систему управления
//                     серверами и комплексную систему мониторинга всей инфраструктуры. В
//                     настоящее время мы оказываем постоянную поддержку кластеру.
//                     </p>
//                     <div className="mt-4 flex flex-wrap gap-2">
//                     <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                         Kubernetes
//                     </span>
//                     <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                         Ansible
//                     </span>
//                     <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                         Docker
//                     </span>
//                     <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                         Gitlab
//                     </span>
//                     <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                         Vault
//                     </span>
//                     </div>
//                     <br />
//                     <div className="flex flex-col justify-center items-center text-white text-center py-2 z-20">
//                         <Image src={Udevs} width={100} height={100} alt="udevs" />
//                     </div>
//                 </SwiperSlide>

//                 {/* Slide 3 */}
//                 <SwiperSlide className="custom-slider bg-[#15193a] rounded-xl p-8 shadow-lg">
//                     <h3 className="text-xl font-semibold mb-4 text-white">Задача 3</h3>
//                     <p className="mb-6 text-gray-300">
//                     Цель состояла в том, чтобы перенести как крупную систему управления
//                     обучением (LMS), так и систему управления взаимоотношениями с
//                     клиентами (CRM) одного из крупнейших центров изучения английского
//                     языка в Узбекистане на bare-metal инфраструктуру Kubernetes, с
//                     акцентом на обеспечение постоянной поддержки обеих систем в
//                     будущем.
//                     </p>
//                     <h4 className="text-xl font-semibold mb-4 text-white">Решение</h4>
//                     <p className="text-gray-300">
//                     Наша команда выполнила миграцию всей LMS и CRM-системы на наше
//                     решение Kubernetes за очень короткий период - один месяц. Мы также
//                     внедрили новый конвейер CI/CD, систему секретного управления для
//                     безопасного хранения конфиденциальной информации, систему управления
//                     серверами и комплексную систему мониторинга всей инфраструктуры. В
//                     настоящее время мы оказываем постоянную поддержку кластеру.
//                     </p>
//                     <div className="mt-4 flex flex-wrap gap-2">
//                     <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                         Kubernetes
//                     </span>
//                     <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                         Ansible
//                     </span>
//                     <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                         Docker
//                     </span>
//                     <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                         Gitlab
//                     </span>
//                     <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                         Vault
//                     </span>
//                     </div>
//                     <br />
//                     <div className="flex flex-col justify-center items-center text-white text-center py-2 z-20">
//                         <Image src={Udevs} width={100} height={100} alt="udevs" />
//                     </div>
//                 </SwiperSlide>

//                 </Swiper>
//             </div>
//         </CustomContainer>
//         <br />
//         {/* <div className="container">
//             <div>
//             <div className="relative">
//                 <div ref={sliderRef} className="keen-slider">
//                     <div className="keen-slider__slide number-slide1 rounded-[20px] px-8 py-8 bg-[#15193a] relative">
//                         <div className="flex flex-col justify-center items-center text-white text-center rounded-lg pb-4 z-20">
//                             <Image src={Udevs} width={140} height={100} alt="udevs" className="border rounded-[20px]  px-7 py-2" />
//                         </div>
//                         <h3 className="text-xl font-semibold mb-4 text-white">Clone web</h3>
//                         <p className="mb-6 text-gray-300">
//                             Цель состояла в том, чтобы перенести как крупную систему управления
//                             обучением (LMS), так и систему управления взаимоотношениями с
//                             клиентами (CRM) одного из крупнейших центров изучения английского
//                             языка в Узбекистане на bare-metal инфраструктуру Kubernetes, с
//                             акцентом на обеспечение постоянной поддержки обеих систем в
//                             будущем.
//                         </p>
//                         <div className="mt-4 flex flex-wrap gap-2">
//                         <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                             Kubernetes
//                         </span>
//                         <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                             Ansible
//                         </span>
//                         <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                             Docker
//                         </span>
//                         <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                             Gitlab
//                         </span>
//                         <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                             Vault
//                         </span>
//                         </div>
//                     </div>
//                     <div className="keen-slider__slide number-slide2 rounded-[20px] px-8 py-8 bg-[#15193a] relative">
//                         <div className="flex flex-col justify-center items-center text-white text-center rounded-lg pb-4 z-20">
//                             <Image src={Udevs} width={140} height={100} alt="udevs" className="border rounded-[20px]  px-7 py-2" />
//                         </div>
//                         <h3 className="text-xl font-semibold mb-4 text-white">Clone web</h3>
//                         <p className="mb-6 text-gray-300">
//                             Цель состояла в том, чтобы перенести как крупную систему управления
//                             обучением (LMS), так и систему управления взаимоотношениями с
//                             клиентами (CRM) одного из крупнейших центров изучения английского
//                             языка в Узбекистане на bare-metal инфраструктуру Kubernetes, с
//                             акцентом на обеспечение постоянной поддержки обеих систем в
//                             будущем.
//                         </p>
//                         <div className="mt-4 flex flex-wrap gap-2">
//                         <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                             Kubernetes
//                         </span>
//                         <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                             Ansible
//                         </span>
//                         <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                             Docker
//                         </span>
//                         <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                             Gitlab
//                         </span>
//                         <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                             Vault
//                         </span>
//                         </div>
//                     </div>
//                     <div className="keen-slider__slide number-slide3 rounded-[20px] px-8 py-8 bg-[#15193a] relative">
//                         <div className="flex flex-col justify-center items-center text-white text-center rounded-lg pb-4 z-20">
//                             <Image src={Udevs} width={140} height={100} alt="udevs" className="border rounded-[20px]  px-7 py-2" />
//                         </div>
//                         <h3 className="text-xl font-semibold mb-4 text-white">Clone web</h3>
//                         <p className="mb-6 text-gray-300">
//                             Цель состояла в том, чтобы перенести как крупную систему управления
//                             обучением (LMS), так и систему управления взаимоотношениями с
//                             клиентами (CRM) одного из крупнейших центров изучения английского
//                             языка в Узбекистане на bare-metal инфраструктуру Kubernetes, с
//                             акцентом на обеспечение постоянной поддержки обеих систем в
//                             будущем.
//                         </p>
//                         <div className="mt-4 flex flex-wrap gap-2">
//                         <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                             Kubernetes
//                         </span>
//                         <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                             Ansible
//                         </span>
//                         <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                             Docker
//                         </span>
//                         <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                             Gitlab
//                         </span>
//                         <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                             Vault
//                         </span>
//                         </div>
//                     </div>
//                     <div className="keen-slider__slide number-slide4 rounded-[20px] px-8 py-8 bg-[#15193a] relative">
//                         <div className="flex flex-col justify-center items-center text-white text-center rounded-lg pb-4 z-20">
//                             <Image src={Udevs} width={140} height={100} alt="udevs" className="border rounded-[20px]  px-7 py-2" />
//                         </div>
//                         <h3 className="text-xl font-semibold mb-4 text-white">Clone web</h3>
//                         <p className="mb-6 text-gray-300">
//                             Цель состояла в том, чтобы перенести как крупную систему управления
//                             обучением (LMS), так и систему управления взаимоотношениями с
//                             клиентами (CRM) одного из крупнейших центров изучения английского
//                             языка в Узбекистане на bare-metal инфраструктуру Kubernetes, с
//                             акцентом на обеспечение постоянной поддержки обеих систем в
//                             будущем.
//                         </p>
//                         <div className="mt-4 flex flex-wrap gap-2">
//                         <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                             Kubernetes
//                         </span>
//                         <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                             Ansible
//                         </span>
//                         <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                             Docker
//                         </span>
//                         <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                             Gitlab
//                         </span>
//                         <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                             Vault
//                         </span>
//                         </div>
//                     </div>
//                     <div className="keen-slider__slide number-slide5 rounded-[20px] px-8 py-8 bg-[#15193a] relative">
//                         <div className="flex flex-col justify-center items-center text-white text-center rounded-lg pb-4 z-20">
//                             <Image src={Udevs} width={140} height={100} alt="udevs" className="border rounded-[20px]  px-7 py-2" />
//                         </div>
//                         <h3 className="text-xl font-semibold mb-4 text-white">Clone web</h3>
//                         <p className="mb-6 text-gray-300">
//                             Цель состояла в том, чтобы перенести как крупную систему управления
//                             обучением (LMS), так и систему управления взаимоотношениями с
//                             клиентами (CRM) одного из крупнейших центров изучения английского
//                             языка в Узбекистане на bare-metal инфраструктуру Kubernetes, с
//                             акцентом на обеспечение постоянной поддержки обеих систем в
//                             будущем.
//                         </p>
//                         <div className="mt-4 flex flex-wrap gap-2">
//                         <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                             Kubernetes
//                         </span>
//                         <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                             Ansible
//                         </span>
//                         <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                             Docker
//                         </span>
//                         <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                             Gitlab
//                         </span>
//                         <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                             Vault
//                         </span>
//                         </div>
//                     </div>
//                     <div className="keen-slider__slide number-slide6 rounded-[20px] px-8 py-8 bg-[#15193a] relative">
//                         <div className="flex flex-col justify-center items-center text-white text-center rounded-lg pb-4 z-20">
//                             <Image src={Udevs} width={140} height={100} alt="udevs" className="border rounded-[20px]  px-7 py-2" />
//                         </div>
//                         <h3 className="text-xl font-semibold mb-4 text-white">Clone web</h3>
//                         <p className="mb-6 text-gray-300">
//                             Цель состояла в том, чтобы перенести как крупную систему управления
//                             обучением (LMS), так и систему управления взаимоотношениями с
//                             клиентами (CRM) одного из крупнейших центров изучения английского
//                             языка в Узбекистане на bare-metal инфраструктуру Kubernetes, с
//                             акцентом на обеспечение постоянной поддержки обеих систем в
//                             будущем.
//                         </p>
//                         <div className="mt-4 flex flex-wrap gap-2">
//                         <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                             Kubernetes
//                         </span>
//                         <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                             Ansible
//                         </span>
//                         <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                             Docker
//                         </span>
//                         <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                             Gitlab
//                         </span>
//                         <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
//                             Vault
//                         </span>
//                         </div>
//                     </div>
//                 </div>
//                 <button
//                 className="absolute top-1/2 left-[-20px] transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
//                 onClick={handlePrev}
//                 >
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="white" fill="none">
//                         <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//                     </svg>
//                 </button>
//                 <button
//                 className="absolute top-1/2 right-[-15px] transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
//                 onClick={handleNext}
//                 >
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="white" fill="none">
//                         <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//                     </svg>
//                 </button>
//             </div>
//             </div>
//         </div> */}
//     </div>
//   );
// };

// export default safer(ProjectsSlider);
