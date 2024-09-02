import React, { useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { safer } from '@/utils/safer';
import CustomContainer from '@/components/ui/Container';
import StarsCanvas from '@/components/canvas/StarsCanvas';
import GridGlobe from '@/components/canvas/GridGlobe';

const ContactSection = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [form, setForm] = useState({
        name: "",
        email: "",
        tel: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const { t } = useTranslation('common');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    return (
        <div className="mt-36 py-20 relative" id="contact-section">
            {/* <CustomContainer>
                <div className="flex items-center justify-between gap-10 overflow-hidden">
                    <div className="flex flex-col w-full bg-black-100 p-8 rounded-2xl">
                        <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>
                            {t('contact.getInTouch')}
                        </p>
                        <h3 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
                            {t('contact.contact')}
                        </h3>

                        <form
                            ref={formRef}
                            className="mt-12 flex flex-col gap-9"
                        >
                            <label className="flex flex-col">
                                <span className="text-white font-medium mb-4">
                                    {t('contact.labels.name')}
                                </span>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder={t('contact.placeholders.name')}
                                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white outline-none border-none font-medium"
                                />
                            </label>
                            <label className="flex flex-col">
                                <span className="text-white font-medium mb-4">
                                    {t('contact.labels.email')}
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder={t('contact.placeholders.email')}
                                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white outline-none border-none font-medium"
                                />
                            </label>
                            <label className="flex flex-col">
                                <span className="text-white font-medium mb-4">
                                    {t('contact.labels.message')}
                                </span>
                                <input
                                    type="number"
                                    name="tel"
                                    value={form.tel}
                                    onChange={handleChange}
                                    placeholder={t('contact.placeholders.tel')}
                                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white outline-none border-none font-medium"
                                />
                            </label>
                            <button className="bg-[#2f3fe7] rounded-[12px] text-[#fff] text-[16px] font-bold py-5 px-20">
                                {loading ? t('contact.button.sending') : t('contact.button.sent')}
                            </button>
                        </form>
                    </div>
                    <div className='w-full'>
                      <GridGlobe />
                    </div>
                </div>
            </CustomContainer>
            <StarsCanvas /> */}
            <CustomContainer>
            <div className="flex justify-between gap-10 overflow-hidden">
                    <div className='w-full flex flex-col gap-12'>
                      <h1 className='font-bold text-[35px]'>Position your company for digital leadership</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repellat aut hic, quidem modi accusantium itaque molestiae quis distinctio voluptates tempore odio quibusdam sit alias dolorem libero consequatur incidunt voluptatem.</p>
                    </div>
                    <div className="flex flex-col w-full bg-black-100 p-8 rounded-2xl">

                        <form
                            ref={formRef}
                            className="mt-12 flex flex-col gap-9"
                        >
                            <label className="flex flex-col">
                                <span className="text-white font-medium mb-4">
                                    {t('contact.labels.name')}
                                </span>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder={t('contact.placeholders.name')}
                                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white outline-none border-none font-medium"
                                />
                            </label>
                            <label className="flex flex-col">
                                <span className="text-white font-medium mb-4">
                                    {t('contact.labels.email')}
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder={t('contact.placeholders.email')}
                                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white outline-none border-none font-medium"
                                />
                            </label>
                            <label className="flex flex-col">
                                <span className="text-white font-medium mb-4">
                                    {t('contact.labels.message')}
                                </span>
                                <input
                                    type="number"
                                    name="tel"
                                    value={form.tel}
                                    onChange={handleChange}
                                    placeholder={t('contact.placeholders.tel')}
                                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white outline-none border-none font-medium"
                                />
                            </label>
                            <button className="bg-[#2f3fe7] rounded-[12px] text-[#fff] text-[16px] font-bold py-5 px-20">
                                {loading ? t('contact.button.sending') : t('contact.button.sent')}
                            </button>
                        </form>
                    </div>
                </div>
            </CustomContainer>
        </div>
    );
};

export default safer(ContactSection);
