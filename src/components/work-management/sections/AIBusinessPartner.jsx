import React, { useState } from 'react';

const AIBusinessPartner = () => {
  const [openItem, setOpenItem] = useState(0);

  const accordionItems = [
    {
      title: "Identify risks across your portfolio",
      description: "Proactively raise flags across projects to help you address them.",
      image: "https://cdn.prod.website-files.com/656da6fea306219773d04208/66fa714b5437785b120b93cf_WM-ai1.avif"
    },
    {
      title: "Categorize project requests at scale",
      description: "Analyze incoming requests, assign labels, and streamline your workflow.",
      image: "https://cdn.prod.website-files.com/656da6fea306219773d04208/67175eca8cbf06271e6445b7_WM-ai2.avif"
    },
    {
      title: "Instantly create a detailed project plan",
      description: "Get a head start on your project with AI suggested tasks and phases.",
      image: "https://cdn.prod.website-files.com/656da6fea306219773d04208/67175ecbffd66e4318d62dad_WM-ai3.avif"
    }
  ];

  const handleItemClick = (index) => {
    setOpenItem(index);
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-[86rem] mx-auto">
        <div
          className="bg-[#f0f3ff] rounded-[2.5rem] flex items-stretch justify-start w-full relative"
          style={{ padding: '6rem 0 6rem 5rem' }}
        >
          {/* Left side - Accordion group */}
          <div className="flex flex-col justify-between items-start" style={{ width: '44%' }}>
            <div className="flex items-stretch justify-start w-full relative flex-col">
              <h2 className="text-[3rem] font-normal leading-[1.1] text-black mb-[42px] tracking-[-0.025rem] mt-0">
                Your AI business partner<br />
              </h2>

              <div className="flex flex-col justify-end items-start w-[26rem] min-h-[22rem]">
                {accordionItems.map((item, index) => (
                  <div key={index}>
                    {index === openItem ? (
                      // Expanded item
                      <div
                        className="bg-[#e1e5f5] rounded-lg h-[8.75rem] flex flex-col justify-center px-6 py-4 cursor-pointer overflow-hidden transition-all duration-300"
                        style={{ transitionTimingFunction: 'cubic-bezier(0.645, 0.045, 0.355, 1)' }}
                      >
                        <div className="flex justify-between items-center">
                          <div className="text-lg font-semibold text-black leading-[1.3] m-0">
                            {item.title}
                          </div>
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/656da6fea306219773d04208/66f5247a41c62cb69991c302_ScrollDownArrow_light.svg"
                            alt=""
                            className="w-4 h-4 opacity-0"
                            style={{ transform: 'rotate(180deg)', transition: 'transform 0.4s' }}
                          />
                        </div>
                        <p className="text-lg text-black leading-[1.5] mt-2 mb-0 font-normal">
                          {item.description}
                        </p>
                      </div>
                    ) : (
                      // Collapsed item
                      <div
                        className="flex justify-between items-center py-2 cursor-pointer opacity-40 hover:opacity-60 transition-opacity duration-300 h-[4.5rem] rounded-lg px-6"
                        onClick={() => handleItemClick(index)}
                      >
                        <div className="text-lg font-semibold text-black leading-[1.3] m-0">
                          {item.title}
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/656da6fea306219773d04208/66f5247a41c62cb69991c302_ScrollDownArrow_light.svg"
                          alt=""
                          className="w-4 h-4 opacity-0"
                          style={{ transition: 'transform 0.4s' }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Image display */}
          <div className="flex-1 flex items-center justify-start pr-12 absolute" style={{
            width: '54%',
            minWidth: '28rem',
            inset: '0% 0% 0% auto'
          }}>
            <div className="w-full">
              <img
                sizes="(max-width: 1728px) 100vw, 1728px"
                src={accordionItems[openItem].image}
                alt=""
                loading="lazy"
                className="w-full inline-block object-cover"
                style={{
                  verticalAlign: 'bottom',
                  overflow: 'clip',
                  cursor: 'auto'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIBusinessPartner;