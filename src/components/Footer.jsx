const Footer = () => {
  return (
    <div className="h-10 text-center text-sm md:text-base font-light text-slate-400">
      <span className="align-middle">
        © Fernando Bouchet - {new Date().getFullYear()}{" "}
      </span>
    </div>
  );
};
export default Footer;
