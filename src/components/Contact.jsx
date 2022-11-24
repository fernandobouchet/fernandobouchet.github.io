import StyledLinkButton from "./StyledLinkButton";

const Contact = () => {
  return (
    <div
      id="contact"
      className="max-w-5xl mx-auto h-screen flex flex-col gap-14 justify-center items-center p-5"
    >
      <h2 className="font-semibold text-2xl md:text-3xl">Contact</h2>
      <div>
        <div>
          <p className="md:text-xl max-w-2xl text-center font-light p-4">
            Thanks for your interest in getting in touch! The best way to reach
            me is by email at{" "}
            <a
              href="mailto:fernandobouchet@gmail.com"
              className="font-normal text-cyan-500"
            >
              fernandobouchet@gmail.com
            </a>
            . My inbox is always open, whether you have a question or just want
            to say hi, I'll get back to you asap!
          </p>
          <div className="flex justify-center pt-4">
            <StyledLinkButton
              href="mailto:fernandobouchet@gmail.com"
              text="Send Email"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-12">
        <a
          href="https://www.linkedin.com/in/fernando-bouchet"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-white w-[2.5rem] hover:scale-110  hover:stroke-cyan-500 transition"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x={4} y={4} width={16} height={16} rx={2} />
            <line x1={8} y1={11} x2={8} y2={16} />
            <line x1={8} y1={8} x2={8} y2={8.01} />
            <line x1={12} y1={16} x2={12} y2={11} />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
          </svg>
        </a>
        <a
          href="https://github.com/fernandobouchet"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            className="stroke-white w-[2.5rem] hover:scale-110  hover:stroke-cyan-500 transition"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
        </a>
        <a href="https://t.me/fernandobouchet" target="_blank" rel="noreferrer">
          <svg
            className="stroke-white w-[2.5rem] hover:scale-110  hover:stroke-cyan-500 transition"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
          </svg>
        </a>
      </div>
    </div>
  );
};
export default Contact;
