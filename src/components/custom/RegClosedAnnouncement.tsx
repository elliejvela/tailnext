/* eslint-disable @next/next/no-img-element */
import { announcementData } from '~/shared/data/global.data';

const RegClosedAnnouncement = () => {
  const { title, callToAction, callToAction2 } = announcementData;

  return (
    <div className="hidden overflow-hidden text-ellipsis whitespace-nowrap border-b static-primary px-3 py-2 text-sm md:block">
      <span className="bg-[#693371] py-0.5 px-1 text-xs font-semibold rounded-full">{title}</span>{' '}
      {callToAction && callToAction.text && callToAction.href && (
        <a
          href={callToAction.href}
          target="_blank"
          rel="noreferrer noopened"
          className="cursor-pointer text-gray-100 hover:underline"
        >
          {callToAction.icon && <callToAction.icon className="mr-1 -ml-1.5 h-5 w-5" />} {callToAction.text}
        </a>
      )}
    </div>
  );
};

export default RegClosedAnnouncement;
