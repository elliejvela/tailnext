import {
  ContentVerboseProps,
  HeroProps,
  keyInfoProps,
} from '~/shared/types';

import heroImg from '~/assets/images/faculty-poster-hero.jpg';
import facultyPosterImg from '~/assets/images/faculty-poster-2.jpg'
import {facultyAbstractSubmissionLink} from "~/shared/data/global.data"

// Hero data on Services page *******************
export const heroStudentAbstracts: HeroProps = {
  title: 'Share Your Innovation. Inspire Your Peers. Shape the Future.',
  subtitle:
    'Submit your abstract to the AWS Machine Learning University (AWS-MLU) Fall Symposium',
  callToAction: {
    text: 'Submit a Faculty Abstract',
    href: facultyAbstractSubmissionLink,
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
}

export const contentFacultyAbstracts: ContentVerboseProps = {
  id: 'contentOne-on-student-abstracts',
  hasBackground: true,
  header:{
    title: 'Understand Deeply. Think Critically. Build Intelligently.',
    subtitle: "We look forward to celebrating the creativity, scholarship, and novelty of faculty who are reimagining education through artificial intelligence."
  },
  content: [
    <p key="faculty-content-bold" className='mb-4 lg:mb-8 text-2xl font-bold text-[#1F0024]/80'>Only 50 faculty posters will be accepted. We encourage early submission.</p>,
    'The AWS Machine Learning University (AWS-MLU) Fall Symposium invites faculty from all academic disciplines to submit abstracts for our Faculty Poster Session. ',
    'This session will highlight innovative teaching, research, curriculum development, workforce initiatives, and interdisciplinary collaborations that demonstrate how artificial intelligence and emerging technologies are transforming higher education. Whether your work is in engineering, business, education, healthcare, agriculture, the humanities, social sciences, or the arts, we encourage you to showcase ideas that advance student learning and prepare the next generation of innovators.',
  ],
  isReversed: false,
  isAfterContent: false,
};

export const content2FacultyAbstracts: ContentVerboseProps = {
  id: 'contentOne-on-student-abstracts',
  hasBackground: false,
  content: [
    <p key="faculty-content-bold-2" className='font-bold text-2xl'>Faculty presenters will have the opportunity to:</p>
  ],
    items:[
      {
        title: "Showcase innovative scholarship and educational practices",
        description:""
      },
      {
        title: "Exchange ideas with colleagues from institutions across the country",
        description:""
      },
      {
        title: "Build new interdisciplinary collaborations",
        description:""
      },
      {
        title: "Contribute to a growing national community advancing AI education",
        description:""
      },
      {
        title: "Inspire the next generation of faculty innovators",
        description:""
      },
    ],
    image:{
      src:facultyPosterImg,
      alt:'a faculty poster presenter'
    },
  isReversed: false,
  isAfterContent: false,
};


export const content2StudentAbstracts: ContentVerboseProps = {
  id: 'contentTwo-on-student-abstracts',
  hasBackground: true,
  header:{
    title: 'Suggested Topics',
    subtitle: "Submissions may include, but are not limited to:"
  },
  items: [
    {
      title: 'AI in Teaching, Learning & Workforce Development',
      description:
        'Generative AI in teaching and learning; curriculum innovation and instructional design; student workforce preparation and career readiness; faculty professional development and institutional transformation'
    },
    {
      title: 'AI-Enabled Research & Applications',
      description:
        'AI-enabled research across disciplines; data science and machine learning applications; cybersecurity and AI; healthcare, agriculture, sustainability, and smart technologies; interdisciplinary AI projects',
    },
    {
      title: 'Responsible AI & Strategic Partnerships',
      description:
        'Responsible and ethical AI; industry-academic partnerships',
    },
  ], 
  isReversed: false,
  isAfterContent: false,
};

export const content3StudentAbstracts: ContentVerboseProps = {
  id: 'contentThree-on-student-abstracts',
  hasBackground: false,
  header:{
    title: 'Abstract Guidelines',
    subtitle: "Celebrating the next generation of innovators who are ready to understand deeply, think critically, and build intelligently."
  },
  content: [
    <p key="faculty-content-bold-2" className='font-bold text-2xl'>Maximum 300 words. Include:</p>
  ],
  items:[
    {
      title:"Title",
      description:""
    },
    {
      title:"Author(s) and institution",
      description:""
    },
    {
      title:"Background or purpose",
      description:""
    },
    {
      title:"Methods or approach",
      description:""
    },
    {
      title:"Results or anticipated outcomes",
      description:""
    },
    {
      title:"Significance to higher education",
      description:""
    },
  ],
  isReversed: false,
  isAfterContent: false,
};

export const content4facultyAbstracts: ContentVerboseProps = {
  id: 'contentThree-on-student-abstracts',
  hasBackground: true,
  header:{
    title: 'Review Criteria',
  },
  content: [
    "Abstracts will be evaluated using the following criteria:"
  ],
  items:[
    {
      title:"Novelty",
      description:"Does the work introduce original ideas, creative approaches, or innovative applications of AI or emerging technologies?"
    },
    {
      title:"Impact",
      description:"What is the potential to improve teaching, research, student success, or institutional transformation?"
    },
    {
      title:"Relevance",
      description:"Does the work align with the mission of advancing AI education and workforce development?"
    },
    {
      title:"Quality",
      description:"Is the project clearly described with well-supported outcomes or a thoughtful implementation plan?"
    },
    {
      title:"Transferability",
      description:"Can other educators or institutions adapt or replicate the work?"
    },
  ],
  isReversed: false,
  isAfterContent: false,
};



