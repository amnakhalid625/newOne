import React from 'react';

const ProductsShowcase = () => {
  const products = [
    {
      id: 'work-management',
      name: 'futures',
      subName: 'work management',
      description: 'For projects, resources, & goals',
      color: '#6161FF',
      signupUrl: 'https://auth.monday.com/p/core/users/sign_up_new',
      hasLearnMore: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none">
          <rect width="50" height="50" rx="3.85125" fill="#6161FF"></rect>
          <path d="M27.9516 25.5842C27.9516 23.9286 26.6047 22.583 24.9504 22.583C23.296 22.583 21.9492 23.9298 21.9492 25.5842C21.9492 27.2385 23.296 28.5854 24.9504 28.5854C26.6047 28.5854 27.9516 27.2385 27.9516 25.5842Z" fill="white"></path>
          <path d="M24.0744 20.8102C24.3357 20.8564 24.6299 20.8783 24.9496 20.8783C25.2693 20.8783 25.5646 20.8552 25.8248 20.809C26.3025 20.7251 26.706 20.4066 26.9054 19.9569C27.3029 19.0562 27.9714 17.3714 27.9714 16.2191C27.9714 14.5526 26.6161 13.1973 24.9496 13.1973C23.2831 13.1973 21.9277 14.5526 21.9277 16.2191C21.9277 17.3641 22.5951 19.0513 22.9938 19.9557C23.1919 20.4066 23.5967 20.7263 24.0744 20.809V20.8102Z" fill="white"></path>
          <path d="M21.7766 29.4414C21.5079 29.2663 21.249 29.1253 21.0047 29.022C20.5586 28.8312 20.0456 28.8786 19.6336 29.1472C18.8082 29.6857 17.3313 30.7323 16.7017 31.6999C15.7925 33.0965 16.1899 34.9721 17.5866 35.8801C18.0947 36.2107 18.6648 36.3688 19.23 36.3688C20.2182 36.3688 21.1895 35.885 21.7668 34.9964C22.3916 34.0373 22.7527 32.2578 22.9119 31.2829C22.9921 30.7967 22.8268 30.3081 22.4719 29.9774C22.2774 29.7975 22.044 29.6164 21.7754 29.4426L21.7766 29.4414Z" fill="white"></path>
          <path d="M30.2644 29.1453C29.8523 28.8766 29.3405 28.8292 28.8932 29.0201C28.6501 29.1246 28.39 29.2656 28.1214 29.4394C27.8527 29.6132 27.6193 29.7944 27.4248 29.9743C27.0699 30.3049 26.9058 30.7923 26.9848 31.2798C27.1441 32.2546 27.5051 34.0342 28.1299 34.9932C28.7085 35.8818 29.6785 36.3656 30.6667 36.3656C31.2319 36.3656 31.802 36.2076 32.3101 35.8769C33.7068 34.9677 34.103 33.0933 33.195 31.6967C32.5666 30.7303 31.0885 29.6825 30.2631 29.144L30.2644 29.1453Z" fill="white"></path>
          <path d="M19.0199 25.8152C19.4903 25.8152 19.9279 25.594 20.2014 25.2172C20.357 25.0032 20.5065 24.748 20.6463 24.4611C20.7873 24.173 20.8955 23.8983 20.9684 23.6443C21.1034 23.1787 20.994 22.6755 20.6755 22.2986C20.0398 21.5462 18.8194 20.2079 17.7837 19.7023C16.2862 18.9717 14.4738 19.5953 13.7433 21.0928C13.0127 22.5904 13.6363 24.4028 15.1338 25.1333C16.1622 25.6353 17.9721 25.7751 18.9604 25.814C18.9798 25.814 18.9993 25.814 19.0199 25.814V25.8152Z" fill="white"></path>
          <path d="M36.1554 21.0909C35.4248 19.5933 33.6124 18.9698 32.1149 19.7003C31.078 20.206 29.8576 21.5443 29.2219 22.2967C28.9046 22.6735 28.7952 23.1755 28.929 23.6423C29.0019 23.8963 29.1101 24.1711 29.2511 24.4591C29.3909 24.7472 29.5416 25.0013 29.696 25.2152C29.9695 25.592 30.4083 25.8133 30.8775 25.8133C30.8969 25.8133 30.9164 25.8133 30.937 25.8133C31.9241 25.7744 33.734 25.6346 34.7623 25.1326C36.2599 24.402 36.8835 22.5896 36.1529 21.0921L36.1554 21.0909Z" fill="white"></path>
        </svg>
      )
    },
    {
      id: 'crm',
      name: 'futures',
      subName: 'CRM',
      description: 'For customer-facing teams',
      color: '#00D2D2',
      signupUrl: 'https://auth.monday.com/p/crm/users/sign_up_new',
      learnMoreUrl: 'https://monday.com/crm',
      hasLearnMore: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none">
          <rect width="50" height="50" rx="3.85125" fill="#00D2D2"></rect>
          <path d="M18.517 34.1056C13.1455 34.1056 8.77441 29.9473 8.77441 24.8371C8.77441 19.727 13.1455 15.5723 18.517 15.5723C18.5996 15.5723 26.9188 15.5528 28.0152 23.359C28.0614 23.6921 27.8633 23.9303 27.5643 23.9303H19.7653C19.4688 23.9303 19.2269 24.1686 19.2269 24.4652C19.2293 25.8716 19.5453 29.7722 22.7276 32.7637C22.8747 32.901 22.8431 33.1466 22.6596 33.2292C21.3723 33.8054 19.9659 34.1056 18.5158 34.1056H18.517Z" fill="white"></path>
          <path d="M31.4713 34.2826C29.4365 34.2826 27.4892 33.6919 25.8385 32.5748C23.7259 31.149 22.3122 28.9914 21.871 26.6089C21.8053 26.2515 22.0837 25.9209 22.4471 25.9209H30.2448C30.7383 25.9209 30.6994 25.2621 30.6994 24.8367C30.6994 23.8825 30.3992 20.3075 27.1829 17.1872C27.0103 17.0207 27.0613 16.7375 27.2813 16.6415C28.5953 16.0653 30.054 15.748 31.4701 15.748C36.844 15.748 41.2163 19.904 41.2163 25.0129C41.2163 30.1218 36.844 34.2814 31.4701 34.2814L31.4713 34.2826Z" fill="white"></path>
        </svg>
      )
    },
    {
      id: 'dev',
      name: 'futures',
      subName: 'dev',
      description: 'For development & product teams',
      color: '#00C875',
      signupUrl: 'https://auth.monday.com/p/software/users/sign_up_new',
      learnMoreUrl: 'https://monday.com/dev',
      hasLearnMore: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none">
          <rect width="50" height="50" rx="3.85125" fill="#00C875"></rect>
          <path d="M17.6107 35.029C15.6597 33.9217 14.0771 32.2807 13.0341 30.2848L13.0293 30.2751C12.7765 29.829 12.5893 29.6235 12.1504 29.5895C12.0374 29.581 11.8551 29.5761 11.5925 29.5773H11.5743C9.91263 29.5773 8.56581 30.7759 8.37254 32.4278L8.37012 33.1449L8.37254 33.1826C8.56338 34.8115 9.94303 36.0404 11.5828 36.0404L17.3469 36.0367C17.5949 36.0367 17.8051 35.8763 17.8671 35.6368C17.9303 35.3961 17.827 35.153 17.6107 35.029Z" fill="white"></path>
          <path d="M41.3399 32.2858L39.3719 30.0845L39.3598 30.0723C38.9185 29.6311 38.7933 29.5764 38.2366 29.5764L24.8085 29.5691C22.8004 29.5691 20.9857 28.2818 20.3949 26.4391C19.9208 24.9585 20.1542 23.4136 21.0367 22.2005C21.8888 21.0287 23.2466 20.314 24.6882 20.2726H24.8158C27.3843 20.2799 29.4738 22.3658 29.4738 24.9221C29.4738 25.9468 28.9414 26.6785 28.5524 27.2134L28.4454 27.3604C28.3287 27.5233 28.3142 27.7348 28.4053 27.9123C28.4977 28.091 28.6788 28.2016 28.8806 28.2016H34.906C35.2148 28.2016 35.481 28.0023 35.5685 27.7069C35.7472 27.1052 35.9295 26.3041 35.9295 24.9221C35.9295 18.9112 31.1135 13.9956 25.1306 13.8217V13.8145H24.8085C18.681 13.8217 13.6973 18.8043 13.6973 24.9184C13.6973 26.7004 14.1324 28.4727 14.9553 30.0456C16.8844 33.7384 20.6599 36.0321 24.8183 36.0321L38.2318 36.0394C38.7775 36.0394 38.9356 35.9701 39.3622 35.5435L41.2524 33.4442L41.3411 33.3373C41.7058 32.8936 41.707 32.7161 41.3423 32.287L41.3399 32.2858Z" fill="white"></path>
        </svg>
      )
    },
    {
      id: 'service',
      name: 'futures',
      subName: 'service',
      description: 'For IT & support teams',
      color: '#FB275D',
      signupUrl: 'https://auth.monday.com/p/service/users/sign_up_new',
      learnMoreUrl: '/w/service',
      hasLearnMore: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none">
          <rect width="50" height="49.8756" rx="3.85125" fill="#FB275D"></rect>
          <path fillRule="evenodd" clipRule="evenodd" d="M32.9289 19.9827C34.0387 19.6825 34.9625 18.9763 35.5277 17.9953C36.0966 17.0071 36.2424 15.8438 35.9361 14.7194C35.6322 13.595 34.9187 12.6664 33.9305 12.106C32.9471 11.5481 31.7899 11.4083 30.6741 11.711C29.5339 12.0197 27.3556 12.6141 25.1312 13.2207C22.7013 13.8843 20.2167 14.5614 18.9672 14.8993C16.5738 15.5484 15.3084 17.7631 15.9587 20.1638C16.8108 23.3084 22.1689 25.9 22.615 26.0337C22.7159 26.0641 22.8314 26.0495 22.9092 25.9997C22.9614 25.9656 22.9906 25.9206 22.9979 25.8623C23.0161 25.7249 22.9468 24.8546 22.897 24.2189C22.8374 23.4652 22.8156 23.1723 22.8265 23.0933C22.8581 22.8623 23.0161 22.6824 23.2386 22.6241C23.2921 22.6095 24.0992 22.3895 25.2418 22.0783C27.5209 21.456 31.3353 20.4142 32.9289 19.9839V19.9827Z" fill="white"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M17.2982 29.8742C16.1884 30.1744 15.2658 30.8807 14.6993 31.8616C14.1305 32.8498 13.9846 34.0131 14.2897 35.1387C14.5936 36.2643 15.3059 37.193 16.2953 37.7533C17.2787 38.31 18.4359 38.4498 19.5518 38.1472C20.7527 37.8226 23.0999 37.182 25.4411 36.5427C27.7579 35.9106 30.0686 35.2797 31.2587 34.9576C33.6521 34.3085 34.9174 32.0938 34.2671 29.6931C33.4162 26.5545 28.0557 23.9691 27.6084 23.8342C27.5731 23.8232 27.5355 23.8184 27.4978 23.8184C27.4309 23.8184 27.3653 23.8354 27.3142 23.8682C27.262 23.9022 27.2328 23.9472 27.2255 24.0056C27.2073 24.1429 27.2765 25.0084 27.3276 25.6405C27.3844 26.3917 27.4103 26.6834 27.3993 26.7624C27.3677 26.9934 27.2097 27.1733 26.9872 27.2316C26.9508 27.2413 26.5314 27.3556 25.8811 27.5331C23.6846 28.1323 19.1154 29.3807 17.2969 29.8718L17.2982 29.8742Z" fill="white"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="min-h-screen px-4 py-16">
      {/* Main Container - max-width 120rem (1920px) with centered content */}
      <div className="w-full max-w-[120rem] mx-auto bg-black rounded-[2.5rem] px-8 py-24 flex flex-col items-center gap-12">

        {/* Header Section - max-width 60rem (960px) */}
        <div className="w-full max-w-[60rem] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch justify-center mb-16">

            {/* Left Side - Heading */}
            <div className="max-w-[18rem]">
              <h2 className="text-white text-[4rem] font-extralight leading-[1.2] tracking-[-0.05rem] mt-0 mb-0">
                Work together
              </h2>
            </div>

            {/* Right Side - Description & CTA */}
            <div className="flex flex-col gap-8 max-w-[28rem] justify-between items-start">
              <p className="text-white text-base leading-relaxed">
                Great work doesn't happen alone. Let our experts show you how our product suite eliminates silos and unifies strategy.
              </p>

              {/* Talk to Sales Link with animated underline */}
              <a
                href="https://monday.com/sales/contact-us"
                className="group inline-flex items-center relative w-fit border-b border-white/40 hover:border-white transition-colors pb-1"
              >
                <span className="text-white">Talk to sales</span>
                {/* Animated underline that expands on hover */}
                <span className="absolute bottom-[-1px] left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </div>

        {/* Products Grid - 4 columns on desktop, responsive on mobile */}
        <div className="w-full max-w-[86rem] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group border border-gray-600 rounded-2xl p-7 flex flex-col hover:border-gray-400 transition-all duration-200"
            >
              {/* Product Card Top Section */}
              <div className="mb-12">
                {/* Icon & Title Row */}
                <div className="flex items-center gap-3 mb-6 relative">
                  {/* Product Icon - 48x48px */}
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    {product.icon}
                  </div>

                  {/* Product Name */}
                  <div className="leading-tight">
                    <div className="text-white text-base font-semibold">
                      {product.name}
                    </div>
                    <div className="text-white text-base font-light">
                      {product.subName}
                    </div>
                  </div>
                </div>

                {/* Product Description */}
                <p className="text-gray-300 text-base font-light leading-normal">
                  {product.description}
                </p>
              </div>

              {/* Action Buttons - Auto pushed to bottom with mt-auto */}
              <div className="mt-auto flex flex-wrap gap-6 items-center justify-center w-full">
                {/* Get Started Button */}
                <a
                  href={product.signupUrl}
                  className="inline-flex items-center justify-center border border-white text-white rounded-full px-6 py-2.5 text-sm font-normal hover:bg-white hover:text-black transition-all duration-200"
                >
                  Get Started
                </a>

                {/* Learn More Link (conditional) */}
                {product.hasLearnMore && (
                  <a
                    href={product.learnMoreUrl}
                    className="group/link relative inline-flex items-center text-sm text-white border-b border-white/40 hover:border-white transition-colors pb-0.5"
                  >
                    <span>Learn more</span>
                    {/* Animated underline */}
                    <span className="absolute bottom-[-1px] left-0 w-0 h-[1px] bg-white group-hover/link:w-full transition-all duration-300"></span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;