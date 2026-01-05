import React, { useState } from 'react';
import { Play, BookOpen, CheckCircle2, Circle, Star, Search, Upload, UserPlus, MoreHorizontal, Maximize2 } from 'lucide-react';

export default function PMlearningCenter() {
  const [completedTasks, setCompletedTasks] = useState([7]);
  const [searchQuery, setSearchQuery] = useState('');

  const tasks = [
    "Import your data; Contacts, Leads, Deals",
    "Sync your email",
    "Invite someone to try monday.com with you",
    "Customize the template you've added",
    "Checkout automations",
    "Checkout integrations"
  ];

  const toggleTask = (index) => {
    setCompletedTasks(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const articles = [
    { title: "monday.com as a CRM", url: "#" },
    { title: "Import your data from Excel/CSV", url: "#" },
    { title: "Manage your sales pipeline with monday.com", url: "#" },
    { title: "Build your sales workflow with monday.com", url: "#" },
    { title: "Manage your leads with monday.com", url: "#" },
    { title: "Gmail integration", url: "#" },
    { title: "Outlook Integration", url: "#" },
    { title: "How to create and Embed forms", url: "#" },
    { title: "How to connect boards", url: "#" },
    { title: "The chart view", url: "#" }
  ];

  const videos = [
    { title: "YouTube Video 1", embed: "3vLOwSq7UOc" },
    { title: "YouTube Video 2", embed: "3Km6tS0063w" },
    { title: "YouTube Video 3", embed: "vssxuIEn9V8" },
    { title: "YouTube Video 4", embed: "ihx24g34yWs" },
    { title: "YouTube Video 5", embed: "UG6_IxbPV8Y" },
    { title: "YouTube Video 6", embed: "FFL5ogHu9sM" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Exact Monday.com style */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="px-6 py-3">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-semibold text-gray-900">Learning Center</h1>
              <button className="p-1.5 hover:bg-gray-100 rounded">
                <Star className="w-5 h-5 text-gray-600" />
              </button>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded flex items-center gap-1.5">
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M14.1176 5.83908C12.8643 5.05635 11.4319 4.50553 9.97041 4.52918C8.50891 4.50553 7.07654 5.05635 5.82346 5.83911C4.56124 6.62759 3.42984 7.68258 2.55885 8.74485L2.55885 8.74485L2.55686 8.74729C2.36883 8.97859 2.03906 9.43301 2.03906 9.99895C2.03906 10.5649 2.36883 11.0193 2.55686 11.2506L2.55686 11.2506L2.55871 11.2529C3.41048 12.2923 4.53011 13.3478 5.7911 14.1425C7.04329 14.9316 8.48556 15.4948 9.97041 15.4708C11.4553 15.4948 12.8977 14.9317 14.1501 14.1426C15.4114 13.3479 16.5315 12.2925 17.3838 11.2531L17.3859 11.2506L17.4054 11.2267L17.4054 11.2267C17.4846 11.1295 17.6104 10.9754 17.7138 10.8049C17.8251 10.6213 17.9609 10.3405 17.9609 9.99895C17.9609 9.65745 17.8251 9.37655 17.7138 9.19303C17.6104 9.02248 17.4847 8.86839 17.4054 8.77123L17.4054 8.77121L17.3859 8.74729L17.3859 8.74728L17.3836 8.74452C16.5118 7.68243 15.38 6.62751 14.1176 5.83908Z" />
                </svg>
                View only
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 flex items-center gap-1.5">
                <Upload className="w-4 h-4" />
                Export
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.442 12.76a.77.77 0 0 0 1.116 0l4.21-4.363a.84.84 0 0 0 0-1.157.77.77 0 0 0-1.116 0L10 11.025 6.348 7.24a.77.77 0 0 0-1.117 0 .84.84 0 0 0 0 1.157l4.21 4.363Z"></path>
                </svg>
              </button>
              <button className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 flex items-center gap-1.5">
                <UserPlus className="w-4 h-4" />
                Invite
              </button>
              <button className="p-1.5 text-gray-700 hover:bg-gray-100 rounded">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Toolbar */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Type to filter"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-3 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 w-48"
                />
              </div>
              <div className="h-6 w-px bg-gray-300"></div>
              <button className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded flex items-center gap-1.5">
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M7.51318 5.43037C8.17316 4.77038 9.06829 4.39961 10.0017 4.39961C10.935 4.39961 11.8301 4.77038 12.4901 5.43037C13.1501 6.09035 13.5209 6.98548 13.5209 7.91884C13.5209 8.8522 13.1501 9.74733 12.4901 10.4073C11.8301 11.0673 10.935 11.4381 10.0017 11.4381C9.06829 11.4381 8.17316 11.0673 7.51318 10.4073C6.8532 9.74733 6.48242 8.8522 6.48242 7.91884C6.48242 6.98548 6.8532 6.09035 7.51318 5.43037Z" />
                </svg>
                People
              </button>
              <button className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded flex items-center gap-1.5 opacity-50 cursor-not-allowed">
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.8571 2.87669C18.107 3.41157 18.0246 4.04275 17.6457 4.49555L12.4892 10.6589V15.3856C12.4892 16.0185 12.097 16.5852 11.5048 16.8082L9.56669 17.5381C9.09976 17.7139 8.57627 17.6494 8.16598 17.3655C7.75569 17.0816 7.51084 16.6144 7.51084 16.1155V10.6589L2.35425 4.49555C1.97542 4.04275 1.89302 3.41157 2.14291 2.87669C2.39279 2.34182 2.92977 2 3.52013 2H16.4799C17.0702 2 17.6072 2.34182 17.8571 2.87669Z" />
                </svg>
                Filter
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-6 py-6">
        <div className="space-y-6">
          {/* Title Section */}
          <div className="bg-white rounded-lg p-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Customer Projects Learning Center
            </h2>
          </div>

          {/* Essentials Section */}
          <div className="bg-white rounded-lg p-12 text-center">
            <h2 className="text-6xl font-bold text-gray-900">Essentials ☕️</h2>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-12 gap-6">
            {/* Video 1 */}
            <div className="col-span-5 bg-white rounded-lg overflow-hidden">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <h3 className="font-medium text-gray-900">YouTube</h3>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Maximize2 className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="p-4">
                <div className="aspect-video bg-gray-900 rounded overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videos[2].embed}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* Video 2 */}
            <div className="col-span-4 bg-white rounded-lg overflow-hidden">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <h3 className="font-medium text-gray-900">YouTube</h3>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Maximize2 className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="p-4">
                <div className="aspect-video bg-gray-900 rounded overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videos[1].embed}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* Steps to Success - Right side */}
            <div className="col-span-3 row-span-2 bg-white rounded-lg p-6">
              <div className="mb-4 pb-4 border-b border-gray-200 flex items-center justify-between">
                <h3 className="font-medium text-gray-900">Steps to success</h3>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Maximize2 className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="space-y-2">
                {tasks.map((task, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-2 rounded hover:bg-gray-50 cursor-pointer group"
                    onClick={() => toggleTask(index)}
                  >
                    <div className="mt-0.5">
                      {completedTasks.includes(index) ? (
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      ) : (
                        <Circle className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                    <span className={`text-sm flex-1 ${completedTasks.includes(index) ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                      {task}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-2">
                  Completed ({completedTasks.length})
                </p>
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Create a new task"
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Video 3 */}
            <div className="col-span-5 bg-white rounded-lg overflow-hidden">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <h3 className="font-medium text-gray-900">YouTube</h3>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Maximize2 className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="p-4">
                <div className="aspect-video bg-gray-900 rounded overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videos[3].embed}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* Video 4 */}
            <div className="col-span-4 bg-white rounded-lg overflow-hidden">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <h3 className="font-medium text-gray-900">YouTube</h3>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Maximize2 className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="p-4">
                <div className="aspect-video bg-gray-900 rounded overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videos[0].embed}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Webinars Section */}
          <div className="bg-white rounded-lg p-12 text-center">
            <h2 className="text-6xl font-bold text-gray-900 mb-3">Webinars🍿</h2>
            <a href="#" className="text-lg text-blue-600 hover:underline">
              Click here to see all webinars
            </a>
          </div>

          {/* More Videos + Articles */}
          <div className="grid grid-cols-12 gap-6">
            {/* Video 5 */}
            <div className="col-span-5 bg-white rounded-lg overflow-hidden">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <h3 className="font-medium text-gray-900">YouTube</h3>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Maximize2 className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="p-4">
                <div className="aspect-video bg-gray-900 rounded overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videos[4].embed}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* Video 6 */}
            <div className="col-span-4 bg-white rounded-lg overflow-hidden">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <h3 className="font-medium text-gray-900">YouTube</h3>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Maximize2 className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="p-4">
                <div className="aspect-video bg-gray-900 rounded overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videos[5].embed}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* Articles */}
            <div className="col-span-3 bg-white rounded-lg p-6">
              <div className="mb-4 pb-4 border-b border-gray-200 flex items-center justify-between">
                <h3 className="font-medium text-gray-900">Articles worth checking out</h3>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <MoreHorizontal className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <ul className="space-y-3">
                {articles.map((article, index) => (
                  <li key={index}>
                    <a
                      href={article.url}
                      className="text-sm text-blue-600 hover:underline flex items-start gap-2"
                    >
                      <span className="mt-1">•</span>
                      <span>{article.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Want to Learn More */}
          <div className="bg-white rounded-lg p-12 text-center">
            <h2 className="text-6xl font-bold text-gray-900">Want to learn more?</h2>
          </div>

          {/* Embed Everything */}
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="font-medium text-gray-900">Embed everything</h3>
              <button className="p-1 hover:bg-gray-100 rounded">
                <Maximize2 className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            <div className="p-6">
              <div className="h-96 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <BookOpen className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Interactive Content Area</p>
                  <p className="text-sm text-gray-500 mt-2">Forms, charts, or embedded content goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}