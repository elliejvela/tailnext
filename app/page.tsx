import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import Features from '~/components/widgets/Features';
import Content from '~/components/widgets/Content';
import Pricing from '~/components/widgets/Pricing';
import ScheduleAtAGlance1 from '~/components/widgets/ScheduleAtAGlance1';
import {
  contentHomeOne,
  scheduleDayOneHome,
  KeyExperiencesHome,
  heroHome,
  tracksInfoHome,
  scheduleDayTwoHome,
} from '~/shared/data/pages/home.data';
import WidgetWrapper from '~/components/common/WidgetWrapper';
import Headline from '~/components/common/Headline';
import Day2Schedule from '~/components/widgets/Day2Schedule';
import ProfileBio from '~/components/common/ProfileBio';

import velaHeadshot from "~/assets/images/headshot-vela.jpg"

export const metadata: Metadata = {
  title: SITE.title,
};

const heroQuoteHome = {
    headline:{
    header: {
      title: "A Word from the Organizer",
    },
    titleClass: "text-5xl font-heading",
    },
    profile:{
      name: "Dr. Margie Vela", 
      title: "Lead for Strategic Academic Initiatives", 
      organization: "Machine Learning University, Amazon Web Services", 
      bio:  "\"When we bring together the brilliance of HBCUs, community colleges, and industry, we don't just teach AI — we shape who gets to build the future.\"", 
      profileImg: {
                src: velaHeadshot,
                alt: "Headshot of woman in professinal attire"
            },
    bioClass: "text-4xl italic",
    bioFirst: true
    }
  }

export default function Page() {
  return (
    <>
      <Hero {...heroHome} />
      {/* Quote from the Organizer */}
      <WidgetWrapper>
        <Headline {...heroQuoteHome.headline}/>
        <ProfileBio {...heroQuoteHome.profile}/>
      </WidgetWrapper>
      
      <Content {...contentHomeOne} />

      {/* Conference Schedule At a Glance */}
      <h2 className='pt-12 md:pt-24 text-4xl md:text-5xl text-center text-[#1F0024] font-heading font-bold tracking-tight'>Schedule At A Glance</h2>
      <ScheduleAtAGlance1 {...scheduleDayOneHome}/>
      <WidgetWrapper hasBackground={scheduleDayTwoHome.hasBackground}>
        <Headline header = {scheduleDayTwoHome.header} titleClass="text-3xl sm:text-4xl text-[#1F0024]"/>
        <Day2Schedule/>
         <p className='text-lg md:text-xl text-center text-[#1F0024] font-light mb-4 tracking-tight'>schedule subject to change</p>
      </WidgetWrapper>

      <Features {...KeyExperiencesHome} />
      <Pricing {...tracksInfoHome} />
    </>
  );
}
