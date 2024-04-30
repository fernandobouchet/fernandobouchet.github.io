const Footer = () => {
  const text = `Fernando Bouchet - ${new Date().getFullYear()}`;

  return <footer className="flex justify-center text-sm">{text}</footer>;
};

export { Footer };
