import React from 'react';

const WorkManagementPartners = () => {
  const stats = [
    {
      logo: "https://cdn.prod.website-files.com/656da6fea306219773d04208/66f92cce1fcb549016ab941f_Frame%201-2.avif",
      number: "20%",
      description: "Increase in client satisfaction"
    },
    {
      logo: "https://cdn.prod.website-files.com/656da6fea306219773d04208/66f92cce6976f830c4146670_frame%201-1.avif",
      number: "3X",
      description: "Creative output"
    },
    {
      logo: "https://cdn.prod.website-files.com/656da6fea306219773d04208/672a0208928102d96cd51e56_holt%20165*61.avif",
      number: "$4.14M",
      description: "Saved by process optimization",
      isHolt: true
    }
  ];

  return (
    <div className="px-10 py-24 transition-all duration-200 flex justify-between items-center gap-x-[1svw]">
      <div className="w-full max-w-[85.75rem] mx-auto">
        <div className="flex justify-between gap-8 grid-cols-[1fr_1fr_1fr]">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-start gap-4"
            >
              <img
                src={stat.logo}
                loading="lazy"
                alt=""
                className={`inline-block align-bottom text-left overflow-clip flex-none border-0 ${stat.isHolt ? 'max-w-[7.5rem] mr-2' : 'max-w-[7.5rem]'
                  }`}
              />
              <div className="flex flex-col justify-start items-start border-l border-black pl-6">
                <div className="text-[1.75rem] font-semibold leading-[1.3] text-black">
                  {stat.number}
                </div>
                <div className="text-base font-normal leading-5 text-black">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkManagementPartners;