import ProfileBio from "~/components/common/ProfileBio";
import WidgetWrapper from "~/components/common/WidgetWrapper";
import {speakerInfo} from "~/shared/data/pages/speakers.data"

export default function Page() {

    
    
    return (
        <WidgetWrapper>
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