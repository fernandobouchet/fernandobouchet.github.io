const Button = ({ text, onClick }) => {
  return (
    <button
      className="text-sm md:text-base font-f py-2 px-4 font-medium leading-6 rounded-full bg-sky-800 text-sky-200 hover:bg-sky-700 transition"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default Button;
