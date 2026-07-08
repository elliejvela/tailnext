import {
  IconArrowsRightLeft,
  IconBrandTailwind,
  IconBulb,
  IconChevronsRight,
  IconComponents,
  IconListCheck,
  IconRocket,
} from '@tabler/icons-react';

import {
  ContentVerboseProps,
  HeroProps,
  keyInfoProps,
} from '~/shared/types';

import heroImg from '~/assets/images/student-poster-hero.jpg';
import {studentAbstractSubmissionLink} from "~/shared/data/global.data"

// Hero data on Services page *******************
export const heroStudentAbstracts: HeroProps = {
  title: 'Showcase Your Innovation. Build Your Portfolio. Launch Your Career.',
  subtitle:
    'Submit your abstract to the AWS Machine Learning University (AWS-MLU) Fall Symposium',
  callToAction: {
    text: 'Submit a Student Abstract',
    href: studentAbstractSubmissionLink,
    targetBlank: true,
  },
  image: {
    src: heroImg,
    alt: 'Hero TailNext',
  },
};

export const keyInfoStudentAbstracts: keyInfoProps = {
  items: [
    {
      title: "Submission Deadline:",
      description: "July 31, 2026"
    },
    {
      title: "Symposium Date:",
      description: "September 22, 2026"
    },
    {
      title: "Notification of Acceptance:",
      description: "August 14, 2026"
    },
    {
      title: "Location:",
      description: "Amazon Web Services, WAS16, 1770 Crystal Drive, Arlington, VA 22202"
    },
    {
      title: "Available Poster Slots:",
      description: "50"
    }
  ],
  link: {
    text: "View last year's digital posters.",
    url: "https://awsmachinelearninguniversity.virtualpostersession.org/"
  }
}

export const contentStudentAbstracts: ContentVerboseProps = {
  id: 'contentOne-on-student-abstracts',
  hasBackground: true,
  header:{
    title: 'We Prepare Students to Understand Deeply, Think Critically, and Build Intelligently.',

  },
  content: [
    'The AWS Machine Learning University (AWS-MLU) invites undergraduate and graduate students from all disciplines to submit abstracts for the 2026 AWS-MLU Fall Symposium Student Poster Session. This poster session celebrates students who are applying artificial intelligence, machine learning, data science, cloud computing, and emerging technologies to solve real-world challenges.',
    'Whether your interests are in computer science, engineering, business, healthcare, agriculture, education, cybersecurity, environmental science, mathematics, social sciences, or the arts, we encourage you to share your work. The AWS-MLU Fall Symposium is an opportunity to demonstrate your technical skills, communicate your ideas, and build a professional portfolio aligned with careers in AI and cloud technologies.',
    ],
  isReversed: false,
  isAfterContent: false,
};


export const content2StudentAbstracts: ContentVerboseProps = {
  id: 'contentTwo-on-student-abstracts',
  hasBackground: false,
  header:{
    title: 'Poster Topics',
    subtitle: "Students are encouraged to submit projects aligned with areas that reflect the future of technology and the types of work found across Amazon and AWS internship opportunities, including:"
  },
  items: [
    {
      title: 'Generative & Agentic AI Systems',
      description:
        'Covers generative AI, large language models, agentic AI, intelligent systems, natural language processing, computer vision, and robotics/autonomous systems.'
    },
    {
      title: 'Applied AI & Cloud-Enabled Solutions',
      description:
        'Covers applied machine learning, cloud computing and scalable applications, data analytics/engineering, smart manufacturing/IoT, digital twins, business intelligence, and software engineering/application development.',
    },
    {
      title: 'Responsible AI for Real-World Impact',
      description:
        'Covers responsible/ethical AI, AI for healthcare, sustainability/climate, cybersecurity, agriculture, educational technologies, human-computer interaction, and interdisciplinary AI solutions addressing real-world challenges.',
    },
  ], 
  isReversed: false,
  isAfterContent: false,
};

export const content3StudentAbstracts: ContentVerboseProps = {
  id: 'contentThree-on-student-abstracts',
  hasBackground: true,
  header:{
    title: 'Student Poster Session',
    subtitle: "Celebrating the next generation of innovators who are ready to understand deeply, think critically, and build intelligently."
  },
  content: [
    <p key="content3-bold" className="font-bold">Only 50 posters will be accepted for presentation.</p>,
    "Accepted students will present their work to faculty, industry professionals, AWS leaders, and peers during the symposium. This is an opportunity to receive feedback, expand your professional network, and demonstrate the knowledge and skills that prepare you for internships and careers in the rapidly evolving technology landscape.",
    "We encourage students at every stage of their academic journey to apply. Whether your project is the result of a class assignment, undergraduate research, capstone project, independent study, hackathon, or personal innovation, we want to see how you are using technology to create meaningful impact."
  ],
  isReversed: false,
  isAfterContent: false,
};
