const Button = ({ text, onClick }) => {
  return (
    <button
      className="text-base py-3 px-5 rounded-full font-medium text-light-fontContainer bg-light-container dark:bg-dark-container dark:text-dark-fontContainer hover:opacity-95 transition-opacity"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default Button;
