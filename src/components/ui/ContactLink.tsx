import style from "@styles/components/ui/ContactLink.module.scss";
import { useContext } from "react";
import { ThemeContext } from "@context/ThemeContext";

interface Props {
  href: string;
  icon: React.JSX.Element;
  description: string;
}

const ContactLink = ({ href, icon, description }: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <a href={href} target="_blank" aria-label={description}>
      <span className={`${style.contact__icons__icon} ${style[theme]}`}>
        {icon}
      </span>
    </a>
  );
};

export default ContactLink;
