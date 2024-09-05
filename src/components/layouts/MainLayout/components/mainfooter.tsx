import CustomContainer from "@/components/ui/Container";
import { FC } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram, FaTelegram, FaFacebookF, FaTwitter, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

interface SocialLink {
  icon: JSX.Element;
  link: string;
}

interface LinksGroup {
  title: string;
  links: string[];
}

const socialLinks: SocialLink[] = [
  { icon: <FaFacebookF />, link: "#" },
  { icon: <FaTwitter />, link: "#" },
  { icon: <FaInstagram />, link: "#" },
  { icon: <CiLinkedin />, link: "#" },
];

const quickLinks: LinksGroup = {
  title: "Quick Link",
  links: ["Home", "About", "Service", "Team", "Contact"],
};

const servicesLinks: LinksGroup = {
  title: "Services",
  links: ["Web Design", "Web Development", "SEO Optimization", "Blog Writing"],
};
const contactLinks: LinksGroup = {
  title: "Contact",
  links: ["+998 (33) 410 04 44"],
};

const FooterLinkGroup: FC<LinksGroup> = ({ title, links }) => (
  <div>
    <h6 className="font-semibold mb-6">{title}</h6>
    <ul style={{ color: "rgb(156 163 175)" }}>
      {links.map((link, index) => (
        <li key={index} className="mb-4">
          <a href="#" className="hover:text-blue-500 transition duration-300">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const FooterContactGroup: FC<LinksGroup> = ({ title, links }) => (
  <div>
    <h6 className="font-semibold mb-6">{title}</h6>
    <ul style={{ color: "rgb(156 163 175)" }}>
      {links.map((link, index) => (
        <li key={index} className="flex items-center mb-4">
          {index === 0 ? (
            <FaMapMarkerAlt className="mr-3 text-gray-400" />
          ) : (
            <FaPhoneAlt className="mr-3 text-gray-400" />
          )}
          <a href="#" className="hover:text-blue-500 transition duration-300 border-l pl-3 border-gray-600">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
const FooterQuickLinkGroup: FC<LinksGroup> = ({ title, links }) => (
  <div>
    <h6 className="font-semibold mb-6">{title}</h6>
    <ul style={{ color: "rgb(156 163 175)" }}>
      {links.map((link, index) => (
        <li key={index} className="w-1/2 mb-4">
          <a href="#" className="hover:text-blue-500 transition duration-300">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer: FC = () => {
  return (
    <footer className="bg-[#121637] text-white pt-20 px-5">
      <CustomContainer>
        <div className="px-2">
          <div className="flex gap-2 justify-between flex-wrap">
            {/* Logo and Description */}
            <div className="w-full md:w-2/6 lg:w-2/6 mb-12 md:mb-0">
              <h1 className="mb-6 font-bold">DePro</h1>
              <p className="mb-8" style={{ color: "rgb(156 163 175)" }}>
                About DePro Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus unde reprehenderit minima laboriosam corporis porro repellendus quos! Dolor laudantium tenetur exercitationem id mollitia, blanditiis assumenda eius. Molestias cum architecto ex?
              </p>
              <ul className="flex items-center">
                {socialLinks.map((social, index) => (
                  <li key={index} className="mr-3">
                    <a
                      href={social.link}
                      className="w-11 h-11 flex items-center justify-center bg-blue-500 bg-opacity-50 text-white rounded-full transition duration-300 hover:bg-blue-500"
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <FooterQuickLinkGroup {...quickLinks} />

            {/* Services */}
            <FooterLinkGroup {...servicesLinks} />

            <FooterContactGroup {...contactLinks} />
          </div>

        
          <div className="mt-10 border-t border-gray-300 py-6 text-center">
            <p className="text-gray-500">
              © Barcha huquqlar himoyalangan 2024 - DePro ®
            </p>
          </div>
        </div>
        </CustomContainer>
    </footer>
  );
};

export default Footer;

