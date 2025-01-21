import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      className="rounded-full w-48 md:w-60"
      src="profile.webp"
      width={300}
      height={300}
      alt="Fernando Bouchet profile picture"
      priority
    />
  );
};
export { Avatar };
