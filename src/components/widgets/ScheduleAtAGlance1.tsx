'use client';

import Headline from '../common/Headline';
import { ScheduleTab, Tab, TabScheduleProps } from '~/shared/types';
import { useState } from 'react';
import useWindowSize from '~/hooks/useWindowSize';
import Dropdown from '../common/Dropdown';
import WidgetWrapper from '../common/WidgetWrapper';

const ScheduleAtAGlance1 = ({ header, tabs, id, hasBackground = false }: TabScheduleProps) => {
  const { width } = useWindowSize();
  const [activeTab, setActiveTab] = useState(0);

  const activeTabSelectedHandler = (index: number) => {
    setActiveTab(index);
  };

  return (
    <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
      {header && <Headline header={header} titleClass="text-3xl sm:text-4xl text-[#1F0024]" />}
      <div className="flex items-stretch justify-center">
        <div className="grid w-full md:grid-cols-5 md:items-center md:gap-4">
          {width > 767 ? (
            <div className="block h-full sm:flex sm:items-center sm:justify-between md:mx-4 md:mt-10 md:block md:px-4">
              <div className="flex h-fit min-w-max">
                <ul className="flex flex-col w-full">
                  {(tabs as Tab[]).map((tab, index) => {
                    const onSelectTab = () => {
                      setActiveTab(index);
                    };

                    return (
                      <li
                        key={`tab-${index}`}
                        className={`py-2 flex cursor-pointer justify-center text-[#1F0024] w-full rounded-md
                          ${
                          activeTab === index ? 'btn-primary text-white hover:border-[#1F0024] hover:bg-[#693371]' : ' hover:bg-gray-200'
                        }`}
                        tabIndex={0}
                        onClick={onSelectTab}
                      >
                        <span className="text-xl">{tab.link?.label}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ) : (
            <Dropdown options={tabs as Tab[]} activeTab={activeTab} onActiveTabSelected={activeTabSelectedHandler} />
          )}
          <div className="mt-4 h-fit md:col-span-4 md:mx-4 md:mt-0 md:px-4">
            {(tabs as ScheduleTab[]).map((tab, index) => (
              <div key={`tab-${index}`} className="">
                {activeTab === index && (
                  tab.schedule
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </WidgetWrapper>
  );
};

export default ScheduleAtAGlance1;
