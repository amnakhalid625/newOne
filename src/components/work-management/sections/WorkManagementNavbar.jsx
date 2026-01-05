import React from 'react';

const WorkManagementNavbar = () => {
  return (
    <div className="w-full bg-white px-10 py-4">
      <div className="max-w-[85.75rem] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">

          {/* Logo */}
          <a href="#" className="inline-block">
            <img
              src="https://cdn.prod.website-files.com/656da6fea306219773d04208/682a0ab316de3744b0137aa4_WM-oneliner-box.svg"
              alt="Work Management Logo"
              className="h-7"
            />
          </a>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">

            <a
              href="/work-management"
              className="text-sm font-normal transition-colors"
              style={{ color: '#676879' }}
            >
              Overview
            </a>

            <a
              href="/w/work-management-for-enterprise"
              className="text-sm font-normal transition-colors"
              style={{ color: '#676879' }}
            >
              For Enterprise
            </a>

            <a
              href="/w/work-management/marketing"
              className="text-sm font-normal transition-colors"
              style={{ color: '#676879' }}
            >
              For Marketing
            </a>

            <a
              href="https://monday.com/work-management/pmo"
              className="text-sm font-normal transition-colors"
              style={{ color: '#676879' }}
            >
              For PMO
            </a>

            <a
              href="https://monday.com/work-management/pricing"
              className="text-sm font-normal transition-colors"
              style={{ color: '#676879' }}
            >
              Pricing
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkManagementNavbar;
