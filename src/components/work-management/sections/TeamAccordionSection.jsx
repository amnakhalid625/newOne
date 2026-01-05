import React, { useState } from 'react';

export default function TeamAccordionSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const accordionItems = [
    {
      title: "Company-wide",
      description: "Experience an easy-to-adopt solution that supports any function and process across the org — from HR, to Finance, to Legal, and more.",
      link: "https://monday.com/sales/contact-us",
      linkText: "Talk to sales",
      image: "https://cdn.prod.website-files.com/656da6fea306219773d04208/66faba320fd1a99ac43d25b0_1-Company-wide.avif"
    },
    {
      title: "Marketing",
      description: "Centralize marketing operations to collaborate, track progress, and maximize marketing ROI.",
      link: "https://monday.com/work-management/marketing",
      linkText: "Learn more",
      image: "https://cdn.prod.website-files.com/656da6fea306219773d04208/66fabcb58b7e0146b5624c98_2-Marketing.avif"
    },
    {
      title: "Operations",
      description: "Automate operational processes, from request management to global facility management, and ensure business continuity.",
      link: "https://monday.com/operations",
      linkText: "Learn more",
      image: "https://cdn.prod.website-files.com/656da6fea306219773d04208/66fab9f9d742c0f551288ca7_1-Operations.avif"
    },
    {
      title: "PMO",
      description: "Keep business-critical goals on track to ensure timely delivery and gain data accuracy with one source of truth around portfolios.",
      link: "https://monday.com/work-management/pmo",
      linkText: "Learn more",
      image: "https://cdn.prod.website-files.com/656da6fea306219773d04208/66faba31d59e5154b393b4ad_1-PMO.avif"
    }
  ];

  return (
    <div className="w-full px-4 py-4 block overflow-visible">
      <div className="max-w-[120rem] mx-auto bg-[#311cac] rounded-[2.5rem] pt-24 pb-0 pl-20 pr-0 flex items-stretch justify-start w-full overflow-hidden relative">
        <div className="w-1/2 flex flex-col justify-between items-end relative z-10">
          {/* Left Content Area */}
          <div className="max-w-[44.5rem] pb-20 pr-12">
            <h2 className="text-5xl font-normal text-white leading-tight mb-0 tracking-tight">
              Empower the way every team works
            </h2>

            <div className="flex flex-col justify-end items-start w-full max-w-[30rem] min-h-[36rem] pt-12">
              {accordionItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col justify-center items-start rounded-lg px-6 py-4 w-full cursor-pointer transition-all duration-500 overflow-hidden ${openIndex === index
                      ? 'bg-white/20 max-h-96'
                      : 'max-h-[5.75rem]'
                    }`}
                  onClick={() => setOpenIndex(index)}
                >
                  {/* Accordion Header */}
                  <div className={`flex justify-between items-center w-full py-2 font-semibold leading-tight transition-opacity duration-300 ${openIndex === index ? 'opacity-100' : 'opacity-40'
                    }`}>
                    <div className="text-white text-[2rem] font-light leading-tight">
                      {item.title}
                    </div>
                    <img
                      src="https://cdn.prod.website-files.com/656da6fea306219773d04208/66f5247a41c62cb69991c302_ScrollDownArrow_light.svg"
                      alt="chevron"
                      className={`w-4 opacity-0 transition-transform duration-400 ${openIndex === index ? 'rotate-180' : ''
                        }`}
                    />
                  </div>

                  {/* Accordion Body */}
                  <div className={`flex flex-col justify-start items-start pr-6 transition-opacity duration-400 overflow-hidden ${openIndex === index ? 'block' : 'hidden'
                    }`}>
                    <p className="text-white text-base font-light leading-relaxed mt-2 mb-4">
                      {item.description}
                    </p>
                    <a
                      href={item.link}
                      className="flex justify-start items-center relative border-b border-white/40 text-white"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div>{item.linkText}</div>
                      <div className="absolute bottom-[-1px] left-0 h-[1px] w-0 bg-white transition-all duration-300 z-[1] hover:w-full"></div>
                    </a>

                    <div className="pb-2 pr-2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image Area - Outside accordion items */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 min-w-[26rem] flex items-end justify-start">
          {accordionItems.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-end justify-start transition-opacity duration-400 ${openIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}