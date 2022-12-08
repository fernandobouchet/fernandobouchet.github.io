const StyledLinkButton = ({ text, href }) => {
  return (
    <a
      className="text-sm md:text-base font-f py-3 px-5 leading-6 rounded-full bg-sky-800 text-sky-200 hover:bg-sky-700 transition"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
};
export default StyledLinkButton;
