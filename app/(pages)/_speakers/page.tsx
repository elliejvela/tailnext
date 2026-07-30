import ProfileBio from "~/components/common/ProfileBio";
import WidgetWrapper from "~/components/common/WidgetWrapper";
import Headline from "~/components/common/Headline";
import {speakerInfo} from "~/shared/data/pages/speakers.data"

export default function Page() {

    return (
        <WidgetWrapper>
            <Headline
            header = {{title: "Speakers"}}
            titleClass="text-6xl"
            />
            {<div className=''>{
            speakerInfo.items.map((item, index) => (
            <div key={`speaker-${index}`} className="my-20">
             <ProfileBio  {...item}/>
            </div>
            ))
          }</div>}
        </WidgetWrapper>
    )
};