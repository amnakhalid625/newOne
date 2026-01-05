
import React from 'react';
import TemplateCard from './TemplateCard';

const TemplateGrid = ({ templates, onTemplateClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {templates.map((template) => (
        <TemplateCard
          key={template.templateId}
          template={template}
          onClick={() => onTemplateClick(template)}
        />
      ))}
    </div>
  );
};
export default TemplateGrid;