import {
  IconChevronRight,
  IconMapPin,
  IconSchool,
  IconTrophy,
  IconWorld
} from '@tabler/icons-react';
import {
  ContentProps,
  FeaturesProps,
  HeroProps,
  PricingProps,
  TabScheduleProps,
} from '../../types';
import heroImg from '~/assets/images/hero.jpg';
import symposiumAudienceImg from '~/assets/images/symposium-audience.jpg';
import mluHomeImg from '~/assets/images/mlu-home-img.jpg';
import studentPosterImg from '~/assets/images/student-poster.jpg';
import facultyGroupImg from '~/assets/images/faculty-home-img.jpg';
import {symposiumRegistrationLink } from '../global.data';
import Day1StudentTrack from '~/components/widgets/Day1StudentTrack';
import Day1FacultyTrack from '~/components/widgets/Day1FacultyTrack';
import Day1TechTrack from '~/components/widgets/Day1TechTrack';
import Day1ExecutiveTrack from '~/components/widgets/Day1ExecutiveTrack';

// Hero data on Home page *******************
export const heroHome: HeroProps = {

  title: (
    <>
      AWS-MLU Fall AI Teaching & Research Symposium
    </>
  ),
  subtitle: (
    <>
      <>September 21 – 22, 2026<br/>Hosted by Howard University</> 
    </>
  ),
  callToAction: {
    text: 'Register Now',
    href: 'https://app.brazenconnect.com/a/asp-sdengineering/e/9bRrV',
    targetBlank: true,
  },
  image: {
    src: heroImg,
    alt: 'Hero TailNext',
  },
};

// Content data on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  header: {
    title: 'Two Days of Innovation, Collaboration, and Excellence in AI Education',
    subtitle: '',
  },
  content:
    'The AWS-MLU AI Teaching & Research Symposium brings together leading educators, researchers, and industry professionals for an extraordinary two-day event celebrating the collaboration between Amazon’s Machine Learning University and Historically Black Colleges and Universities, community colleges, and universities nationwide.',
  items: [
    {
      title: 'September 21–22, 2026',
      description:'',
      icon: IconChevronRight
    },
    {
      title: 'Howard University, Washington, D.C. (Sept 21) & Arlington, VA (Sept 22)',
      description:'',
      icon: IconChevronRight
    },
    {
      title: 'AI Education and Innovation Focus',
      description:'',
      icon: IconChevronRight
    },
  ],
  image: {
    src: symposiumAudienceImg,
    alt: 'Photo of audience seated at tables in rows, listening to speaker.',
  },
  isReversed: false,
  isAfterContent: false,
};

export const scheduleDayOneHome: TabScheduleProps = {
  id: 'faqsFour-on-faqs',
  hasBackground: false,
  header: {
    title: 'Day 1: September 21, 2026',
    subtitle: 
        <> 
          Howard University | Armour J. Blackburn Center <br /> 
          2397 6th St NW, Washington, DC 20059 <br /> 
          Distinguished Hosts: Jamila Hashil & Joe Briggs
        </>,
        
    position: 'center',
  },
  tabs: [
    {
      link: {
        label: 'Students',
        href: '/tab1',
      },
      schedule: <Day1StudentTrack/>
    },
    {
      link: {
        label: 'Faculty',
        href: '/tab2',
      },
      schedule: <Day1FacultyTrack/>
    },
    {
      link: {
        label: 'Tech Leads',
        href: '/tab3',
      },
      schedule: <Day1TechTrack/>
    },
    {
      link: {
        label: 'Executives',
        href: '/tab4',
      },
      schedule: <Day1ExecutiveTrack/>
    },
  ],
};

export const scheduleDayTwoHome = {
  hasBackground: false,
  header: {
    title: 'Day 2: September 22, 2026',
    subtitle: 
        <> 
          Amazon Headquarters-2 <br /> 
          1770 Crystal Drive, Arlington, VA 22202 <br /> 
          Distinguished Host: TBD
        </>,
  },
};

// Features data on Home page *******************
export const KeyExperiencesHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: true,
  columns: 2,
  header: {
    title: (
      <>
        Key Experiences
      </>
    ),
    subtitle:
      "",
    tagline: '',
  },
  items: [
    {
      title: 'Student & Faculty Research Showcase',
      description:
        'Explore innovative research through our poster session during Tuesday’s Amazon Immersion Day, highlighting the impact of AWS-MLU faculty on teaching and research excellence across HBCUs, community colleges, and universities nationwide.',
      icon: IconSchool,
    },
    {
      title: 'Exclusive Amazon Tours',
      description: ['Choose from multiple tour options showcasing Amazon Headquarters in Arlington:',' - Amazon Web Services AI Experience','  - Amazon Web Services Skills Center','  - Amazon Headquarters 2',],
      icon: IconMapPin,
    },
    {
      title: 'AWS-MLU Faculty Fellows Recognition Ceremony',
      description:
        'Join us for a special ceremony honoring outstanding AWS-MLU Faculty Fellows contributions to AI education.',
      icon: IconTrophy,
    },
    {
      title: 'Build Amazon Campus Collaborations:',
      description: ['- Amazon Web Services Builder Centers','- Amazon Career Choice',],
      icon: IconWorld,
    },
  ],
};

// Pricing data on Home page *******************
export const tracksInfoHome: PricingProps = {
  id: 'pricing-on-home',
  hasBackground: false,
  header: {
    title: 'Participate in the Symposium',
    subtitle:
      'Participation is open to invited students, faculty, educators, academic leaders, and collaborators across the AWS-MLU learning ecosystem.',
  },
  prices: [
    {
      image: {
        src: studentPosterImg,
        alt: 'Photo of student poster presenter',
      },
      title: 'Students',
      subtitle: 'from HBCUs, Community Colleges & Other Higher Education Institutions',
      items: [
        {
          description: 'pursuing degrees in AI, machine learning, data science, and computer science',
        },
        {
          description: 'in non-technical disciplines exploring AI applications in their fields (business, healthcare, education, social sciences, STEM)',
        },
        {
          description: 'interested in careers at Amazon and AWS',
        },
        {
          description: 'engaged in undergraduate or graduate research involving AI',
        },
        {
          description: 'seeking AWS hands-on cloud experience',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Submit a Student Abstract',
        href: '/students',
      },
      hasRibbon: false,
    },
    {
      image: {
        src: facultyGroupImg,
        alt: 'Photo of four faculty members standing side-by-side',
      },
      title: 'Faculty & Administrators',
      subtitle: 'from HBCUs, Community Colleges & Other Higher Education Institutions',
      items: [
        {
          description: 'AWS-MLU Educators Consortium and Transformation Alliance Members',
        },
        {
          description: 'Educators teaching AI courses',
        },
        {
          description: 'Academic leaders focused on technology innovation',
        },
        {
          description: 'Researchers in artificial intelligence and machine learning',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Submit a Faculty Abstract',
        href: '/faculty',
      },
      hasRibbon: false,
    },
    {
      image: {
        src: mluHomeImg,
        alt: 'Group photo of seven MLU employees smiling at camera',
      },
      title: 'Industry Professionals',
      subtitle: 'from Amazon & Amazon Web Services (AWS)',
      items: [
        {
          description: 'team members',
        },
        {
          description: 'AI practitioners seeking academic collaborations',
        },
        {
          description: 'technology leaders committed to inclusive innovation',
        },
        {
          description: 'Distinguished Scientists',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Register Now',
        href: symposiumRegistrationLink,
      },
      hasRibbon: false,
    },
  ],
}