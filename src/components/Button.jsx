const Button = ({ text, onClick }) => {
  return (
    <button
      className="text-sm md:text-base font-f py-3 px-5 leading-6 rounded-full font-medium text-light-fontContainer bg-light-container dark:bg-dark-container dark:text-dark-fontContainer hover:opacity-95 transition-opacity"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default Button;
