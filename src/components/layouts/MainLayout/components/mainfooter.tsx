import CustomContainer from "@/components/ui/Container";
import { useTranslation } from "next-i18next";
import { FC } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaTelegram, FaPhoneAlt, FaEnvelope, FaTelegramPlane } from "react-icons/fa";

interface SocialLink {
  icon: JSX.Element;
  link: string;
  ariaLabel: string;
}

interface ContactLink {
  type: 'phone' | 'email' | 'telegram';
  value: string;
}

interface LinksGroup {
  title: string;
  links: { text: string, href: string }[];
}

interface ContactLinksGroup {
  title: string;
  links: ContactLink[];
}

const socialLinks: SocialLink[] = [
  { icon: <CiLinkedin />, link: "https://www.linkedin.com/company/depro-it-uzbekistan/", ariaLabel: "LinkedIn" },
  { icon: <FaTelegram />, link: "https://t.me/husniddin_nurmamatov", ariaLabel: "Telegram" },
];

const contactLinks: ContactLinksGroup = {
  title: "Contact",
  links: [
    { type: 'phone', value: "+998 (90) 009 99 16" },
    { type: 'email', value: "nurmamatov.dev@gmail.com" },
    { type: 'telegram', value: "https://t.me/husniddin_nurmamatov" },
  ],
};

const FooterLinkGroup: FC<LinksGroup> = ({ title, links }) => (
  <div>
    <h3 className="font-semibold mb-6 text-white">{title}</h3> {/* Changed h6 to h3 for proper hierarchy */}
    <ul className="text-gray-400">
      {links.map((link, index) => (
        <li key={index} className="mb-4">
          <a href={link.href} className="hover:text-blue-500 transition duration-300">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const FooterContactGroup: FC<ContactLinksGroup> = ({ title, links }) => (
  <div>
    <h3 className="font-semibold mb-6 text-white">{title}</h3> {/* Changed h6 to h3 for proper hierarchy */}
    <ul className="text-gray-400">
      {links.map((link, index) => (
        <li key={index} className="flex items-center mb-4">
          {link.type === 'phone' && <FaPhoneAlt className="mr-3 text-gray-400" />}
          {link.type === 'email' && <FaEnvelope className="mr-3 text-gray-400" />}
          {link.type === 'telegram' && <FaTelegramPlane className="mr-3 text-gray-400" />}
          
          <a 
            href={
              link.type === 'phone' 
                ? `tel:${link.value}` 
                : link.type === 'email' 
                ? `mailto:${link.value}` 
                : link.type === 'telegram' 
                ? link.value 
                : '#'
            }
            target={link.type === 'telegram' ? '_blank' : '_self'}
            className="hover:text-blue-500 transition duration-300 border-l pl-3 border-gray-600"
          >
            {link.type === 'telegram' ? 'DePro Telegram' : link.value}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer: FC = () => {
  const { t } = useTranslation();

  const quickLinks: LinksGroup = {
    title: "Quick Link",
    links: [
      { text: t('nav.home'), href: "#home-section" },
      { text: t('nav.services'), href: "#services-section" },
      { text: t('nav.tools'), href: "#tools-section" },
    ],
  };

  const servicesLinks: LinksGroup = {
    title: t('services.title'),
    links: [
      { text: t('services.items.0'), href: "#services-section" },
      { text: t('services.items.1'), href: "#services-section" },
      { text: t('services.items.2'), href: "#services-section" },
      { text: t('services.items.3'), href: "#services-section" },
      { text: t('services.items.4'), href: "#services-section" },
      { text: t('services.items.5'), href: "#services-section" },
    ],
  };

  return (
    <footer className="bg-[#121637] pt-20 px-5">
      <CustomContainer>
        <div className="px-2">
          <div className="flex gap-x-5 gap-y-10 justify-between flex-wrap">
            {/* Logo and Description */}
            <div className="w-full md:w-2/7 lg:w-2/5 mb-12 md:mb-0">
              <h2 className="mb-6 font-bold text-white">DePro</h2> {/* Changed h1 to h2 for proper hierarchy */}
              <p className="mb-8 text-gray-400">
                Empowering businesses with top-tier outsourcing in IT, customer support, software development, and more. Our expert team delivers seamless integration, cost efficiency, and high-quality service, enabling you to focus on driving growth and success.
              </p>
            </div>

            {/* Quick Links */}
            <FooterLinkGroup {...quickLinks} />

            {/* Services */}
            <FooterLinkGroup {...servicesLinks} />

            {/* Contact */}
            <FooterContactGroup {...contactLinks} />
          </div>

          <div className="mt-10 border-t flex flex-col sm:flex-row gap-y-5 justify-between items-center border-gray-300 py-6 text-center">
            <p className="text-gray-400 max-[400px]:text-[13px]">
              {t('footer.protected')}
            </p>
            <ul className="flex items-center">
              {socialLinks.map((social, index) => (
                <li key={index} className="mr-3">
                  <a
                    href={social.link}
                    target="_blank"
                    aria-label={social.ariaLabel}
                    className="w-11 h-11 flex items-center justify-center bg-blue-500 bg-opacity-50 text-white rounded-full transition duration-300 hover:bg-blue-500"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CustomContainer>
    </footer>
  );
};

export default Footer;
