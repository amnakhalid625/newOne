
import React, { useState, useEffect } from 'react';
import { X, Search, ArrowUpDown } from 'lucide-react';
import TemplateSidebar from './TemplateSidebar';
import TemplateGrid from './TemplateGrid';
import TemplatePreviewModal from './TemplatePreviewModal';

const TemplateCenterModal = ({ isOpen, onClose }) => {
  const [templates, setTemplates] = useState([]);
  const [filteredTemplates, setFilteredTemplates] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Nonprofits');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [loading, setLoading] = useState(false);

  // Mock data for demonstration
  useEffect(() => {
    if (isOpen) {
      loadMockData();
    }
  }, [isOpen, selectedCategory]);

  const loadMockData = () => {
    setLoading(true);
    setTimeout(() => {
      const mockTemplates = [
        {
          templateId: '1',
          name: 'Donor Management',
          creator: 'monday.com',
          description: 'Centralize all donor data for easy management and donor engagement.',
          thumbnail: 'https://dapulse-res.cloudinary.com/image/upload/v1673356827/template_center/nonprofit/fundraising_crm/thumbnail/Fundraising_CRM.png',
          downloads: '11.1K',
          integrations: [
            { name: 'Gmail', icon: 'https://dapulse-res.cloudinary.com/image/upload/monday_platform/template-store/integrations/gmail.png' },
            { name: 'Excel', icon: 'https://dapulse-res.cloudinary.com/image/upload/monday_platform/template-store/integrations/excel.png' },
            { name: 'Google Calendar', icon: 'https://dapulse-res.cloudinary.com/image/upload/monday_platform/template-store/integrations/google_calendar.png' },
            { name: 'Outlook', icon: 'https://dapulse-res.cloudinary.com/image/upload/monday_platform/template-store/integrations/outlook.png' },
            { name: 'Slack', icon: 'https://dapulse-res.cloudinary.com/image/upload/monday_platform/template-store/integrations/slack.png' },
            { name: 'Zoom', icon: 'https://dapulse-res.cloudinary.com/image/upload/monday_platform/template-store/integrations/zoom.png' }
          ],
          boardStructure: {
            name: 'Donor Management',
            columns: {
              status: true,
              date: true,
              text: true,
              person: true,
              numbers: true
            }
          }
        },
        {
          templateId: '2',
          name: 'Grants Management',
          creator: 'monday.com',
          description: 'Manage your grant pipeline from A-Z and easily generate reports.',
          thumbnail: 'https://dapulse-res.cloudinary.com/image/upload/v1673356908/template_center/nonprofit/grants_management/thumbnail/Grants_Management.png',
          downloads: '12.5K',
          integrations: [
            { name: 'Outlook', icon: 'https://dapulse-res.cloudinary.com/image/upload/monday_platform/template-store/integrations/outlook.png' },
            { name: 'Gmail', icon: 'https://dapulse-res.cloudinary.com/image/upload/monday_platform/template-store/integrations/gmail.png' },
            { name: 'Google Drive', icon: 'https://dapulse-res.cloudinary.com/image/upload/monday_platform/template-store/integrations/google_drive.png' },
            { name: 'Dropbox', icon: 'https://dapulse-res.cloudinary.com/image/upload/monday_platform/template-store/integrations/dropbox.png' },
            { name: 'Slack', icon: 'https://dapulse-res.cloudinary.com/image/upload/monday_platform/template-store/integrations/slack.png' },
            { name: 'Teams', icon: 'https://dapulse-res.cloudinary.com/image/upload/monday_platform/template-store/integrations/microsoft_teams.png' }
          ],
          boardStructure: {
            name: 'Grants Management',
            columns: {
              status: true,
              date: true,
              text: true,
              timeline: true,
              numbers: true
            }
          }
        },
        {
          templateId: '3',
          name: 'monday Fundraising',
          creator: 'monday.com',
          description: 'Streamline fundraising processes to acquire and build stronger donor relationships, raise more funds, never miss a grant deadline, and create a lasting impact.',
          thumbnail: 'https://dapulse-res.cloudinary.com/image/upload/v1673356827/template_center/nonprofit/fundraising_crm/thumbnail/Fundraising_CRM.png',
          downloads: '3.4K',
          integrations: [
            { name: 'Gmail', icon: 'https://dapulse-res.cloudinary.com/image/upload/monday_platform/template-store/integrations/gmail.png' },
            { name: 'Outlook', icon: 'https://dapulse-res.cloudinary.com/image/upload/monday_platform/template-store/integrations/outlook.png' },
            { name: 'Excel', icon: 'https://dapulse-res.cloudinary.com/image/upload/monday_platform/template-store/integrations/excel.png' },
            { name: 'Mailchimp', icon: 'https://dapulse-res.cloudinary.com/image/upload/monday_platform/template-store/integrations/mailchimp.png' },
            { name: 'Stripe', icon: 'https://dapulse-res.cloudinary.com/image/upload/monday_platform/template-store/integrations/stripe.png' },
            { name: 'PayPal', icon: 'https://dapulse-res.cloudinary.com/image/upload/monday_platform/template-store/integrations/paypal.png' }
          ],
          boardStructure: {
            name: 'monday Fundraising',
            columns: {
              status: true,
              date: true,
              person: true,
              numbers: true,
              dropdown: true
            }
          }
        },
        {
          templateId: '4',
          name: 'Volunteer Registration Management',
          creator: 'monday.com',
          description: 'Capture, connect, and manage all volunteer data in one place.',
          thumbnail: 'https://dapulse-res.cloudinary.com/image/upload/v1673357012/template_center/nonprofit/volunteer_registration_management/thumbnail/Volunteer_Registration_Man....png',
          downloads: '33.3K',
          integrations: [
            { name: 'Survey Monkey', icon: 'https://dapulse-res.cloudinary.com/image/upload/monday_platform/template-store/integrations/survey_monkey.png' },
            { name: 'Typeform', icon: 'https://dapulse-res.cloudinary.com/image/upload/monday_platform/template-store/integrations/typeform.png' },
            { name: 'Google Forms', icon: 'https://dapulse-res.cloudinary.com/image/upload/monday_platform/template-store/integrations/google_forms.png' },
            { name: 'Slack', icon: 'https://dapulse-res.cloudinary.com/image/upload/monday_platform/template-store/integrations/slack.png' },
            { name: 'Gmail', icon: 'https://dapulse-res.cloudinary.com/image/upload/monday_platform/template-store/integrations/gmail.png' }
          ],
          boardStructure: {
            name: 'Volunteer Registration Management',
            columns: {
              status: true,
              date: true,
              text: true,
              person: true,
              email: true
            }
          }
        }
      ];
      setTemplates(mockTemplates);
      setFilteredTemplates(mockTemplates);
      setLoading(false);
    }, 500);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSearchQuery('');
    loadMockData();
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setFilteredTemplates(templates);
      return;
    }
    const filtered = templates.filter(t => 
      t.name.toLowerCase().includes(query.toLowerCase()) ||
      t.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTemplates(filtered);
  };

  const handleTemplateClick = (template) => {
    setSelectedTemplate(template);
    setShowPreview(true);
  };

  const handleUseTemplate = (templateId, customName) => {
    alert(`Creating board: ${customName}`);
    setShowPreview(false);
    setSelectedTemplate(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-[95vw] h-[90vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Modal Header with Close Button */}
        <div className="flex items-center justify-between p-6 border-b bg-white">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 8L8 16L16 24" stroke="#0073EA" strokeWidth="2" strokeLinecap="round"/>
                <path d="M24 8L16 16L24 24" stroke="#00CA72" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h1 className="text-2xl">
              <span className="font-bold">Template</span> center
            </h1>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left Sidebar */}
          <TemplateSidebar
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
          />

          {/* Right Content */}
          <div className="flex-1 flex flex-col overflow-hidden bg-gray-50">
            {/* Search Bar */}
            <div className="bg-white border-b px-8 py-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by template name, creator or description"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => handleSearch('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Category Header with Sort */}
            <div className="bg-white border-b px-8 py-4 flex items-center justify-between">
              <h2 className="text-lg">
                <span className="font-bold">General templates |</span> {selectedCategory}
              </h2>
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
                <ArrowUpDown className="w-4 h-4" />
                <span>Sort by: Default</span>
              </button>
            </div>

            {/* Template Grid */}
            <div className="flex-1 overflow-y-auto px-8 py-6">
              {loading ? (
                <div className="flex justify-center items-center h-full">
                  <div className="text-xl text-gray-500">Loading templates...</div>
                </div>
              ) : filteredTemplates.length === 0 ? (
                <div className="flex justify-center items-center h-full">
                  <div className="text-xl text-gray-500">No templates found</div>
                </div>
              ) : (
                <TemplateGrid
                  templates={filteredTemplates}
                  onTemplateClick={handleTemplateClick}
                />
              )}
            </div>
          </div>
        </div>

        {/* Preview Modal */}
        {showPreview && selectedTemplate && (
          <TemplatePreviewModal
            template={selectedTemplate}
            onClose={() => {
              setShowPreview(false);
              setSelectedTemplate(null);
            }}
            onUseTemplate={handleUseTemplate}
          />
        )}
      </div>
    </div>
  );
};

// Export only the modal component
export default TemplateCenterModal;