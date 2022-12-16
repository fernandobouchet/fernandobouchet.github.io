const Button = ({ text, onClick }) => {
  return (
    <button
      className="text-sm md:text-base font-f py-3 px-5 leading-6 rounded-full  bg-blue-600 hover:bg-blue-500 text-white dark:bg-blue-300  dark:text-blue-900 dark:hover:bg-blue-200 transition font-medium"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default Button;
