import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaWhatsapp } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/ghost-254" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/neville-otieno-57a88715b/" },
  { icon: <FaWhatsapp />, path: "https://wa.link/zkkt9k" },
  { icon: <FaTwitter />, path: "https://x.com/NevilleOtieno2" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
