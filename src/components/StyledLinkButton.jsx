const StyledLinkButton = ({ text, href }) => {
  return (
    <a
      className="text-sm md:text-base py-2 px-4 font-normal leading-6 rounded-3xl bg-sky-800 text-sky-200 hover:bg-sky-700 transition"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
};
export default StyledLinkButton;
