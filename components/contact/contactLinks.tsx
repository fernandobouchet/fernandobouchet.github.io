import { IconGithub, IconLinkedin, IconMail } from "../icons";
import { LinkWithIcon } from "../ui/linkWithIcon";

const links = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/fernandobouchet",
    icon: <IconLinkedin className="relative w-8 h-8 text-primary-foreground" />,
  },
  {
    id: 2,
    link: "https://github.com/fernandobouchet",
    icon: <IconGithub className="relative w-8 h-8 text-primary-foreground" />,
  },
  {
    id: 3,
    link: "mailto:fernandobouchet@gmail.com",
    icon: <IconMail className="relative w-8 h-8 text-primary-foreground" />,
  },
];

const ContactLinks = () => {
  return (
    <div className="w-full flex justify-center gap-10 py-5">
      {links.map((link) => (
        <LinkWithIcon key={link.id} link={link.link} icon={link.icon} />
      ))}
    </div>
  );
};

export { ContactLinks };
