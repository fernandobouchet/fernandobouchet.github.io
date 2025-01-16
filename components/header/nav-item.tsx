import Link from "next/link";

interface Props {
  title: string;
  link: string;
}

const NavItem = ({ title, link }: Props) => {
  return <Link href={`#${link}`.toLowerCase()}>{title}</Link>;
};
export { NavItem };
