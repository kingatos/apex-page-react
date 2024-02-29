import { StyledIcon } from "./styled";
import { ReactComponent as facebookIcon } from "./icons/facebookIcon.svg";
import { ReactComponent as instagramIcon } from "./icons/instagramIcon.svg";
import { ReactComponent as linkedinIcon } from "./icons/linkedinIcon.svg";

const facebook = "https://www.facebook.com/";
const linkedin = "https://www.linkedin.com/in/";
const instagram = "https://www.instagram.com/";

export const socialMedia = [
  {
    name: "facebook",
    link: facebook,
    Icon: StyledIcon(facebookIcon),
  },
  {
    name: "linkedin",
    link: linkedin,
    Icon: StyledIcon(linkedinIcon),
  },
  {
    name: "instagram",
    link: instagram,
    Icon: StyledIcon(instagramIcon),
  },
];
