const StyledLinkButton = ({ text, href }) => {
  return (
    <a
      className="text-sm md:text-base font-f py-3 px-5 leading-6 rounded-full bg-sky-200 hover:bg-sky-300 text-sky-900 dark:bg-sky-900  dark:text-sky-200 dark:hover:bg-sky-800 transition"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
};
export default StyledLinkButton;
