import { IconGithub, IconLinkedin, IconMail } from "../icons";
import { LinkWithIcon } from "../ui/linkWithIcon";

const links = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/fernandobouchet",
    icon: <IconLinkedin className="link-icon" />,
  },
  {
    id: 2,
    link: "https://github.com/fernandobouchet",
    icon: <IconGithub className="link-icon" />,
  },
  {
    id: 3,
    link: "mailto:fernandobouchet@gmail.com",
    icon: <IconMail className="link-icon" />,
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
