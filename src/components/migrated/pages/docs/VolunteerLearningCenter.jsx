import React from 'react';
import { Star, Users, Calendar, Clock, Search, User, Eye, Share2, MoreVertical, Maximize2 } from 'lucide-react';

const VolunteerLearningCenter = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-semibold text-gray-900">
                Volunteer learning center
              </h1>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Star className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm rounded-md flex items-center gap-2">
                <Eye className="w-4 h-4" />
                View only
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Creator <strong>Staff Admin Hydro Planning</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Created <strong>Dec 08, 2025, 09:59</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Last updated <strong>Dec 08, 2025, 09:59</strong></span>
            </div>
          </div>

          {/* Toolbar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Type to filter"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="h-6 w-px bg-gray-300"></div>
              <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <User className="w-4 h-4" />
                People
              </button>
              <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 rounded-lg cursor-not-allowed opacity-60">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" />
                </svg>
                Filter
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                </svg>
                Export
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Share2 className="w-4 h-4" />
                Invite
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <MoreVertical className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 gap-6">
          
          {/* Welcome Message Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900"></h2>
              <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                <Maximize2 className="w-4 h-4 text-gray-500" />
              </button>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-blue-500">
                Welcome to the volunteer registration management template learning center!
              </h3>
              <p className="text-blue-500 text-base">
                Learn more on how to use this template to collect and manage your volunteer data in one, easy-to-use space.
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Volunteer registration management walkthrough video
              </h2>
              <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                <Maximize2 className="w-4 h-4 text-gray-500" />
              </button>
            </div>
            <div className="p-6">
              <div className="w-full bg-gray-100 rounded-lg overflow-hidden aspect-video">
                <iframe 
                  src="https://embed.eu.guidde.com/playbooks/dKMgKnUvJ27NScVRrka7iY?mode=videoOnly"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Two Column Grid */}
          <div className="grid grid-cols-2 gap-6">
            
            {/* Knowledge Base Articles */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  monday.com Knowledge Base articles
                </h2>
                <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                  <Maximize2 className="w-4 h-4 text-gray-500" />
                </button>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  {[
                    { title: 'How to Get Started with monday.com', url: 'https://support.monday.com/hc/en-us/articles/115005305649' },
                    { title: 'Creating online forms', url: 'https://support.monday.com/hc/en-us/articles/360000358700' },
                    { title: 'The board views', url: 'https://support.monday.com/hc/en-us/articles/360001267945' },
                    { title: 'How to communicate with my team?', url: 'https://support.monday.com/hc/en-us/articles/115005310865' },
                    { title: 'Excel Import and Export', url: 'https://support.monday.com/hc/en-us/articles/360000219209' },
                    { title: 'Integration - Collect volunteers from Facebook Ads', url: 'https://support.monday.com/hc/en-us/articles/360010488779' }
                  ].map((article, index) => (
                    <a
                      key={index}
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 hover:bg-gray-50 rounded-lg transition-colors group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-4 h-4 mt-1 bg-blue-100 rounded flex-shrink-0"></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 truncate">
                            {article.title}
                          </p>
                          <p className="text-xs text-gray-500 truncate mt-1">
                            {article.url}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <input
                    type="text"
                    placeholder="Create a new bookmark"
                    className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Template Feedback */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Template feedback
                </h2>
                <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                  <Maximize2 className="w-4 h-4 text-gray-500" />
                </button>
              </div>
              <div className="p-0 h-96">
                <iframe 
                  src="https://forms.monday.com/forms/embed/ad5352f0d7a609b761b3e5247e4b68f4?r=use1"
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Import and export with Excel
                </h2>
                <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                  <Maximize2 className="w-4 h-4 text-gray-500" />
                </button>
              </div>
              <div className="p-4">
                <div className="w-full bg-gray-100 rounded-lg overflow-hidden aspect-video">
                  <iframe 
                    src="https://www.youtube.com/embed/qCb4shmXhD0"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200">
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Creating online forms
                </h2>
                <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                  <Maximize2 className="w-4 h-4 text-gray-500" />
                </button>
              </div>
              <div className="p-4">
                <div className="w-full bg-gray-100 rounded-lg overflow-hidden aspect-video">
                  <iframe 
                    src="https://www.youtube.com/embed/JBIuxyQ_S60"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>

          {/* More Videos */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Save time with automations
                </h2>
                <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                  <Maximize2 className="w-4 h-4 text-gray-500" />
                </button>
              </div>
              <div className="p-4">
                <div className="w-full bg-gray-100 rounded-lg overflow-hidden aspect-video">
                  <iframe 
                    src="https://www.youtube.com/embed/ihx24g34yWs"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200">
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  monday.com basic demo
                </h2>
                <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                  <Maximize2 className="w-4 h-4 text-gray-500" />
                </button>
              </div>
              <div className="p-4">
                <div className="w-full bg-gray-100 rounded-lg overflow-hidden aspect-video">
                  <iframe 
                    src="https://www.youtube.com/embed/04IByHU87qU"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Learn More Section */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Learn more about monday.com
              </h2>
              <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                <Maximize2 className="w-4 h-4 text-gray-500" />
              </button>
            </div>
            <div className="p-0 h-[500px]">
              <iframe 
                src="https://view.monday.com/773408226-74e0fc78cdb62f9d04f6575ed83293ec"
                className="w-full h-full border-0"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VolunteerLearningCenter;