import Image from "next/image";
import logoImg from "~/assets/images/MLU-full-logo-dark.svg"
const blurImgUrl = "~/assets/images/MLU-full-logo-dark.png"

const Logo = () => (
<Image
    className="mx-auto w-1/2 bg-transparent"
    src={logoImg}
    width={800}
    height={800}
    alt={'MLU logo'}
    sizes="(max-width: 800px) 100vw, 432px"
    placeholder="blur"
    blurDataURL={blurImgUrl}
    quality={50}
  />
);

export default Logo;
