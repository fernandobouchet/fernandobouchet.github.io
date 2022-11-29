const Badge = ({ text }) => {
  return (
    <>
      <span className="m-1 border border-neutral-400 rounded-full text-sky-200 text-xs md:text-sm font-normal mr-2 px-2.5 py-0.5">
        {text}
      </span>
    </>
  );
};
export default Badge;
