import Link from "next/link";

import { FaGithub, FaWhatsapp } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/ghost-254" },
  { icon: <FaWhatsapp />, path: "https://wa.link/29c65r" },
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
