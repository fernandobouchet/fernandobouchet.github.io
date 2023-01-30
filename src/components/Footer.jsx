const Footer = () => {
  return (
    <div className="h-10 text-center text-xs md:text-sm leading-4 md:leading-5 font-light text-light-fontSurface dark:text-dark-fontSurface animate-fadeIn transition">
      <span className="align-middle">
        © Fernando Bouchet - {new Date().getFullYear()}{' '}
      </span>
    </div>
  );
};
export default Footer;
