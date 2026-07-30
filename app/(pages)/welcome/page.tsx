import WidgetWrapper from "~/components/common/WidgetWrapper";
import Headline from "~/components/common/Headline";
import ProfileBio from "~/components/common/ProfileBio";

import velaHeadshot from "~/assets/images/headshot-vela.jpg"
import Background from "~/components/common/Background";


export default function Page() {
const heroProfileWelcome = {
    headline:{
        header: {
            title: "Welcome to the Symposium",
        },
            titleClass: "text-5xl font-heading",
    },
    profile:{
        name: "Dr. Margie Vela", 
        title: "Lead for Strategic Academic Initiatives", 
        organization: "Machine Learning University, Amazon Web Services", 
        profileImg: {
                src: velaHeadshot,
                alt: "Headshot of woman in professinal attire"
        },
        descContainerClass: "h-full justify-center"
    }
  }
    return (
        <>
            <WidgetWrapper>
                <Headline {...heroProfileWelcome.headline}/>
                <ProfileBio {...heroProfileWelcome.profile}/>
            </WidgetWrapper>

            <WidgetWrapper hasBackground={true}>
                <Headline
                header = {{title: "Dear AI Enthusiasts,", position: "left"}}
                titleClass="font-normal text-2xl"
                />
                <div className="flex-col space-y-10 text-lg">
                    <div>
                        <p>Welcome to the 2026 AWS-MLU Fall AI Teaching & Research Symposium!</p>
                    </div>

                    <div className="flex-col space-y-5">
                        <p>On behalf of Amazon&apos;s Machine Learning University and our incredible community of collaborating institutions, we are thrilled to welcome you to the Washington, D.C. area for two days of collaboration, innovation, and celebration.</p>
                        <p>This symposium represents the collective commitment of HBCUs, community colleges, and universities nationwide to advance AI and machine learning education. Whether you are a faculty member integrating AI into your curriculum, a student building your first AI-powered application, a technology leader transforming your institution&apos;s infrastructure, or an executive administrator charting the future of your campus — this event was designed for you.</p>
                        <p>The two-day symposium opens at Howard University on September 21 with a keynote plenary and four role-based breakout tracks—students engage in the Amazon Cloud Connect Experience, faculty explore curriculum development through the Distributed Teaching Collaborative Consortium in the Educators Consortium, CIOs tackle cloud migration and GenAI tools in the Visionary Tech Collaborative, and executive administrators address AI governance and workforce alignment in the Transformation Alliance—culminating in student app presentations, exploration of the historic Howard University campus, and a Networking Hour. The symposium continues on September 22 at Amazon HQ2 immerses participants in the Amazon ecosystem with sessions on Career Choice, AWS Developer Experience, BEN-Tech, and internships, followed by student and faculty poster sessions, an Innovation Table Luncheon, and optional tours of the AI Experience Center, AWS Skills Center, and Amazon Headquarters.</p>
                        <p>This symposium is more than a conference — it is a movement. Together, we are building a national network of institutions that are preparing the next generation of AI leaders, advancing responsible AI research, and ensuring that the communities we serve are not left behind in the AI revolution.</p>
                        <p>Your presence here signals your commitment to that mission, and we are honored to have you with us.</p>
                        <p>Thank you for being part of this journey. Let&apos;s make these two days unforgettable.</p>
                    </div>

                    <div>
                        <p>With gratitude,</p>
                    </div>

                    <div>
                        <p className="font-xl font-bold">Dr. Margie Vela </p>
                        <p className="text-[#1F0024]/80">Head of Strategic Academic Initiatives Machine Learning University</p>
                        <p className="text-[#1F0024]/60">Amazon Web Services</p>
                    </div>
                </div>
            </WidgetWrapper>
         </>
    )
};