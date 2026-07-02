import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconChevronRight,
  IconClock,
  IconComponents,
  IconDownload,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconRocket,
  IconSchool,
  IconTrophy,
  IconWorld
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '../../types';
import heroImg from '~/assets/images/hero.jpg';
import nextJsLogo from '~/assets/images/nextjs-logo.png';
import reactLogo from '~/assets/images/react-logo.png';
import tailwindCssLogo from '~/assets/images/tailwind-css-logo.png';
import typescriptLogo from '~/assets/images/typescript-logo.png';
import cameraBackImg from '~/assets/images/camera-back.jpg';
import gasImg from '~/assets/images/gas.jpg';
import symposiumAudienceImg from '~/assets/images/symposium-audience.jpg';
import mluGroupImg from '~/assets/images/mlu-group.jpg';
import studentPosterImg from '~/assets/images/student-poster.jpg';
import facultyGroupImg from '~/assets/images/faculty-group.jpg';
import headerImg from '~/assets/images/MLU-full-logo-dark.png';

// Hero data on Home page *******************
export const heroHome: HeroProps = {

  title: (
    <>
      AWS-MLU Fall AI/ML Teaching & Research Symposium
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
    title: 'Two Days of Innovation, Collaboration, and Excellence in AI/ML Education',
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

// Features data on Home page *******************
export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
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
export const pricingHome: PricingProps = {
  id: 'pricing-on-home',
  hasBackground: true,
  header: {
    title: 'Participate in the Symposium',
    subtitle:
      'Participation is open to invited students, faculty, educators, academic leaders, and collaborators across the AWS-MLU learning ecosystem.',
    // tagline: 'Pricing',
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
          description: 'engaged in undergraduate or graduate research involving AI/ML',
        },
        {
          description: 'seeking AWS hands-on cloud experience',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Submit Student Abstract',
        href: '/',
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
          description: 'Educators teaching AI/ML courses',
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
        text: 'Submit Facilty Abstract',
        href: '/',
      },
      hasRibbon: false,
    },
    {
      image: {
        src: mluGroupImg,
        alt: 'Group photo of seven MLU employees smiling at camera',
      },
      title: 'Industry Professionals',
      subtitle: 'from Amazon & Amazon Web Services (AWS)',
      items: [
        {
          description: 'team members',
        },
        {
          description: 'AI/ML practitioners seeking academic collaborations',
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
        href: '/',
      },
      hasRibbon: false,
    },
  ],
};

// Content data on Home page *******************
export const contentHomeTwo: ContentProps = {
  id: 'contentOne-on-home-two',
  hasBackground: true,
  content:
    'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nib dissentias, mei exerci tamquam euripidis cu.',
  items: [
    {
      title: 'Per ei quaeque sensibus',
      description:'a;lskd;alkdj'
    },
    {
      title: 'Cu imperdiet posidonium sed',
    },
    {
      title: 'Nulla omittam sadipscing mel ne',
    },
    {
      title: 'Per ei quaeque sensibus',
    },
    {
      title: 'Cu imperdiet posidonium sed',
    },
    {
      title: 'Nulla omittam sadipscing mel ne',
    },
  ],
  image: {
    src: cameraBackImg,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: true,
};

// Steps data on Home page *******************
export const stepsHome: StepsProps = {
  id: 'steps-on-home',
  hasBackground: false,
  isReversed: false,
  isImageDisplayed: true,
  image: {
    src: gasImg,
    alt: 'Steps image',
  },
  header: {
    title: 'Sed ac magna sit amet risus tristique interdum.',
  },
  items: [
    {
      title: 'Step 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
      icon: IconArrowDown,
    },
    {
      title: 'Ready!',
    },
  ],
};

// Testimonials data on Home page *******************
export const testimonialsHome: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: false,
  header: {
    title: 'About the AWS-MLU Collaboration',
    subtitle:
      'This symposium celebrates the ongoing collaboration between Amazon’s Machine Learning University and institutions of higher education, including HBCUs, community colleges, and universities nationwide, fostering innovation, research excellence, and creating pathways for the next generation of AI/ML professionals.',
  },
  testimonials: [
  ],
};

// FAQS data on Home page *******************
export const faqs2Home: FAQsProps = {
  id: 'faqsTwo-on-home',
  hasBackground: false,
  header: {
    title: ' Schedule at a Glance',
    subtitle:
      '2026 AWS-MLU AI TEACHING AND RESEARCH SYMPOSIUM & POSTER SESSION',
    tagline: '',
  },
  items: [
    {
      title: 'Day 1: September 21, 2026',
      description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      title: 'Day 2: September 22, 2026',
      description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
    },
  ],
};

// Team data on Home page *******************
export const teamHome: TeamProps = {
  id: 'team-on-home',
  hasBackground: false,
  header: {
    title: 'Team Members',
    subtitle:
      'Suspendisse in dui nibh. Donec enim leo, sodales et egestas id, malesuada non diam. Sed dapibus velit et mauris condimentum, vel imperdiet erat egestas.',
    // tagline: 'Team',
  },
  teams: [
    {
      name: 'Cindy Belcher',
      occupation: 'SEO Consultant',
      image: {
        src: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Cindy Belcher',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Toby Foster',
      occupation: 'Marketing Tech',
      image: {
        src: 'https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2172&q=80',
        alt: 'Toby Foster',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Clark Bourne',
      occupation: 'Content Manager',
      image: {
        src: 'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Clark Bourne',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Bella Chase',
      occupation: 'UX Designer',
      image: {
        src: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Bella Chase',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};

// Contact data on Home page *******************
export const contactHome: ContactProps = {
  hasBackground: true,
  header: {
    title: 'How to Participate',
    subtitle: '',
    tagline: '',
  },
  content:
    'Participation in the symposium is open to invited students, faculty, educators, academic leaders, and collaborators across the AWS-MLU learning ecosystem.',
  items: [
    {
      title: 'Register Now',
      description: ['1230 Maecenas Street Donec Road', 'New York, EEUU'],
      icon: IconMapPin,
    },
    {
      title: 'Submit Student Abstract',
      description: ['Mobile: +1 (123) 456-7890', 'Mail: tailnext@gmail.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Submit Faculty Abstract',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: IconClock,
    },
    {
      title: 'Questions?',
      description: ['AWS: Margie Vela (velmarg@amazon.com)',],// 'Howard University: add contact'],
      icon: IconClock,
    },
  ],
  form: {
    title: '',
    inputs: [],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// CallToAction data *******************
export const callToAction2Home: CallToActionProps = {
  title: 'Next.js + Tailwind CSS',
  subtitle:
    'Aliquam sodales porttitor lacus ac tristique. Etiam posuere elit at leo feugiat sodales. Sed ac mauris quis sem tempor condimentum non at metus.',
  callToAction: {
    text: 'Get template',
    href: 'https://github.com/onwidget/tailnext',
    icon: IconDownload,
  },
  items: [
    {
      title: 'Get template',
      description: 'Aliquam sodales est lectus, quis.',
      href: 'https://github.com/onwidget/tailnext',
    },
    {
      title: 'Learn more',
      description: 'Class aptent taciti sociosqu ad litora torquent per conubia.',
      href: '/',
    },
    {
      title: 'Subscribe',
      description: 'Morbi orci nunc, euismod ac dui id, convallis.',
      form: {
        icon: IconMail,
        input: {
          type: 'email',
          name: 'email',
          autocomplete: 'email',
          placeholder: 'Enter your email address',
        },
        btn: {
          title: 'Subscribe',
          type: 'submit',
        },
      },
    },
  ],
};


// SocialProof data on Home page *******************
export const socialProofHome: SocialProofProps = {
  id: 'socialProof-on-home',
  hasBackground: false,
  images: [
    {
      link: 'https://nextjs.org/',
      src: nextJsLogo,
      alt: 'NextJs Logo',
    },
    {
      link: 'https://react.dev/',
      src: reactLogo,
      alt: 'React Logo',
    },
    {
      link: 'https://tailwindcss.com/',
      src: tailwindCssLogo,
      alt: 'Tailwind CSS Logo',
    },
    {
      link: 'https://www.typescriptlang.org/',
      src: typescriptLogo,
      alt: 'Typescript Logo',
    },
  ],
};