const StyledLinkButton = ({ text, href }) => {
  return (
    <a
      className="text-sm md:text-base font-f py-3 px-5 leading-6 rounded-full bg-blue-600 hover:bg-blue-500 text-white dark:bg-blue-300  dark:text-blue-900 dark:hover:bg-blue-200 transition font-medium"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
};
export default StyledLinkButton;
