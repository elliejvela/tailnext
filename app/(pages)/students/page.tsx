import { Metadata } from 'next';

import ContentVerbose from '~/components/widgets/ContentVerbose';
import Hero from '~/components/widgets/Hero';
import WidgetWrapper from '~/components/common/WidgetWrapper';

import {
  content2StudentAbstracts,
  content3StudentAbstracts,
  contentStudentAbstracts,
  heroStudentAbstracts,
  keyInfoStudentAbstracts
} from '~/shared/data/pages/studentAbstracts.data';
import { keyInfoProps } from '~/shared/types';

export const metadata: Metadata = {
  title: 'students',
};


const Page = () => {
  const {
    items,
    link
  }: keyInfoProps = keyInfoStudentAbstracts;
  return (
    <>
      <Hero {...heroStudentAbstracts} />
      <WidgetWrapper hasBackground={false} containerClass='py-0 md:py-0 lg:py-0 pb-12 md:pb-16 lg:pb-20'>
          {items && <div className='mb-4 lg:mb-8 text-2xl text-[#1F0024]/80'>{
            items.map(({title, description}, index) => (
             <div key={`key-info-verbose-${index}`} className="flex flex-col gap-1 md:flex-row md:my-1">
              <p className="font-bold">{title}</p> 
              <p className="">{description}</p>
             </div>
            ))
          }</div>}
          {link && <a className='mb-4 lg:mb-8 text-2xl text-[#1F0024]/80 underline' href={link.url}>{link.text}</a>}
      </WidgetWrapper>
      <ContentVerbose {...contentStudentAbstracts} />
      <ContentVerbose {...content2StudentAbstracts}/>
      <ContentVerbose {...content3StudentAbstracts}/>
    </>
  );
};

export default Page;
