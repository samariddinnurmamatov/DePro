import dynamic from 'next/dynamic';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { safer } from '@/utils/safer';
import { toast } from 'react-toastify';
const CustomContainer = dynamic(() => import('@/components/ui/Container'));

const TELEGRAM_BOT_TOKEN = '7434955693:AAFKUX3LUcVB7NagJDxW35ShJ_eSfmlCnMs';
const CHAT_ID = '-1002365682139';

const ContactSection = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [form, setForm] = useState({
        name: "",
        email: "",
        tel: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        tel: false,
        message: false,
    });
    const { t } = useTranslation('common');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: false,
        });
    };

    const validateForm = () => {
        const newErrors = {
            name: form.name.trim() === "",
            email: form.email.trim() === "",
            tel: form.tel.trim() === "",
            message: form.message.trim() === "",
        };

        setErrors(newErrors);

        return !Object.values(newErrors).includes(true);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) {
            toast.error('Iltimos, barcha maydonlarni to\'ldiring.');
            return;
        }

        setLoading(true);

        try {
            const message = `
                *New Contact Form Submission*\n*Name:* ${form.name.trim()}\n*Email:* ${form.email.trim()}\n*Phone:* ${form.tel.trim()}\n*Message:* ${form.message.trim()}
            `;
            const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: message,
                    parse_mode: 'Markdown',
                }),
            });

            if (response.ok) {
                toast.success('Xabar yuborildi!');
                setForm({
                    name: "",
                    email: "",
                    tel: "",
                    message: "",
                });
            } else {
                toast.error('Xabarni yuborish muvaffaqiyatsiz tugadi.');
            }
        } catch (error) {
            console.error('Xabar yuborishda xatolik:', error);
            toast.error('Xatolik yuz berdi.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="pt-40 py-24 px-5 max-[600px]:px-2 relative" id="contact-section">
            <CustomContainer>
                <div className="flex justify-between max-[830px]:flex-col gap-14 overflow-hidden px-4">
                    <div className='w-full flex flex-col max-[700px]:text-center gap-12'>
                        <h1 className='font-bold text-[45px] max-[440px]:text-[30px]'>{t('contact.title')}</h1>
                        <p className="max-[440px]:text-[14px]">
                            {t('contact.description')}
                        </p>
                        <div>
                            <p><span>Phone: </span> +998(90)-009-99-16</p>
                            <p><span>Telegram: </span> <a href="https://t.me/husniddin_nurmamatov">@husniddin_nurmamatov</a></p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full bg-[#15193a] p-8 max-[600px]:p-5 rounded-2xl">
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-9"
                        >
                            <div className='input-field'>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    value={form.name} 
                                    onChange={handleChange} 
                                    required 
                                    spellCheck="false" 
                                    placeholder=" "
                                    className={`${errors.name ? 'border-red-500' : 'border-gray-50'}`} />
                                <label htmlFor="name">{t('contact.labels.name')}</label>
                            </div>

                            <div className='input-field'>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={form.email} 
                                    onChange={handleChange} 
                                    required 
                                    spellCheck="false" 
                                    placeholder=" "
                                    className={`${errors.email ? 'border-red-500' : 'border-gray-50'}`} />
                                <label htmlFor="email">{t('contact.labels.email')}</label>
                            </div>

                            <div className='input-field'>
                                <input 
                                    type="text" 
                                    id="tel" 
                                    name="tel" 
                                    value={form.tel} 
                                    onChange={handleChange} 
                                    required 
                                    spellCheck="false" 
                                    placeholder=" "
                                    className={`${errors.tel ? 'border-red-500' : 'border-gray-50'}`} />
                                <label htmlFor="tel">{t('contact.labels.tel')}</label>
                            </div>

                            <div className="input-field">
                                <textarea
                                    id="message"
                                    name="message"
                                    value={form.message} 
                                    onChange={handleChange} 
                                    required 
                                    spellCheck="false" 
                                    placeholder=" "
                                    className={`${errors.message ? 'border-red-500' : 'border-gray-50'} h-40`}
                                />
                                <label htmlFor="message">{t('contact.labels.comment')}</label>
                            </div>

                            <button type='submit' className="bg-[#2f3fe7] rounded-[12px] max-w-55 text-[#fff] text-[16px] font-bold py-5 px-20">
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </CustomContainer>
        </div>
    );
};

export default safer(ContactSection);
