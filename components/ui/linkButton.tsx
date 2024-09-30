import { IconArrowRight } from "@/components/icons";

interface Props {
  link: string;
  text: string;
}

const LinkButton = ({ link, text }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      className="group relative inline-flex h-12 items-center text-base lg:text-lg justify-center overflow-hidden rounded-full bg-primary px-6 text-primary-foreground font-semibold my-2"
    >
      <span>{text}</span>
      <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-2 group-hover:opacity-100">
        <IconArrowRight className="h-5 w-5" />
      </div>
    </a>
  );
};

export { LinkButton };
