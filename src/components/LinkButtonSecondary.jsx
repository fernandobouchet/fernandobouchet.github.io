const LinkButtonSecondary = ({ text, href }) => {
  return (
    <a
      className="text-sm md:text-base font-f py-2 px-4 font-medium leading-6 rounded-full text-sky-200 border border-neutral-400 hover:bg-neutral-700 transition"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
};
export default LinkButtonSecondary;
