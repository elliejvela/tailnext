import {
  HeroProps,
  speakerInfoProps,
} from '~/shared/types';

import heroImg from '~/assets/images/student-poster-hero.jpg';
import {studentAbstractSubmissionLink} from "~/shared/data/global.data"

import velaHeadshot from "~/assets/images/headshot-vela.jpg"
import sudorImg from "~/assets/images/speakers/sudor.jpg"
import hoggardImg from "~/assets/images/speakers/hoggard.jpeg"
import hashilImg from "~/assets/images/speakers/hashil.jpg"
import briggsImg from "~/assets/images/speakers/briggs.jpg"
import johnsonImg from "~/assets/images/speakers/johnson.jpg"
import widellImg from "~/assets/images/speakers/widell.png"
import andrewsImg from "~/assets/images/speakers/andrews.png"
import spivaWatsonImg from "~/assets/images/speakers/spiva-watson.png"
import bagleyImg from "~/assets/images/speakers/bagley.png"
import dingImg from "~/assets/images/speakers/ding.png"
import chandlerImg from "~/assets/images/speakers/chandler.png"
import maysImg from "~/assets/images/speakers/mays.png"
import atkinsImg from "~/assets/images/speakers/atkins.png"
import aryalImg from "~/assets/images/speakers/aryal.png"
import andyImg from "~/assets/images/speakers/andy.png"
import sadacharamImg from "~/assets/images/speakers/sadacharam.png"
import spiveyImg from "~/assets/images/speakers/spivey.png"
import robinsonImg from "~/assets/images/speakers/robinson.png"
import walkerImg from "~/assets/images/speakers/walker.png"
import gomolkaImg from "~/assets/images/speakers/gomolka.png"
import udegbueImg from "~/assets/images/speakers/udegbue.png"

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

