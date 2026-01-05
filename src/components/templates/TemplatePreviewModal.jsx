import React, { useState } from 'react';
import { X } from 'lucide-react';


const TemplatePreviewModal = ({ template, onClose, onUseTemplate }) => {
  const [customName, setCustomName] = useState(template.boardStructure.name);

  const handleUse = () => {
    onUseTemplate(template.templateId, customName);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-lg overflow-hidden">
              <img
                src={template.thumbnail}
                alt={template.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{template.name}</h2>
              <p className="text-sm text-gray-500">by {template.creator}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {/* Description */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">About this template</h3>
            <p className="text-gray-600">{template.description}</p>
          </div>

          {/* Preview Image */}
          <div className="mb-6">
            <img
              src={template.thumbnail}
              alt="Template preview"
              className="w-full rounded-lg border"
            />
          </div>

          {/* Columns Info */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-3">Included Columns</h3>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(template.boardStructure.columns)
                .filter(([_, value]) => value)
                .map(([key, _]) => (
                  <div
                    key={key}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {/* Integrations */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-3">Integrations</h3>
            <div className="flex gap-3 flex-wrap">
              {template.integrations.map((integration, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
                  <img
                    src={integration.icon}
                    alt={integration.name}
                    className="w-6 h-6 object-contain"
                  />
                  <span className="text-sm">{integration.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Board Name Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Board Name (Optional)
            </label>
            <input
              type="text"
              value={customName}
              onChange={(e) => setCustomName(e.target.value)}
              placeholder="Enter custom board name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleUse}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Use Template
          </button>
        </div>
      </div>
    </div>
  );
};
export default TemplatePreviewModal;