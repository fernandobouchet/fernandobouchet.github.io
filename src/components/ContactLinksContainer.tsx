import style from "@styles/components/ContactLinksContainer.module.scss";
import { Email, Linkedin, Telegram, Twitter } from "@components/icons";
import ContactLink from "@components/ui/ContactLink";

const contactData = [
  {
    id: 0,
    icon: <Linkedin />,
    href: "https://www.linkedin.com/in/fernandobouchet",
    description: "Link to Fernando Bouchet Linkedin",
  },
  {
    id: 1,
    icon: <Twitter />,
    href: "https://twitter.com/ferbouchet",
    description: "Link to Fernando Bouchet Twitter / X",
  },
  {
    id: 2,
    icon: <Email />,
    href: "mailto:fernandobouchet@gmail.com",
    description: "Link to Fernando Bouchet Email",
  },
  {
    id: 3,
    icon: <Telegram />,
    href: "https://t.me/fernandobouchet",
    description: "Link to Fernando Bouchet Telegram",
  },
];

const ContactLinksContainer = () => {
  return (
    <div className={style.contact__links__container}>
      {contactData.map((contact) => (
        <ContactLink
          key={contact.id}
          href={contact.href}
          icon={contact.icon}
          description={contact.description}
        />
      ))}
    </div>
  );
};

export default ContactLinksContainer;
