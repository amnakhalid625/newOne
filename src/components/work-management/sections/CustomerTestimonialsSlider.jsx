import React, { useState } from 'react';

export default function CustomerTestimonials() {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      logo: 'https://cdn.prod.website-files.com/656da6fea306219773d04208/664ddf2598bee29293a42051_HOLT%20Cat.svg',
      quote: 'We have dozens of complex projects going on at any given time futures.com has given us the visibility we need to get everyone on the same page and keep track of all the moving parts.',
      avatar: 'https://cdn.prod.website-files.com/656da6fea306219773d04208/66f931c7319410829f9822ef_Mask%20group.avif',
      name: 'Jason Doan',
      title: 'VP of Heavy Rental and Sales Operations',
      image: 'https://cdn.prod.website-files.com/656da6fea306219773d04208/66f70105ad5fd845e7682702_holt-cat-bg.avif'
    },
    {
      id: 2,
      logo: 'https://cdn.prod.website-files.com/656da6fea306219773d04208/65fb556e627a50f4ea228f20_ZIPPO_Logo.avif',
      quote: 'monday.com has enabled our group to launch more product categories and expand into more markets in way less time.',
      avatar: 'https://cdn.prod.website-files.com/656da6fea306219773d04208/66f931c735c5306033b82337_image%20631.avif',
      name: 'Chris Funk',
      title: 'Senior Director of Product Innovation',
      cta: { text: 'Watch the case study', link: 'https://monday.com/customers/zippo' },
      isVideo: true,
      videoUrl: 'https://cdn.prod.website-files.com/656da6fea306219773d04208%2F66fa5678f207f846cdf48f29_Zippo%20-%20FC12%20-%20Clean_dark-transcode.mp4',
      posterUrl: 'https://cdn.prod.website-files.com/656da6fea306219773d04208%2F66fa5678f207f846cdf48f29_Zippo%20-%20FC12%20-%20Clean_dark-poster-00001.jpg'
    },
    {
      id: 3,
      logo: 'https://cdn.prod.website-files.com/656da6fea306219773d04208/66f932e135c5306033b90cf6_Motorola.avif',
      quote: 'From the time that we started to the time that people became comfortable with it, I would say two weeks to a month.',
      name: 'Global CRM Director',
      cta: { text: 'Get the report', link: 'https://monday.com/lp/motorola-forrester-report' },
      image: 'https://cdn.prod.website-files.com/656da6fea306219773d04208/66f937d5d57b38ea8bb54185_moto4.avif'
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="py-20 px-4 font-['Poppins',sans-serif] bg-white">
      {/* Heading Section */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-normal tracking-tight leading-[1.3]">
          Loved by customers
        </h2>
      </div>

      {/* Main Container */}
      <div className="max-w-[120rem] mx-auto px-4">

        {/* Full Width Container with Background Image/Video */}
        <div className="relative rounded-[2.5rem] overflow-hidden min-h-[672px] p-8">

          {/* Background Image/Video Layer - Full Width */}
          <div className="absolute inset-0 z-0">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-opacity duration-600 ${activeSlide === index ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                {testimonial.isVideo ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    poster={testimonial.posterUrl}
                  >
                    <source src={testimonial.videoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={testimonial.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Overlay Content - Positioned on top */}
          <div className="relative z-10 flex justify-end items-center min-h-[640px]">



            {/* Testimonial Card - Overlaid on Right Side */}
            <div className="bg-white rounded-3xl shadow-2xl p-12 flex flex-col min-h-[576px] w-full max-w-[480px] relative">

              {/* Navigation Arrows - Inside Card Top Right */}
              <div className="absolute top-8 right-8 flex gap-3 z-20">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow flex items-center justify-center border border-gray-100"
                  aria-label="Previous slide"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M12 4L6 10L12 16" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow flex items-center justify-center border border-gray-100"
                  aria-label="Next slide"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M8 4L14 10L8 16" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`${activeSlide === index ? 'flex' : 'hidden'} flex-col h-full`}
                >
                  {/* Logo */}
                  <img
                    src={testimonial.logo}
                    alt="Company Logo"
                    className="h-12 w-auto mb-8 object-contain object-left max-w-[128px]"
                  />

                  {/* Bottom Content */}
                  <div className="mt-auto flex flex-col">
                    {/* Quote */}
                    <div className="text-xl leading-8 font-normal mb-12 tracking-tight">
                      "{testimonial.quote}"
                    </div>

                    <div className="mb-12" />

                    {/* Avatar & Name */}
                    <div className="flex items-center gap-4 mb-8">
                      {testimonial.avatar && (
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      )}
                      <div className="flex flex-col gap-1">
                        <div className="text-base font-bold leading-6">
                          {testimonial.name}
                        </div>
                        {testimonial.title && (
                          <div className="text-base font-light leading-6 text-gray-600">
                            {testimonial.title}
                          </div>
                        )}
                      </div>
                    </div>

                    {testimonial.cta && <div className="mb-8" />}

                    {/* CTA Link */}
                    {testimonial.cta && (
                      <a
                        href={testimonial.cta.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-black font-medium relative w-fit"
                      >
                        <span>{testimonial.cta.text}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="10"
                          viewBox="0 0 12 10"
                          fill="none"
                          className="transition-transform group-hover:translate-x-1"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.03033 0.21967C6.73744 -0.0732233 6.26256 -0.0732233 5.96967 0.21967C5.67678 0.512563 5.67678 0.987437 5.96967 1.28033L8.93934 4.25H1C0.585786 4.25 0.25 4.58579 0.25 5C0.25 5.41421 0.585786 5.75 1 5.75H8.93934L5.96967 8.71967C5.67678 9.01256 5.67678 9.48744 5.96967 9.78033C6.26256 10.0732 6.73744 10.0732 7.03033 9.78033L11.6339 5.17678C11.7315 5.07915 11.7315 4.92085 11.6339 4.82322L7.03033 0.21967Z"
                            fill="currentColor"
                          />
                        </svg>
                        <span className="absolute -bottom-0.5 left-0 w-full h-px bg-black" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}