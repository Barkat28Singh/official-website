import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaBehance, FaDiscord } from "react-icons/fa";

const socials = [
  { icons: <FaGithub></FaGithub>, path: "https://github.com/Barkat28Singh" },
  {
    icons: <FaLinkedinIn></FaLinkedinIn>,
    path: "https://www.linkedin.com/in/barkat-singh-uoft/",
  },
  {
    icons: <FaBehance></FaBehance>,
    path: "https://www.behance.net/Barkat1213singh",
  },
  { icons: <FaDiscord></FaDiscord>, path: "https://discord.com/users/Kat_01" },
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
