import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaBehance, FaDiscord } from "react-icons/fa";

const socials = [
  { icons: <FaGithub></FaGithub>, path: "" },
  { icons: <FaLinkedinIn></FaLinkedinIn>, path: "" },
  { icons: <FaBehance></FaBehance>, path: "" },
  { icons: <FaDiscord></FaDiscord>, path: "" },
];

export const Social = () => {
  return (
    <div className="flex gap-6">
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
          >
            {item.icons}
          </Link>
        );
      })}
    </div>
  );
};
