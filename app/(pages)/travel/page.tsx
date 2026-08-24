import WidgetWrapper from "~/components/common/WidgetWrapper";
import Headline from "~/components/common/Headline";

export default function Page() {
    return (
        <>
            <WidgetWrapper>
                <Headline
                header = {
                    {
                        title: "Travel Info", 
                    } 
                }
                titleClass="font-normal text-5xl"
                />
                <div className="space-y-20 text-lg">
                    <div className="space-y-5">
                        <p>Thank you for your interest in the AWS-MLU 2026 Fall AI Teaching and Research Symposium!</p>
                        <p>Amazon does <b>NOT</b> provide travel funding for this event. Please work with your institution to secure travel funds.</p> 
                        <p>All event information is in the &quot;Lobby&quot; of the Brazen Event. Please check the booths for the agenda and travel information.</p>
                    </div>
                    <div>
                        <p>Please fell free to contact Dr. Margie Vela at <a href="mailto:velmarg@amazon.com" className="underline">velmarg@amazon.com</a> with any questions.</p>
                    </div>
                </div>
            </WidgetWrapper>
         </>
    )
};