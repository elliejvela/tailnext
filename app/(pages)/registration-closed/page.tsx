import WidgetWrapper from "~/components/common/WidgetWrapper";
import Headline from "~/components/common/Headline";


export default function Page() {
const heroProfileWelcome = {
    headline:{
        header: {
            title: "Registration has closed",
        },
            titleClass: "text-5xl font-heading",
    },
  }
    return (
        <>
            <WidgetWrapper>
                <Headline {...heroProfileWelcome.headline}/>
                 <div className="flex-col space-y-10 text-lg text-center">
                    <p>The MLU-AWS symposium has concluded.</p>
                    <p>Check back later for information about future MLU-AWS events.</p>
                </div>
            </WidgetWrapper>
         </>
    )
};