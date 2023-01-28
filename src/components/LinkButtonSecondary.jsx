const LinkButtonSecondary = ({ text, href }) => {
  return (
    <a
      className="group flex text-sm md:text-base font-medium text-blue-600 dark:text-blue-300 px-1 py-1 border-b border-transparent hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-200 dark:hover:text-blue-200 transition"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
};
export default LinkButtonSecondary;
