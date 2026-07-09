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


export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Hero {...heroHome} />
      <Content {...contentHomeOne} />

      <h2 className='pt-12 md:pt-24 text-4xl md:text-5xl text-center text-[#1F0024] font-heading mb-4 font-bold tracking-tight'>Schedule At A Glance</h2>
      <ScheduleAtAGlance1 {...scheduleDayOneHome}/>
      <WidgetWrapper hasBackground={scheduleDayTwoHome.hasBackground}>
        <Headline header = {scheduleDayTwoHome.header} titleClass="text-3xl sm:text-4xl text-[#1F0024]"/>
        <Day2Schedule/>
      </WidgetWrapper>

      <Features {...KeyExperiencesHome} />
      <Pricing {...tracksInfoHome} />
    </>
  );
}
