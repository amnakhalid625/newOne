import React, { useState, useEffect } from 'react';
import { Search, X, Download, ArrowUpDown } from 'lucide-react';
import TemplatePreviewModal from './TemplatePreviewModal';


// Template Sidebar Component
const TemplateSidebar = ({ selectedCategory, onCategorySelect }) => {
  const categories = [
    'Forms',
    'Sales & CRM',
    'Freelancers',
    'Design',
    'Software Development',
    'Product Management',
    'HR',
    'Manufacturing',
    'Operations',
    'Startup',
    'Education',
    'Real Estate',
    'Venture Capital',
    'Construction',
    'Nonprofits'
  ];

  return (
    <div className="w-64 bg-white border-r overflow-y-auto h-full">
      <div className="p-4">
        {/* Explore Section */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2 px-3">
            Explore
          </h3>
          <div className="space-y-1">
            <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 text-sm text-gray-700">
              All templates
            </button>
            <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 text-sm text-gray-700">
              Recommended for you
            </button>
            <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 text-sm text-gray-700">
              Created by me
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t my-4"></div>

        {/* General Templates */}
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2 px-3">
            General templates
          </h3>
          <div className="space-y-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategorySelect(category)}
                className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-50 text-blue-600 font-medium'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t my-4"></div>

        {/* Products Section */}
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2 px-3">
            Products in your account
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TemplateSidebar;