export const speakerInfo: speakerInfoProps = {
  items: [
    {
      name: "Jamila Hashil",
      title: "Distinguished Host",
      bio: (
        <div className="space-y-4">
          <p>Jamila Hashil is a Senior Tech Business Development Manager for the Support Organization at Amazon Web Services (AWS), bringing over 18 years of experience in customer and partner cloud innovation and education. She holds both the AWS AI Practitioner and AWS Cloud Practitioner certifications, underscoring her technical expertise in cloud computing and artificial intelligence.</p>
          <p>After graduating from Rutgers University, Jamila’s international career began with the Japanese Exchange Teaching (JET) Program, where she taught English to junior high school students in Fukui, Japan. This experience not only refined her teaching abilities but also added Japanese to her multilingual skillset, which includes Kiswahili and Arabic.</p>
          <p>Her pivotal role in educational technology emerged during her tenure as an Engagement Manager at Microsoft in Qatar, where she spearheaded the nation’s transition to e-learning. This comprehensive initiative involved managing operating system upgrades and training both educators and students in STEM-focused technology integration. The success of this program caught the attention of Jordan’s Minister of Education and Queen Rania, leading to a special invitation to present the e-learning initiative for potential implementation in Jordan.</p>
          <p>Recognizing her exceptional work in educational technology, the VP of HP Education recruited Jamila to lead HP’s education portfolio in the Middle East from their Dubai office. Over nine years, she successfully expanded HP’s educational footprint across the GCC region before returning to the United States to join AWS.</p>
          <p>Currently, Jamila serves as the Vice President of BEN Women Global and sits on the board of The Musicianship, a DC metropolitan area nonprofit dedicated to empowering youth and emerging musicians from historically marginalized communities through music programs and funding opportunities.</p>
          <p>Throughout her career, Jamila has demonstrated a consistent commitment to education, technology integration, and community empowerment.</p>
        </div>
      ),
      profileImg: {
        src: hashilImg,
        alt: "A professional headshot"
      }
    },
    {
      name: "Joe Briggs, Esq.",
      title: "Distinguished Host",
      bio: (
        <div className="space-y-4">
          <p>Joe Briggs is a seasoned professional with over 20 years of experience in public policy, education, and advocacy. He is an accomplished sports lawyer, justice, equity, diversity, and inclusion expert, and professor.</p>
          <p>Briggs earned his undergraduate degree as a scholarship athlete at Texas Christian University, where he joined Omega Psi Phi Fraternity. He later obtained a Master&aposs Degree from Florida A&M University and a law degree with honors from FSU College of Law.</p>
          <p>Currently, Briggs serves as the global head of executive engagement and initiatives at Amazon, overseeing key programs across the enterprise. His career prior to Amazon includes roles as Special Assistant to the President at Florida A&M University and a legal fellow in the United States Senate. Immediately before joining Amazon, Briggs worked at the NFL Players Association, leading their government relations efforts and serving in a litigation role as senior counsel.</p>
          <p>Briggs continues to share his expertise as a professor at both Georgetown and the University of Kansas and as a global subject matter expert on sports and ethics topics. His diverse background in law, sports, education, and corporate leadership has established him as a multifaceted professional with a unique perspective on policy, advocacy, and business development.</p>
        </div>
      ),
      profileImg: {
        src: briggsImg,
        alt: "A professional headshot"
      }
    },
    {
      name: "Jerome Johnson II",
      title: "Welcome Remarks",
      bio: (
        <div className="space-y-4">
          <p>Jerome Johnson II is a technology executive and AI strategist serving as Director of Professional Services for U.S. Federal, Defense, and Aerospace at Amazon Web Services (AWS). In this role, he leads a large-scale services organization focused on helping government and national security customers translate strategy into measurable mission outcomes through cloud, artificial intelligence, and emerging technologies.</p>
          <p>With over 20 years of experience across federal consulting and enterprise technology, Jerome drives the responsible adoption of generative and agentic AI at scale across the Intelligence Community, Department of Defense, and civilian agencies. His leadership centers on operational rigor, AI-enabled solution development, and bridging cutting-edge innovation with real-world implementation in high-stakes environments.</p>
          <p>Jerome was recognized as an AFROTECH 2025 Future 50 Corporate Catalyst for his leadership in advancing AI technologies and shaping enterprise AI adoption. A respected thought leader in the national defense community, he regularly speaks at industry conferences and strategic forums on responsible AI, autonomous systems, and the future of AI-powered cybersecurity, including featured expert interviews and keynote presentations at the AWS National Security Conference.</p>
          <p>Jerome serves as Executive Sponsor for Amazon’s Machine Learning University (MLU) Educators Consortium, leading strategic partnerships connecting ML education with Historically Black Colleges and Universities. He is currently pursuing a Master of Science in Artificial Intelligence Management at Georgetown University (expected Spring 2027), complementing executive education from the Wharton Chief Technology Officer Program, MIT Quantum Computing Certifications, and the McKinsey Black Executive Leadership Program. He holds an MBA in International Business & IT Management from Virginia Tech and dual Bachelor of Science degrees in Computer Science and Mathematics from Charleston Southern University.</p>
        </div>
      ),
      profileImg: {
        src: johnsonImg,
        alt: "A professional headshot"
      }
    },
    {
      name: "Dr. Saurav Keshari Aryal",
      title: "Senior Research Scientist, Howard University’s Institute for Human-Centered Artificial Intelligence",
      bio: "Dr. Saurav Keshari Aryal is a Senior Research Scientist at Howard University’s Institute for Human-Centered Artificial Intelligence, where he is affiliated with the Department of Electrical Engineering and Computer Science and directs the Artificial Intelligence for Positive Change (AI4PC) Lab. He earned both his B.S. in Systems and Computer Science and his Ph.D. in Computer Science from Howard University. His research advances applied artificial intelligence across a broad range of interdisciplinary domains, including affective computing, physiological signal processing, multilingual natural language understanding, trustworthy machine learning, and research cyberinfrastructure. Building on these foundations, his current work explores humanoid systems and physical AI, with a focus on how embodied agents perceive, reason, learn, and act reliably in dynamic real-world environment.",
      profileImg: {
        src: aryalImg,
        alt: "A professional headshot"
      }
    },
    {
      name: "Dr. Anietie Andy",
      title: "Assistant Professor, Department of Electrical Engineering and Computer Science at Howard University",
      bio: "Dr. Anietie Andy is an Assistant Professor in the Department of Electrical Engineering and Computer Science at Howard University. His research focuses on the intersection of natural language processing (NLP), machine learning, medicine, healthcare, and public health. His work involves developing advanced NLP and machine learning algorithms to: (a) predict patients’ risk for various health conditions using data from electronic health records, social media, and integrated multimodal data sources; and (b) gain insights into how individuals communicate about health and well-being on social media, including the social support needs they express through these platforms.",
      profileImg:{
        src: andyImg,
        alt: "A professional headshot"
      }
    },
    {
      name: "Dr. Margie Vela",
      title: "Opening Remarks",
      bio: (
        <div className="space-y-4">
          <p>Dr. Margie Vela serves as Head of Strategic Academic Initiatives for Machine Learning University at Amazon Web Services, where she transforms AI and machine learning education across universities nationwide. She builds strategic partnerships that bring together teaching and research faculty from community colleges, HBCUs, and R1 research institutions — creating a collaborative community advancing AI teaching and innovation across higher education.</p>
          <p>Beyond academia, Dr. Vela designs global technology programs that break down barriers and unlock opportunities for individuals entering and advancing in tech — ensuring equitable access to advanced learning across diverse communities.</p>
          <p>Dr. Vela is a NIFA Fellow with a PhD in Water Science and Management from New Mexico State University, an MBA, and a BS in Marketing. She bridges technical expertise with business acumen, advancing innovation through talent development and empowering student innovators to drive the next generation of technology breakthroughs from classroom to industry.</p>
        </div>
      ),
      profileImg:{
        src: velaHeadshot,
        alt: "A person in professional attire"
      }
    },
    {
      name: "Thansha Sadacharam",
      bio:(
        <div className="space-y-4">
          <p>Thansha Sadacharam is a Senior Manager, Software Learning at Amazon, where she leads the Amazon Software Learning Experience team within Software Builder Experience. Her team&apos;s mission is to ensure builders onboard, learn skills to fuel innovation, and share their knowledge with others at Amazon.</p>
          <p>Thansha has spent more than a decade at the intersection of people, learning, and technology. She began her career in talent and culture roles in Toronto before finding her calling in developer education, building the technical learning function at Peloton, and supporting research and development teams learn and grow at Shopify. Today at Amazon, she focuses on ensuring engineers have the knowledge they need to deliver value to their customers, bringing them trusted information the moment they need it, and building the tools and training that let them do their best work.</p>
          <p>A graduate of Wilfrid Laurier University with an Honours B.A. in Political Science, she&apos;s passionate about how AI is reshaping who gets to build software and what&apos;s possible for the next generation of builders.</p>
        </div>
      ),
      profileImg:{
        src: sadacharamImg,
        alt: "A professinal headshot"
      }
    },
    {
      name: "Gerard Spivey",
      title: "Principal System Dev Engineer (Howard Alum)",
      bio: (
        <div className="space-y-4">
          <p>Gerard Spivey is a Principal Engineer at Amazon Web Services with 14 years of experience designing, building, and operating distributed systems and infrastructure platforms. He is a founding engineer of AWS Mission Networking, a suite of managed connectivity services that enable customers to securely connect to AWS from anywhere. Before AWS, Gerard was Chief Engineer at BluVector, an AI-powered network detection and response cybersecurity company, where he helped scale the company from 10 people pre-revenue to eight-figure revenue and private-equity acquisition.</p>
          <p>Gerard holds a B.S. in Electrical Engineering from Howard University and an M.S. in Computer Science from Capitol Technology University. A Howard alumnus, he has spent four years as a Technical Advisor for Amazon&apos;s Black Employee Network (BEN) Tech HBCU Capstone Program at Howard, mentoring student teams building real-world applications on AWS. He is a Software Engineering career coach at Management Leadership for Tomorrow&apos;s (MLT) Career Prep program, where he has supported the Software Engineering/Technology track for over five years and created a 10-week summer course, Building Full Stack LLM Services on AWS, reaching over 350 students across the last three summers (llm-aws.course.gspivey.com). In 2014, two years after graduating from Howard, Gerard received the Black Engineer of the Year Award (BEYA) STEM Conference &apos;Most Promising Engineer&apos; award. He writes about software development, AI, and developer tooling on his blog(gspivey.com) and YouTube channel (Gerard’s Curious Tech).</p>
        </div>
      ),
      profileImg: {
        src: spiveyImg,
        alt: "A professional headshot"
      }
    },
    {
      name: "Alexis Robinson",
      title: "Principal Product Manager",
      bio: "Alexis Appollonia Robinson is a Principal Product Manager for Amazon in the Washington, DC area and Adjunct Professor for California State, San Bernadino. For the past 15 years, she has served buyers of the cloud, retail sellers, policy makers, compliance organizations, engineering leaders, and security teams by developing and implementing security strategies, collaborating for thought leadership, solving problems, building products, and conducting cybersecurity, engineering, and financial assessments. She graduated with double Bachelors of Science degrees in Accounting and Information Systems from the Robert H. Smith School of Business at University of Maryland, College Park and an Executive Masters of Business Administration (MBA) from the Quantic Program. She has worked at several companies including CGI Federal and Ernst & Young before finding her to way Amazon. She is a Certified Information Systems Auditor (CISA) and a Project Management Professional (PMP).",
      profileImg: {
        src: robinsonImg,
        alt: "A professional headshot"
      }
    },
    {
      name: "Thaddeus Walker",
      title: "Sr. Enterprise Support Manager, AWS",
      bio: "Thaddeus Walker orchestrates mission-critical cloud transformations for National Security and Defense agencies, where his strategic leadership has strengthened the security posture of critical government systems. As Senior Enterprise Support Manager at Amazon Web Services, he combines deep expertise in Software Development and Cloud Computing with a nuanced understanding of federal compliance requirements to architect solutions that accelerate agencies' cloud adoption journeys. Drawing from over 20 years of industry experience across technology, operations, and software domains, Thaddeus specializes in translating complex technical problems into actionable implementation plans that deliver measurable outcomes for government stakeholders. A proud Tuskegee University computer science graduate, Thaddeus embodies the pioneering spirit of the Tuskegee Airmen, whose \"Lead from the front\" philosophy guides his approach to both team leadership and customer advocacy. This principle drives his commitment to hands-on problem solving and collaborative innovation when navigating the complex security and operational challenges of government cloud transformations.",
      profileImg: {
        src: walkerImg,
        alt: "A professinal headshot"
      }
    },
    {
      name:"Beth Gomolka",
      title: "Sr. Customer Solutions Manager",
      bio: (
        <div className='space-y-4'>
          <p>Beth Gomolka is a Senior Customer Solutions Manager at Amazon Web Services, where she partners with ISV customers to drive cloud adoption and business outcomes across services.</p>
          <p>Beth holds a Bachelor&apos;s degree in Systems Engineering from the University of Virginia and a Master&apos;s degree in Engineering from Linkoping University. Her engineering background gives her a strong foundation in problem solving and systems thinking, which she applies daily to help customers architect solutions and navigate complex cloud transformations. She holds multiple AWS certifications and is a featured speaker at both the Society of Women Engineers Conference and the Grace Hopper Celebration.</p>
          <p>As a career panelist, Beth hopes to show students that technical foundations like engineering open doors across the industry, and that curiosity and a willingness to learn can take you further than any single credential.</p>
        </div>
      ),
      profileImg: {
        src: gomolkaImg,
        alt: "A professional headshot"
      }
    },
    {
      name: "Toechukwu Udegbue",
      title: "",
      bio: (
        <div className='space-y-4'>
          <p>Toechukwu Udegbue is a Project Manager with Amazon Web Services, where she leads retrofit and capacity projects within AWS&apos;s Data Center Acquisition & Construction organization—the team responsible for expanding and modernizing the physical infrastructure that powers the cloud, including the computing capacity behind AI and machine learning.</p>
          <p>A mechanical engineer by training and a certified Project Management Professional (PMP), Toechukwu Udegbue earned her degree from the University of Texas at San Antonio and began her career at Dow Chemical in plant reliability and equipment integrity. She joined AWS in 2022 as a Mechanical Field Engineer before moving into project management, where she now leads complex infrastructure projects across live data center environments, coordinating engineering, construction, and vendor teams to modernize facilities while maintaining reliability and uptime.</p>
          <p>Her experience gives her a practical perspective on the technology behind today&apos;s AI-driven world—grounded in the power, cooling, controls, capacity, and engineering required to make increasingly demanding computing possible at scale.</p>
          <p>Toechukwu Udegbue is also passionate about STEM education, mentorship, and expanding access to engineering and technology careers. That commitment began during her university years through involvement with organizations including the National Society of Black Engineers and Society of Women Engineers and continues through her engagement with the next generation of technical talent.</p>
        </div>
      ),
      profileImg: {
        src: udegbueImg,
        alt: "A person in professional atttire"
      }
    },
    {
      name: "Michael Widell",
      title: "Cloud Migration Done Right: An Institutional Playbook",
      bio: (
        <div className="space-y-4">
          <p>Michael Widell MBA is a seasoned leader in higher education, innovation, and workforce development experience across public colleges, state government, and private industry. He currently serves as Vice President for Information Technology, Innovation, and Workforce at Oklahoma City Community College, where he manages technology-focused initiatives centered on workforce alignment, institutional innovation focused on student success. </p>
          <p>His AWS journey began in 2018 when his university partnered with Amazon to support hiring and onboarding for Oklahoma’s first fulfillment center. The institution quickly recognized the scalability and strategic potential of AWS technologies to expand institutional capacity, strengthen knowledge infrastructure, and accelerate student success. During the global pandemic, AWS-enabled solutions played a critical role in sustaining growth and continuity. His team’s leadership in this space was further demonstrated through presentations at AWS re:Invent, AWS Summits and numerous shared best practice opportunities with universities and corporate partners nationwide. As the AWS Machine Learning University Regional lead OCCC is leading change through academic and operational focused innovations.</p>
          <p>Widell’s career consistently focuses on building cross-sector systems that link education, labor markets, and economic development to boost individual wealth. Previously, Widell served at Oklahoma State University (OSU), including roles as President of OSU-Oklahoma City (OSU-OKC) and Vice President. Before pursuing a career in higher education, his professional experience includes leadership roles at the Walmart General Office, AT&T, Mercy Health Systems, and the State of Oklahoma. He served as a global workforce leader, as the Oklahoma Deputy Secretary of Workforce under both the Obama and Trump administrations, and as the Oklahoma liaison to the National Governors Association. He served under two Oklahoma Governors as Deputy Secretary of Workforce and Chief Administrative Officer for the Oklahoma Department of Commerce. He anticipates completing his Ed.D in Leadership and Innovation from Arizona State University in December 2026.</p>
        </div>
      ),
      profileImg: {
        src: widellImg,
        alt: "A professional headshot"
      }
    },
    {
      name: "Markelle Andrews",
      title: "Amazon Quick: Your AI Assistant",
      bio: "Markelle Andrews is a Senior Worldwide Specialist for Amazon Quick at Amazon Web Services, where she leads global go-to-market strategy across the Energy, Telecommunications, and Education verticals. With over six years at Amazon, Markelle drives technical sales, strategic partnerships, and AI-powered innovation — helping organizations transform how they work, analyze data, and make decisions. She is passionate about creating inclusive opportunities in technology and empowering the next generation of leaders through cloud-based solutions.",
      profileImg: {
        src: andrewsImg,
        alt: "A professional headshot"
      }
    },
    {
      name: "Dr. Yolanda Spiva-Watson",
      bio: "Dr. Yolanda Watson Spiva is the president of Complete College America (CCA), a national nonprofit founded in 2009 that advocates for dramatically increasing college completion rates by identifying, co-designing, and scaling evidence-based practices. Leading CCA since 2018, Dr. Watson Spiva oversees a nationwide alliance of 53 states, systems, territories, and consortia working collectively to accelerate student success and drive systemic change. Previously, she served as President and CEO of the College Success Foundation, CEO and Executive Director of Project GRAD Atlanta Inc., assistant dean at Trinity College in Washington, DC, and held multiple leadership roles with the U.S. Department of Education. Dr. Watson Spiva holds a bachelor’s degree in economics from Spelman College, a master’s degree in public policy from the University of Chicago, and a Ph.D. in higher education from Georgia State University.",
      profileImg: {
        src: spivaWatsonImg,
        alt: "A professional headshot"
      }
    },
    {
      name: "Lisa Bagley",
      title: "AWS Developer Experience",
      bio: "Lisa Bagley leads Content, Education & Research for AWS Community Groups, where she shapes learning experiences for student and professional developer communities on the AWS Builder Center. Over 5+ years at AWS, she&aposs built education programs from K-12 through higher ed — designing curriculum, growing communities, and connecting industry with academia. Before AWS, she spent a decade in AP science education as a College Board Lead Instructor and national mentor. Lisa&aposs passionate about using generative AI to make workflows smarter and learning more accessible for everyone.",
      profileImg: {
        src: bagleyImg,
        alt: "A professional headshot"
      }
    },
    {
      name: "Yuanxia Ding",
      title: "Career Choice",
      bio: (
        <div className="space-y-4">
          <p>Yuanxia Ding leads Amazon Career Choice for the Americas, providing education and job training that enables frontline employees to advance their careers, at Amazon or elsewhere. She oversees a wide range of educational programming, including high school diplomas/GEDs, associate’s and bachelor’s degrees, language learning programs, and curated upskilling programs aligned with employer needs. She leads a team that manages relationships with employer partners committed to hiring Career Choice graduates and over 600 educational provider partners, including 4-year institutions, community colleges, workforce development non-profits, start-up training providers, and corporate training companies all focused on helping Amazon employees gain skills to take their next career step.</p>
          <p>Prior to Amazon, Ms. Ding’s served as Chief Impact Officer for Skills Fund, a quality assurance and lending platform for skills-based training programs. She was appointed by President Obama to serve as Chief of Staff to the Under Secretary at the U.S. Department of Education, where she managed postsecondary education initiatives, and led consulting engagements focused on education and economic development for McKinsey & Company. She has also served in various leadership, advisory, and board positions in education and workforce development organizations including Teach For America, Opportunity@Work, Credential Engine, the Workforce Talent Educators Association, and the Postsecondary Commission. Ms. Ding holds an MBA from The Wharton School at the University of Pennsylvania and a BA from Northwestern University.</p>
        </div>
      ),
      profileImg: {
        src: dingImg,
        alt: "A professional headshot"
      }
    },
    {
      name: "Dr. Kemal Atkins",
      title: "Senior Consultant, Association of Governing Boards of Universities and Colleges",
      bio: (
        <div className="space-y-4">
          <p>Kemal Atkins, EdD is an accomplished higher education leader with more than 25 years of experience in institutional leadership and a deep expertise in enrollment management, student success, governance, strategic planning, and organizational development. As a senior consultant at the Association of Governing Boards of Universities and Colleges (AGB), Atkins works with institutions across the country to implement transformative practices in business model innovation, revenue growth, change management, and board development.</p>
          <p>In his previous roles, Atkins served as vice president at both Keene State College and Delaware State University. He has also held leadership positions at East Carolina University, the University of North Carolina System Office, and Appalachian State University and was the founding director of ThinkCOLLEGE, a college access program of Communities In Schools, Charlotte-Mecklenburg. Throughout his career, Atkins has demonstrated an ability to build and lead high-performing teams, improve institutional effectiveness, and achieve equitable student outcomes. His strategic leadership has led to increased revenue through innovative enrollment strategies, fundraising, and entrepreneurship.</p>
          <p>Atkins is also a passionate educator and currently serves as an adjunct associate professor of educational leadership at Delaware State University. His classroom work integrates his professional expertise and scholarly research, providing students with valuable insights into higher education leadership. Atkins has developed and implemented college-wide initiatives to promote and foster environments where students, faculty, and staff from all backgrounds can thrive.</p>
          <p>Currently, Atkins serves on the board of directors of San Francisco Bay University, where he continues to lend his expertise to institutional governance and strategic direction.</p>
          <p>Atkins holds a BA and MA in English from Appalachian State University and an EdD in educational leadership from Delaware State University. He is also an alumnus of several prestigious leadership development programs, including the American Academic Leadership Institute’s Executive Leadership Academy and Gavin de Becker & Associates’ Advanced Threat Assessment and Management Institute. In addition, Atkins holds an Executive Coaching Certification from the Center for Executive Coaching and is a fellow of the North Carolina Education Policy Fellowship Program (EPFP).</p>
        </div>
        ),
        profileImg: {
          src: atkinsImg,
          alt: "A professional headshot"
        }
    },
    {
      name: "Lisa Chandler",
      title: "Amazon BEN-Tech in Higher Education",
      bio: (
        <div className="space-y-4">
          <p>Lisa Chandler is the Director of Strategic Partnerships for BEN Tech at Amazon Web Services (AWS), where she has proudly served for five years. Over her nine+ year tenure at AWS, Lisa has grown into key leadership roles including Sr. ADC Engineer, Technical Account Manager, ADC Engineering Manager, and Delivery Practice Manager, building deep expertise in cloud technology, customer success, and strategic execution.</p>
          <p>A proud alumna of Howard University, Lisa’s career is anchored in a dual commitment: developing others and fostering equitable opportunity. In her role in BEN Tech, she spearheads initiatives like the HBCU Capstone Program and Cloud Connect, which empower students by providing hands-on technical training, professional development, interview preparation, and direct access to emerging technologies and AWS senior leaders. These programs equip aspiring technologists with the tools, mentorship, and confidence needed to thrive in the tech workforce.</p>
          <p>As a technology pioneer reflecting on a 34-year career, Lisa’s driving purpose is to “be what she wishes she had had earlier in her journey,” dedicating her expertise to empower early-career professionals with the support, resources, and wisdom they deserve.</p>
        </div>
      ),
      profileImg: {
        src: chandlerImg,
        alt: "A professional headshot"
      }
    },
    {
      name: "Willie Mays",
      title: "Amazon BEN-Tech in Higher Education",
      bio: (
        <div className="space-y-4">
          <p>Willie is a seasoned Cloud Technology Manager with over 10 years of experience in cloud deployment, migration, and GenAI transformations, managing multiple multi-million dollar accounts across public and private sectors. He leads cross-functional teams using Agile methodology and holds certifications in SAFe, Scrum Master, Product Owner, AWS Cloud Practitioner, GenAI, and Solutions Architect. His technical expertise spans MLOps, Database, SaaS, PaaS, Data Lakes, on-prem migration, Data Recovery, and AI-DLC implementations.</p>
          <p>Beyond technology, Willie is an accomplished public speaker with more than two decades of experience, captivating audiences at events and conferences across North America. He is a published author with a book available on Amazon, a PRFAQ, and several whitepapers contributing to his field. Whether addressing C-Suite executives or large conference audiences, Willie possesses a remarkable talent for engaging listeners and driving impact.</p>
          <p>His background also includes Operations Engineering expertise in Lean Manufacturing, Six Sigma Black Belt, Continuous Improvement, and U Cell Development — earning him a Shingo Excellence Award.</p>
        </div>
      ),
      profileImg: {
        src: maysImg,
        alt: "A professional headshot"
      }
    },
    {
      name: "Mike Hoggard",
      title: "Amazon University Talent Acquisition",
      bio: "Mike is a connector by nature, with a passion for people. His life&aposs purpose is to share knowledge and mentor others. He does this by connecting people to resources whether that’s career opportunities, tools to help one grow in character or other people. His career includes over 10 years of experience in Talent Acquisition, where he has recruited both university/early career and mid to senior level opportunities. He began his recruiting career in the defense industry but has spent the last 7 years working for Amazon in various recruiting, program manager and recruiting manager capacities. Each year he strategically partners with various HBCUs, universities and student organizations across the country to attract, engage, prepare and hire hundreds of students. In addition to recruiting, he serves as Co – President of BEN Tech (an employee led group at Amazon with over 1,000 slack members) and holds other leadership roles within the local church he attends and his community. He also owns and operates multiple residential rental properties.",
      profileImg: {
        src: hoggardImg,
        alt: "A professional headshot"
      }
    },
    {
      name: "Antionna Sudor",
      title: "Amazon University Talent Acquisition",
      bio: (
        <div className="space-y-4">
          <p>Antionna has spent three years at Amazon in the technical recruiting space, hiring Software Development Engineers in specialized domains alongside Solution Architects, Software Development Networking Engineers, and Embedded Software Engineers all in the University space. Being a natural community builder, Antionna thrives on gaining meaningful connections and asking the questions others leave on the shelf to help others dive deep within. There is deep pride in preparing the next generation of professionals and raising the bar here at Amazon.</p>
          <p>Prior to Amazon, Antionna studied Business Administration at DePaul University. While on campus, a sharp skill for connection and resourcefulness took shape — gaining quality recruiting experience through student organizations and learning what resources were readily available to students. Holding many leadership positions on campus was the norm, and that same drive carries into everyday life. Antionna drives the decision to leave every room, every conversation, and every person with a better impression of life itself — <em>contributing not just to Amazon&aposs next generation of builders, but to the world those builders will create.</em></p>
        </div>
      ),
      profileImg: {
        src: sudorImg,
        alt: "A person in professional attire"
      }
    }
  ]
}
