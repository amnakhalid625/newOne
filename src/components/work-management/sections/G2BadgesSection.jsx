import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function G2BadgesSection() {
  const badges = [
    "https://cdn.prod.website-files.com/656da6fea306219773d04208/66f93a801063df71ac953503_WorkManagement_Leader_Enterprise_Leader%201%201.avif",
    "https://cdn.prod.website-files.com/656da6fea306219773d04208/66f93a8080f0169f8db120aa_Group%201561553661%201.avif",
    "https://cdn.prod.website-files.com/656da6fea306219773d04208/66f93a7f443af3c1629103fe_Group%201561553662%201.avif",
    "https://cdn.prod.website-files.com/656da6fea306219773d04208/66f93a80c6269f31668071af_WorkManagement_BestUsability_Total%201%201.avif"
  ];

  return (
    <div className="w-full bg-white py-24 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-center gap-8">
          {/* Left Content */}
          <div className="flex flex-col items-start w-full md:w-1/2">
            <div className="text-base text-gray-700 mb-6 hidden md:block">
              Backed by G2 customer reviews
            </div>

            <h2 className="text-5xl font-normal text-gray-900 leading-tight mb-6">
              The #1 Work Management Software on G2
            </h2>

            <a
              href="https://auth.monday.com/p/core/users/sign_up_new"
              className="inline-flex items-center gap-3 px-8 py-3.5 border border-black rounded-full text-black hover:bg-black hover:text-white transition-all duration-200"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Right Content - Badges */}
          <div className="flex gap-6 mt-4">
            {badges.map((badge, index) => (
              <img
                key={index}
                src={badge}
                alt={`G2 Badge ${index + 1}`}
                className="w-28 h-auto object-contain"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}