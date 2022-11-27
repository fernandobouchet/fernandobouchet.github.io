const StyledLinkButton = ({ text, href }) => {
  return (
    <a
      className="md:text-lg py-2 px-4 font-normal rounded-3xl bg-sky-800 text-sky-200 hover:bg-sky-700 transition"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
};
export default StyledLinkButton;
