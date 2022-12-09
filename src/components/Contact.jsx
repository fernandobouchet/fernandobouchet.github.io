import Button from './Button';

const Contact = () => {
  return (
    <div
      id="contact"
      className="max-w-5xl mx-auto min-h-screen flex flex-col gap-14 justify-center items-center p-5 pt-16"
    >
      <h2 className="font-medium text-3xl md:text-4xl">Contact</h2>
      <div>
        <p className="text-sm md:text-base max-w-2xl text-center">
          Thanks for your interest in getting in touch!
        </p>
        <p className="text-sm md:text-base max-w-2xl text-center">
          The best way to reach me is by email at{' '}
          <a
            href="mailto:fernandobouchet@gmail.com"
            className="font-normal text-blue-300"
          >
            fernandobouchet@gmail.com
          </a>
          .
        </p>
        <p className="text-sm md:text-base max-w-2xl text-center">
          I'll try to get back to you asap!
        </p>
        <div>
          <form
            className="flex flex-col mx-auto gap-5 w-64 pt-8 text-sm md:text-base"
            action="https://formsubmit.co/b0b332c987f92be7b0fb5ad3079d5478"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
            <input
              type="hidden"
              name="_next"
              value="https://fernandobouchet.github.io"
            />
            <input
              type="hidden"
              name="_subject"
              value="Message from your website!"
            />
            <label htmlFor="name">
              <input
                required
                className="bg-neutral-800 p-2 border-b border-stone-700 w-full rounded-t focus:rounded-b focus:outline-none focus:ring-1 focus:ring-sky-700 valid:border-sky-700"
                type="text"
                placeholder="Name"
                name="name"
                id="name"
              />
            </label>
            <label htmlFor="email">
              <input
                required
                className="bg-neutral-800 p-2 border-b border-stone-700 w-full rounded-t focus:rounded-b focus:outline-none focus:ring-1 focus:ring-sky-700 valid:border-sky-700"
                type="email"
                placeholder="Email"
                name="email"
                id="email"
              />
            </label>
            <label htmlFor="text">
              <textarea
                required
                className="bg-neutral-800 p-2 border-b border-stone-700 h-36 w-full rounded-t focus:rounded-b resize-none focus:outline-none focus:ring-1 focus:ring-sky-700 valid:border-sky-700"
                rows="15"
                as="textarea"
                placeholder="Message"
                name="text"
                id="text"
              />
            </label>
            <Button text={'Send'} type="submit">
              Send!
            </Button>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-between gap-12">
        <a
          href="https://www.linkedin.com/in/fernando-bouchet"
          target="_blank"
          rel="noreferrer"
        >
          <div className="bg-neutral-800 hover:bg-neutral-700 transition py-2 px-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              className="fill-sky-200 w-[2rem]"
            >
              <path d="M997.795 1002.43H789.769c-14.715 0-26.607-11.892-26.607-26.607V640.806c0-114.898-59.263-114.898-78.816-114.898-52.611 0-74.986 41.525-82.243 59.466-3.427 8.064-5.04 21.77-5.04 40.921v349.732c0 14.715-11.892 26.607-26.606 26.607H362.23c-7.055 0-13.909-2.822-18.948-7.86s-7.861-11.895-7.66-18.95c0-5.643 2.822-567.432 0-624.881-.403-7.257 2.217-14.312 7.257-19.553s11.893-8.265 19.35-8.265h208.228c14.714 0 26.607 11.892 26.607 26.607v15.723c35.074-31.244 85.669-57.046 161.058-57.046 166.702 0 266.28 115.3 266.28 308.409v359.005c0 14.715-11.893 26.607-26.607 26.607zm-181.418-53.214l155.012-.004V616.815c0-162.268-77.606-255.193-213.065-255.193-90.507 0-134.45 45.153-162.066 86.476-3.225 10.885-13.506 18.949-25.6 18.949h-1.41c-9.677 0-18.546-5.242-23.181-13.707-3.628-6.653-4.435-14.313-2.016-21.368v-55.835H389.443c1.411 111.068 0 470.477-.403 572.877h154.809V626.09c0-26.809 2.822-46.16 8.869-60.875 23.383-57.852 72.566-92.724 131.427-92.724 83.855 0 132.03 61.28 132.03 168.113v308.611h.204zm-569.246 53.21H38.904c-14.715 0-26.607-11.892-26.607-26.607V349.73c0-14.715 11.892-26.608 26.607-26.608h208.227c14.715 0 26.607 11.893 26.607 26.607V975.82c0 14.715-11.892 26.608-26.607 26.608zM65.513 949.213h155.01V376.336H65.514v572.876zm77.605-658.344l-1.412-.001c-82.041 0-141.707-56.844-141.707-135.055 0-78.009 60.674-134.854 144.529-134.854 82.444 0 141.305 55.231 142.918 134.249 0 78.816-60.674 135.66-144.328 135.66zm1.41-216.492c-54.627 0-91.313 32.857-91.313 81.639 0 47.974 36.284 81.637 88.492 81.637h1.41c54.426 0 91.112-32.857 91.112-81.638-1.008-49.386-36.283-81.638-89.701-81.638z" />
            </svg>
          </div>
        </a>
        <a
          href="https://github.com/fernandobouchet"
          target="_blank"
          rel="noreferrer"
        >
          <div className="bg-neutral-800 hover:bg-neutral-700 transition py-2 px-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              className="fill-sky-200 w-[2rem]"
            >
              <path d="M158.6 522.6c-11.6 0-22.4-7.402-26-19.002-29.4-91.8-33.6-254 29.4-327.6-14-53.2-6.2-125.2 19.599-163.8 5.4-8 14.2-12.6 24-12.2 73.4 3.201 121.2 33.8 163.2 61.8 59.8-15.599 118-21 187-17.2 17 1 33.8 4.8 48.6 8.2 14 3.2 28.4 6.601 36.8 5.801 7.6-.8 21.2-10 32.2-17.6 10.2-7 21-14.2 32.2-19.2 32-14 60.8-20.4 99.6-21.8 15-.4 27.8 11.199 28.399 26.4s-11.2 27.799-26.4 28.2c-32.2 1.2-53.8 5.8-79.6 17.2-6.6 3-14.8 8.4-23.4 14.4-17 11.6-36.4 24.8-58 26.8-17.4 1.6-35.4-2.4-54.4-7-13.2-3-27-6.2-39.2-7-67.4-3.8-123.4 2-181.4 18.6-7.6 2.2-15.8 1-22.6-3.6l-6.8-4.6C305.198 85.2 270.6 62 220 55.8c-12.6 32.2-14.199 85.6-1.6 117.2 4.401 10.8 1.201 23.399-7.599 30.8-49.4 42-55.6 190.6-26.2 282.8 4.6 14.4-3.4 29.8-17.8 34.4-2.8 1.2-5.6 1.6-8.2 1.6zm207.999 269.998c-2 0-4.002-.2-6.002-.6-14.8-3.2-24-17.8-20.8-32.6l1.8-7.8c8.4-38 16.2-68.6 25.4-91.4-112.2-23.4-194-76.8-232.8-152.4-6.8-13.4-1.6-30 11.801-36.8s30-1.599 36.8 11.802c35 68.2 117.4 114.4 232.2 130.2 11 1.6 20 9.6 22.8 20.199 2.8 10.8-1.2 22.2-10.2 28.8-5.8 5.2-16.4 27-32.6 101.2l-1.8 8c-2.8 12.6-14 21.399-26.6 21.399zm-50.403 200.2c-1.8 0-3.4-.2-5.2-.6-14.8-3-24.6-16.8-21.6-31.6 5-25.4 22.8-36 33.4-42.2 7.2-4.2 9.4-5.8 10.6-8.6 6.2-13.2 4.6-47.4 3.2-74.8-.6-11.6-1.199-23.4-1.399-34.8-63.4 11-132.2 14.4-168.601-45.8-7.2-12-11.8-24.2-16-35.2-4.8-12.4-8.8-23.2-15.4-31.2-9.599-11.6-7.8-28.8 3.8-38.4s28.8-8 38.4 3.8c12.2 15 18.6 31.8 24.2 46.6 3.6 9.6 7 18.6 11.6 26.2 19.6 32.4 62.399 30.4 144.8 13.8 8.6-1.8 17.399.8 23.8 6.6 6.4 6 9.6 14.6 8.6 23.199-2 17.4-.8 40.2.2 62.2 2 38.6 3.8 75-8.4 100.8-8.8 18.6-23 27-32.4 32.4-2.6 1.6-6.6 3.8-7.4 4.8-1.8 13.4-13.2 22.801-26.2 22.801zm397.599-5.2c-9 0-17.6-4.397-23-12.397-2.2-3.6-5.4-5.8-11-9.6-8.8-6.2-20.8-14.6-29.8-32-16.2-31.8-13.6-78-11-126.8 1.599-30 3.198-61-.002-85.4-2.8-20.6-10-29.8-20-42.6-6.4-8.4-13.8-17.801-19.6-30.202-3.8-8.2-3.2-17.6 1.2-25.4 4.6-7.8 12.6-12.8 21.6-13.4 102.6-7.6 183.6-56 222.6-132.6 6.8-13.4 23.2-18.8 36.8-12 13.4 6.8 18.8 23.2 12 36.8-41.6 82.2-121 137.6-221.4 156.6 9 13.2 17.8 30 21.2 55.8 4 29.4 2.2 63 .4 95.4-2 37.6-4.2 80.2 5.201 99 2.4 4.8 5.4 7 12.2 11.8 7.4 5 17.4 12 25.6 24.599s4.601 29.6-7.998 37.8c-4.6 3.2-9.8 4.6-15 4.6zm155.4-470.596c-2.4 0-5.002-.4-7.402-.999-14.6-4.2-23-19.2-18.8-33.8 30.2-106.2 9.6-244.2-43.2-289.2-8.599-7.4-11.8-19.2-8-29.8 12.8-36.6 4.2-91.6-10.399-124.8-6-13.8.2-30 14-36s30 .2 36 14c16.8 38 27.8 97.8 16.8 147.6 65.2 72 78 225.6 47.4 333.2-3.6 12-14.399 19.8-26.399 19.799zm-245.601 507.401c-5 0-10.2-1.4-14.8-4.4-5-3.2-20-12.8-47.8-56-12.6-19.6-21.8-117.2-27.399-290.4-.4-15 11.4-27.799 26.4-28.2s27.8 11.4 28.2 26.4c3.6 113.4 12 242 19.6 264 20.4 31.6 30 38 30.4 38.2 12.6 8.2 16.399 25 8.199 37.8-5 8.2-13.8 12.6-22.8 12.6zm-207.401 0c-9 0-17.8-4.4-23-12.6-8.2-12.6-4.4-29.6 8.2-37.8.4-.2 10-6.6 30.4-38.2 7.6-21.8 15.8-150.6 19.6-264 .4-15 13.2-27 28.2-26.4 15 .4 27 13.2 26.4 28.2-5.6 173.2-14.8 271-27.4 290.4-27.8 43-42.8 52.8-47.8 56-4.4 3-9.6 4.4-14.6 4.4z" />
            </svg>
          </div>
        </a>
        <a href="https://t.me/fernandobouchet" target="_blank" rel="noreferrer">
          <div className="bg-neutral-800 hover:bg-neutral-700 transition py-2 px-2 rounded-full">
            <svg
              className="stroke-sky-200 w-[2rem]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
};
export default Contact;
