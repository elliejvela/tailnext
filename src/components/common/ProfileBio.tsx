import { twMerge } from 'tailwind-merge';
import Image from "next/image"

import { ProfileBioProps } from '~/shared/types';
import placeHolderProfileImg from "~/assets/images/placeholerProfileImg.svg"
const placeholderAltText = "profile image placeholder"

const ProfileBio = ({ name, title, organization, bio, profileImg, nameClass, titleClass, orgClass, bioClass, bioFirst = false }: ProfileBioProps) => {
  const profilePlaceholder = <div className="flex justify-center content-start w-full lg:w-1/2">
    <Image
      className="w-40 h-40"
      src={placeHolderProfileImg}
      alt={placeholderAltText}
      quality={50}
    />
  </div>
  return (
    <div className="flex flex-col lg:content-start lg:flex-row gap-2 px-2 w-full text-[#1F0024]">
      <div className="flex w-full justify-center lg:w-1/2">
        {profileImg ? 
        <Image
          className="flex w-max rounded-full aspect-square object-cover"
          src={profileImg.src}
          width={250}
          height={250}
          alt={profileImg.alt}
          quality={50}
        />
        : profilePlaceholder}
      </div>
      <div className={`flex w-full content-stretch px-2 gap-5 ${bioFirst ? 'flex-col-reverse justify-end' : 'flex-col'}`}>
        <div className="flex flex-col text-center lg:text-start">
          <div className={twMerge(``, nameClass)}>
            <h2 className="text-5xl">{name}</h2>
          </div>
          {title && <div className={twMerge(`text-2xl`, titleClass)}>
            <p className="">{title}</p>
          </div>}
          {organization && <div className={twMerge(`text-[#1F0024]/60`, orgClass)}>
            <p className="">{organization}</p>
          </div>}
        </div>
        {bio && <div className={twMerge(`flex`, bioClass)}>
          <p className="">{bio}</p>
        </div>}
      </div>
    </div>
  );
};

export default ProfileBio;
