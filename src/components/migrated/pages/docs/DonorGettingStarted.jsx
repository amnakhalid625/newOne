import React from 'react';

const DonorGettingStarted = () => {
  return (
    <div className="w-full h-screen overflow-y-auto bg-white">
      {/* Header Section */}
      <div className="max-w-[900px] min-w-[560px] mx-auto px-9 py-8">
        <div className="flex items-center gap-2 mb-6">
          <h1 className="text-4xl font-semibold text-gray-900">
            Getting Started
          </h1>
          <button className="text-gray-400 hover:text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-8">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            <span>Creator <strong>Staff Admn Hydro Planning</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            <span>Created <strong>Dec 08, 2025, 09:59</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span>Last updated <strong>Dec 08, 2025, 09:59</strong></span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-[900px] min-w-[560px] mx-auto px-9">
        
        {/* Step 1 */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Step 1: Welcome video (2 min)
          </h2>
          <p className="text-base text-gray-700 mb-6 leading-relaxed">
            Welcome to monday.com! In this short video, we'll take you through a high-level overview of how to manage grants on our platform. You can also{' '}
            <a href="#" className="text-blue-600 hover:underline">apply here</a> to get monday.com for FREE.
          </p>
          <div className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <iframe 
              src="https://embed.eu.guidde.com/playbooks/e9U1ucUqLuZXEvAchvHudu?mode=video"
              className="w-full aspect-video border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Step 2 - Two Column Layout */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Step 2: Walkthrough (9 mins)
          </h2>
          <div className="flex gap-8 items-start">
            <div className="w-[40%]">
              <p className="text-base text-gray-700 leading-relaxed">
                If you need a bit of help to get started, this video will show you how to use the solution from end-to-end.
              </p>
            </div>
            <div className="w-[60%]">
              <div className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <iframe 
                  src="https://embed.eu.guidde.com/playbooks/e9U1ucUqLuZXEvAchvHudu?mode=video"
                  className="w-full aspect-video border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 - Two Column Layout */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Step 3: Customize boards and columns to your needs (3 min)
          </h2>
          <div className="flex gap-8 items-start">
            <div className="w-[40%]">
              <p className="text-base text-gray-700 leading-relaxed">
                Boards and columns are the main building blocks of{' '}
                <a href="https://monday.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">monday.com</a>.{' '}
                <a href="#" className="text-blue-600 hover:underline">Read this to learn more</a> on how you can customize them, or watch a 3 minute video.
              </p>
            </div>
            <div className="w-[60%]">
              <div className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <iframe 
                  src="https://embed.eu.guidde.com/playbooks/ja7ugfPtJH1iDVNiRABFv6?mode=videoOnly"
                  className="w-full aspect-video border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        {/* Step 4 - Two Column Layout */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Step 4: Import your data (6 min)
          </h2>
          <div className="flex gap-8 items-start">
            <div className="w-[40%]">
              <p className="text-base text-gray-700 leading-relaxed">
                Learn how to bring in your own grant data from your spreadsheets to get started.{' '}
                <a href="#" className="text-blue-600 hover:underline">Read this to learn more</a> or watch this short video.
              </p>
            </div>
            <div className="w-[60%]">
              <div className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <iframe 
                  src="https://embed.eu.guidde.com/playbooks/ja7ugfPtJH1iDVNiRABFv6?mode=videoOnly"
                  className="w-full aspect-video border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        {/* Step 5 - Two Column Layout */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Step 5: Automate your work (5 min)
          </h2>
          <div className="flex gap-8 items-start">
            <div className="w-[40%]">
              <p className="text-base text-gray-700 leading-relaxed">
                The ability to set up automation is in your{' '}
                <a href="https://monday.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  monday.com
                </a>{' '}
                account is one of our most popular features.{' '}
                <a href="https://support.monday.com/hc/en-us/articles/360001222900-monday-com-Automations" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Read this to learn why
                </a>{' '}
                and how you should set up your own, or watch this video.
              </p>
            </div>
            <div className="w-[60%]">
              <div className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <iframe 
                  src="https://embed.eu.guidde.com/playbooks/ja7ugfPtJH1iDVNiRABFv6?mode=videoOnly"
                  className="w-full aspect-video border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-12 py-8 px-8 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            📣 Need more help from our platform experts?
          </h3>
          <p className="text-base text-gray-700">
            <a href="#" className="text-blue-600 hover:underline font-medium">
              Click here to join a free consultation and online training sessions 🗓
            </a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default DonorGettingStarted;