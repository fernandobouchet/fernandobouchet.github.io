const LinkButtonSecondary = ({ text, href }) => {
  return (
    <a
      className="group flex text-sm md:text-base font-medium text-blue-600 dark:text-blue-300 px-1 py-1 border-b border-transparent hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-300 dark:hover:text-blue-200 transition"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {text}
      <svg
        className="fill-blue-600 dark:fill-blue-300 w-[0.7rem] md:w-[0.9rem] ml-1 group-hover:stroke-blue-500 dark:group-hover:stroke-blue-200 transition"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M18,10.82a1,1,0,0,0-1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8A1,1,0,0,1,5,7h7.18a1,1,0,0,0,0-2H5A3,3,0,0,0,2,8V19a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3V11.82A1,1,0,0,0,18,10.82Zm3.92-8.2a1,1,0,0,0-.54-.54A1,1,0,0,0,21,2H15a1,1,0,0,0,0,2h3.59L8.29,14.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L20,5.41V9a1,1,0,0,0,2,0V3A1,1,0,0,0,21.92,2.62Z" />
      </svg>
    </a>
  );
};
export default LinkButtonSecondary;
