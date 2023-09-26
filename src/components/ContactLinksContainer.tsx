import style from '@styles/components/ContactLinksContainer.module.scss';
import { Email, Linkedin, Telegram, Twitter } from '@components/icons';
import ContactLink from '@components/ui/ContactLink';

const contactData = [
  {
    id: 0,
    icon: <Linkedin />,
    href: 'https://www.linkedin.com/in/fernandobouchet',
  },
  {
    id: 1,
    icon: <Twitter />,
    href: 'https://twitter.com/ferbouchet',
  },
  {
    id: 2,
    icon: <Email />,
    href: 'mailto:fernandobouchet@gmail.com',
  },
  {
    id: 3,
    icon: <Telegram />,
    href: 'https://t.me/fernandobouchet',
  },
];

const ContactLinksContainer = () => {
  return (
    <div className={style.contact__links__container}>
      {contactData.map((contact) => (
        <ContactLink key={contact.id} href={contact.href} icon={contact.icon} />
      ))}
    </div>
  );
};

export default ContactLinksContainer;
