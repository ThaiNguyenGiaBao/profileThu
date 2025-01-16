import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const PersonalInfo: PersonalInfoType = {
  name: "Dinh Ngoc Minh Thu",
  links: {
    Facebook: {
      icon: faFacebook,
      text: "Facebook:  Dinh Ngoc Minh Thu",
      link: "https://www.facebook.com/dnmtmint",
      color: "text-blue-500",
    },
    Email: {
      icon: faEnvelope,
      text: `Mail: minhthu14022006@gmail.com`,
      link: `mailto:minhthu14022006@gmail.com`,
      email: "minhthu14022006@gmail.com",
      color: "text-red-300",
    },
  },
  schools: [
    {
      year: { start: "2024", end: "current" },
      school: "University of Transport Ho Chi Minh City",
      address: "HCMC, Vietnam",
      occupation: "Undergraduate Student",
    },
    {
      year: { start: "2021", end: "2024" },
      school: "Ngo Quyen High School",
      address: "Dong Nai, Vietnam",
      occupation: "High School Student",
    },
  ],
};

type PersonalLink = {
  icon?: IconProp;
  text?: string;
  link?: string;
  color?: string;
  email?: string;
};

type SchoolType = {
  year: {
    start: string;
    end: string | "current";
  };
  school: string;
  address?: string;
  occupation?: string;
};

type PersonalInfoType = {
  name: string;
  links: {
    [key: string]: PersonalLink;
  };
  schools: SchoolType[];
};
