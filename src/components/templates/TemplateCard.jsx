import React from 'react';



const TemplateCard = ({ template, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all duration-100 cursor-pointer group"
    >
      {/* Thumbnail */}
      <div className="relative h-36 bg-gray-100 overflow-hidden">
        <img
          src={template.thumbnail}
          alt={template.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col h-[200px]">
        {/* Title & Creator */}
        <div className="flex-1">
          <h3 className="font-semibold text-base mb-1 truncate text-gray-900">
            {template.name}
          </h3>
          <p className="text-xs text-gray-500 mb-3">by {template.creator}</p>

          {/* Description */}
          <p className="text-sm text-gray-600 line-clamp-2 leading-snug">
            {template.description}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          {/* Downloads */}
          <div className="flex items-center gap-1.5 text-sm text-gray-600">
            <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" className="text-gray-500">
              <path d="M10.75 2.69922C10.75 2.28501 10.4142 1.94922 10 1.94922C9.58579 1.94922 9.25 2.28501 9.25 2.69922L9.25 10.5345L6.53236 7.79593C6.24059 7.50191 5.76572 7.50009 5.47171 7.79186C5.17769 8.08363 5.17587 8.5585 5.46764 8.85251L9.59471 13.0113C9.73552 13.1532 9.92716 13.2331 10.1271 13.2331C10.327 13.2331 10.5186 13.1532 10.6594 13.0113L14.7865 8.85251C15.0783 8.5585 15.0764 8.08363 14.7824 7.79186C14.4884 7.50009 14.0135 7.50191 13.7218 7.79593L10.75 10.7906L10.75 2.69922ZM3.75 16.3419L3.75 12.0183C3.75 11.6041 3.41421 11.2683 3 11.2683C2.58579 11.2683 2.25 11.6041 2.25 12.0183V16.3807C2.25 16.395 2.25041 16.4093 2.25123 16.4236C2.2777 16.885 2.51237 17.2905 2.85877 17.564C3.19773 17.8316 3.62517 17.9614 4.04876 17.9483L16.4514 17.9483C16.8749 17.9612 17.3022 17.8313 17.641 17.5638C17.9873 17.2905 18.2219 16.8853 18.2487 16.4242C18.2496 16.4097 18.25 16.3952 18.25 16.3807V12.0183C18.25 11.6041 17.9142 11.2683 17.5 11.2683C17.0858 11.2683 16.75 11.6041 16.75 12.0183V16.3414C16.7494 16.3429 16.7486 16.3448 16.7473 16.3471C16.7429 16.3552 16.7327 16.3698 16.7116 16.3865C16.6667 16.4219 16.5887 16.4526 16.4937 16.4489C16.4839 16.4485 16.4741 16.4483 16.4643 16.4483L4.03571 16.4483C4.02576 16.4483 4.01581 16.4485 4.00586 16.4489C3.91092 16.4527 3.83301 16.422 3.78822 16.3867C3.76714 16.37 3.75703 16.3555 3.75267 16.3475C3.75142 16.3452 3.75057 16.3433 3.75 16.3419Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
            <span className="text-sm">{template.downloads}</span>
          </div>

          {/* Integrations */}
          <div className="flex -space-x-1.5">
            {template.integrations.slice(0, 3).map((integration, index) => (
              <div
                key={index}
                className="w-7 h-7 rounded-full border-2 border-white bg-white shadow-sm flex items-center justify-center overflow-hidden"
                title={integration.name}
              >
                <img
                  src={integration.icon}
                  alt={integration.name}
                  className="w-5 h-5 object-contain"
                />
              </div>
            ))}
            {template.integrations.length > 3 && (
              <div className="w-7 h-7 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600 shadow-sm">
                +{template.integrations.length - 3}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TemplateCard;