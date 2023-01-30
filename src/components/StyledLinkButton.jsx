const StyledLinkButton = ({ text, href }) => {
  return (
    <a
      className="text-base font-medium py-3 px-5 rounded-full text-light-fontContainer bg-light-container dark:bg-dark-container dark:text-dark-fontContainer hover:opacity-95 transition-opacity"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
};
export default StyledLinkButton;
