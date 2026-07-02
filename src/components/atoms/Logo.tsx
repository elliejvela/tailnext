import Image from "next/image";
import logoImg from "~/assets/images/MLU-full-logo-dark.png"

const Logo = () => (
  // <span className="ml-2 self-center whitespace-nowrap text-2xl font-bold text-gray-90 md:text-xl">
  //   TailNext
  // </span>
<Image
    className="mx-auto w-full bg-transparent"
    src={logoImg}
    width={828}
    height={828}
    alt={'MLU logo'}
    sizes="(max-width: 768px) 100vw, 432px"
    placeholder="blur"
    quality={50}
  />
);

export default Logo;
