import React, { useState } from 'react';

export default function MondayTabs() {
  const [activeTab, setActiveTab] = useState('Projects');

  const tabs = [
    {
      id: 'Projects',
      label: 'Projects',
      category: 'Project management',
      title: 'Stay in sync and on schedule',
      description: 'Deliver projects efficiently and coordinate dependencies with advanced capabilities teams love to use.',
      image: 'https://cdn.prod.website-files.com/656da6fea306219773d04208/66f9ae29beecda0cc740c0b0_WM-A-Z-Projects.avif'
    },
    {
      id: 'Portfolio',
      label: 'Portfolios',
      category: 'Portfolio management',
      title: 'Gain real-time insights',
      description: 'Connect projects from across your org and gain the clarity you need to optimize dependencies, allocate resources, and solve risks.',
      image: 'https://cdn.prod.website-files.com/656da6fea306219773d04208/66f9ae2c49279bcda2079e87_WM-A-Z-Portfolio.avif'
    },
    {
      id: 'Processes',
      label: 'Processes',
      category: 'Process management',
      title: 'Accelerate business workflows',
      description: 'Scale your business with automated workflows that connect people to the right information in real-time.',
      image: 'https://cdn.prod.website-files.com/656da6fea306219773d04208/66fabd2a7241c2c6ab67b01f_1-WM-A-Z-Processes.avif'
    },
    {
      id: 'Resource',
      label: 'Resources',
      category: 'Resource management',
      title: 'Make the most out of your talent',
      description: 'Gain visibility into workloads and allocate resources based on skills and availability to ensure efficiency for every business unit.',
      image: 'https://cdn.prod.website-files.com/656da6fea306219773d04208/66fa714bfd37f53b0dfd20a3_WM-A-Z-Resource%20management-v2.avif'
    },
    {
      id: 'Goals',
      label: 'Goals & OKRs',
      category: 'Goals & OKRS',
      title: 'Align teams with strategy',
      description: 'Track progress towards your strategic objectives for better alignment and productivity.',
      image: 'https://cdn.prod.website-files.com/656da6fea306219773d04208/66f9ae299382462fb2e38167_WM-A-Z-Goals%20%26%20Okrs.avif'
    }
  ];

  return (
    <div className="block overflow-visible transition-all duration-200 px-4 py-0 pb-4">
      <section className="block bg-[#6161ff] rounded-[2.5rem] w-full max-w-[120rem] mx-auto p-16">
        <div className="w-full max-w-[85.75rem] mx-auto block overflow-visible">

          {/* Header Section */}
          <div className="flex flex-row justify-center items-center text-center mx-auto max-w-[48rem]">
            <div className="text-[3rem] leading-[1.3] font-normal tracking-[-0.025rem] text-white mt-0 mb-0 max-w-[20ch] mx-auto">
              From projects to goals, power work at every level
            </div>
          </div>

          {/* Spacer 3rem */}
          <div className="pb-12"></div>

          {/* Tabs Container with background */}
          <div className="relative bg-[#ffffff1a] rounded-[1.5rem] w-full pt-14 pb-0 overflow-hidden">

            {/* Tabs Menu */}
            <div className="relative flex justify-center items-center max-w-[58rem] mx-auto gap-12" role="tablist">
              {tabs.map((tab) => (
                <a
                  key={tab.id}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(tab.id);
                  }}
                  href={`#${tab.id}`}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  className="relative flex flex-col justify-center items-center py-5 px-0 font-light text-base transition-all duration-200 cursor-pointer text-white bg-transparent max-w-full align-top no-underline inline-block"
                >
                  <div>{tab.label}</div>
                  <div
                    className="bg-white rounded-[2rem] h-1 transition-all duration-200 absolute bottom-0"
                    style={{ width: activeTab === tab.id ? '60%' : '0%' }}
                  ></div>
                </a>
              ))}
            </div>

            {/* Tab Content */}
            <div className="block relative overflow-hidden pt-6">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`${activeTab === tab.id ? 'block' : 'hidden'} relative`}
                  style={{
                    opacity: activeTab === tab.id ? 1 : 0,
                    transition: 'all, opacity 100ms'
                  }}
                  role="tabpanel"
                >
                  <div className="grid gap-8 rounded-[1.5rem] place-items-end" style={{
                    gridTemplateRows: 'auto',
                    gridTemplateColumns: '1fr 1.5fr',
                    gridAutoColumns: '1fr'
                  }}>

                    {/* Left Content */}
                    <div className="flex flex-col justify-center items-start text-white max-w-[26rem] py-16 pl-16" style={{
                      gridColumnGap: '1.5rem',
                      gridRowGap: '1.5rem',
                      gap: '1.5rem'
                    }}>
                      <p className="text-base font-normal leading-[1.6] mt-0 mb-0 text-white hidden md:flex justify-center items-center">
                        {tab.category}
                      </p>
                      <h2 className="inline-block text-[2rem] leading-[1.3] font-normal tracking-[-0.025rem] text-white mt-0 mb-0">
                        {tab.title}
                      </h2>
                      <p className="text-base font-normal leading-[1.6] mt-0 mb-0 text-white flex justify-center items-center">
                        {tab.description}
                      </p>
                      <a
                        href="https://auth.monday.com/p/core/users/sign_up_new"
                        className="inline-flex justify-start items-center px-8 max-w-full border border-white rounded-[10rem] transition-all duration-100 bg-white text-black no-underline"
                        style={{ padding: '0.875rem 2rem' }}
                      >
                        <div>Get Started</div>
                      </a>
                      <div style={{ paddingBottom: '1.5rem' }}></div>
                    </div>

                    {/* Right Image */}
                    <img
                      sizes="100vw"
                      src={tab.image}
                      alt=""
                      loading="eager"
                      className="inline-block align-bottom max-w-full border-0 overflow-clip"
                      style={{
                        textAlign: 'left',
                        verticalAlign: 'bottom',
                        textDecoration: 'none'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}