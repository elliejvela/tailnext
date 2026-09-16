import { ContentVerboseProps } from "~/shared/types"

const contentPosterFAQs: ContentVerboseProps = {
  header:{
    title: 'Frequently Asked Questions',
    subtitle: "This FAQ prepares presenters for the digital AWS MLU 2026 Fall Symposium poster session, including registration, security clearance, venue logistics, presentation format, equipment needs, and required next steps."
  },
  content: [
    <div className="text-lg text-left" key="contentPosterDiv">
        <h2 className="text-xl font-semibold mb-3">Registration and Security</h2>
        <ul className="font-bold mb-10">
            <li className="mb-3">
                <p>Q: What registration step is required before attending the symposium?</p>
                <p className="font-normal">A: All presenters must complete the Brazen Connect registration immediately. This registration is required for AWS security clearance and is non-negotiable for entry to AWS HQ2.</p>
            </li>
            <li className="mb-3">
                <p>Q: Which email address should presenters use when registering?</p>
                <p className="font-normal">A: Presenters should use their &quot;.edu&quot; email account when completing registration because it supports easier institutional verification.</p>
            </li>
        </ul>

        <h2 className="text-xl font-semibold mb-3">Symposium Logistics</h2>
        <ul className="font-bold mb-10">
            <li className="mb-3">
                <p>
                    Q: When and where will the symposium take place?
                </p>
                <p className="font-normal">
                    A: Day 1 will be held on September 21 at Howard University&apos;s Blackburn Center. Day 2 will be held on September 22 at AWS HQ2, located at 1770 Crystal Drive in Arlington, Virginia.
                </p>
            </li>
            <li className="mb-3">
                <p>
                    Q: Is parking available at AWS HQ2?
                </p>
                <p className="font-normal">
                    A: Free parking is not available at AWS HQ2. Presenters are encouraged to use public transportation, especially Metro, when traveling to the venue.                </p>
            </li>
            <li className="mb-3">
                <p>
                    Q: Where can presenters find travel information?
                </p>
                <p className="font-normal">
                    A: Travel guidance, including hotel and transportation information, is available in the Brazen Connect portal.
                </p>
            </li>
        </ul>
           
        <h2 className="text-xl font-semibold mb-3">Poster Session Schedule</h2>
        <ul className="font-bold mb-10">
            <li className="mb-3">
                <p>
                    Q: When are the poster sessions scheduled?
                </p>
                <p className="font-normal">
                    A: Poster sessions will take place on Day 2, September 22, at AWS HQ2. Student presentations are scheduled from 10:45 AM to 11:30 AM, and faculty presentations are scheduled from 11:30 AM to 12:15 PM.
                </p>
            </li>
            <li className="mb-3">
                <p>
                    Q: How will poster presenters be organized?
                </p>
                <p className="font-normal">
                    A: Presenters will be grouped into topic-based cohorts, with each group presenting for approximately 30 minutes. A detailed presentation list will be shared in advance.
                </p>
            </li>
            <li className="mb-3">
                <p>
                    Q: Does the 8:30 AM &quot;Poster Setup&quot; agenda item apply this year?
                </p>
                <p className="font-normal">
                    A: No. The 8:30 AM &quot;Poster Setup&quot; item is a holdover from last year&apos;s agenda and does not apply to this year&apos;s digital poster format.
                </p>
            </li>
        </ul>

        <h2 className="text-xl font-semibold mb-3">Digital Poster Format and Equipment</h2>
        <ul className="font-bold mb-10">
            <li className="mb-3">
                <p>
                    Q: Will presenters use paper posters?
                </p>
                <p className="font-normal">
                    A: No. The poster session is digital-only. Presenters should not bring paper posters.
                </p>
            </li>
            <li className="mb-3">
                <p>
                    Q: What display equipment will be available?
                </p>
                <p className="font-normal">
                    A: LCD screens on mobile carts will be used for presentations. Screens are expected to connect by HDMI, and mice will be provided. Presenters should assume the screens are not touch-enabled.
                </p>
            </li>
            <li className="mb-3">
                <p>
                    Q: What should presenters bring?
                </p>
                <p className="font-normal">
                    A: Presenters should bring their own laptop or presentation device, along with any proprietary HDMI adapters needed for reliable connection and optimal performance.
                </p>
            </li>
            <li className="mb-3">
                <p>
                    Q: What file formats are accepted for digital posters?
                </p>
                <p className="font-normal">
                    A: Accepted formats include PowerPoint, PDF, and PNG. Presenters should also upload a PDF backup of their poster to the shared OneDrive link.
                </p>
            </li>
            <li className="mb-3">
                <p>
                    Q: Can presenters use multiple slides or interactive demonstrations?
                </p>
                <p className="font-normal">
                    A: Yes. The digital format supports multi-slide presentations and interactive demonstrations, including examples such as VR headset demonstrations or additional slides for extensive co-author lists.
                </p>
            </li>
        </ul>

        <h2 className="text-xl font-semibold mb-3">Presentation Expectations and Support</h2>
        <ul className="font-bold mb-10">
            <li className="mb-3">
                <p>
                    Q: How should presenters engage with attendees?
                </p>
                <p className="font-normal">
                    A: Presenters should actively explain their research to attendees, including AWS leadership, rather than relying on a static display.
                </p>
            </li>
            <li className="mb-3">
                <p>
                    Q: Why is the poster session important for students?
                </p>
                <p className="font-normal">
                    A: The session provides students with an opportunity to share their research with attendees and AWS leaders, and it may help students connect with potential internship opportunities.
                </p>
            </li>
            <li className="mb-3">
                <p>
                    Q: Will technical support be available?
                </p>
                <p className="font-normal">
                    A: Yes. On-site technical support will be available to help with connection issues.
                </p>
            </li>

            <li className="mb-3">
                <p>
                    Q: What should all presenters do now?
                </p>
                <p className="font-normal">
                    A: Presenters should complete Brazen Connect registration immediately, upload a PDF backup of their poster to the shared OneDrive, bring their own laptop or device with the necessary HDMI adapters, and check the Brazen Connect portal for the final presentation schedule.
                </p>
            </li>
        
        </ul>
    </div>
  ]
};

export default contentPosterFAQs;