const StyledLinkButton = ({ text, href }) => {
  return (
    <a
      className="md:text-lg py-2 px-4 font-semibold rounded-md bg-cyan-600 text-white hover:bg-cyan-700 hover:scale-105 transition"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
};
export default StyledLinkButton;
