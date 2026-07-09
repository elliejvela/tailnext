import Image from 'next/image';
import awsBrandImg from '~/assets/images/aws-logo.png'

const Footer3 = () => {
  // const { links, columns, socials, footNote } = footerData2;

  return (
    <div className='w-full'>
      <div className="mx-auto max-w-7xl p-4 sm:px-6">
        <div className="flex flex-col-reverse sm:flex-row gap-4">
          <div className="flex">
              <div className="bg-[#1F0024] p-4 rounded-xl w-max">
              <Image
                className=""
                src={awsBrandImg}
                width={100}
                height={100}
                alt={'AWS logo'}
                sizes="(max-width: 768px) 100vw, 432px"
                placeholder="blur"
                quality={50}
              />
            </div>
          </div>
          <div className="flex text-[#1F0024]">
            This symposium celebrates the ongoing collaboration between Amazon&apos;s Machine Learning University and institutions of higher education, including HBCUs, community colleges, and universities nationwide, fostering innovation, research excellence, and creating pathways for the next generation of AI/ML professionals.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer3;
