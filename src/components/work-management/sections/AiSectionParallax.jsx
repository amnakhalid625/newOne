import React, { useEffect, useRef, useState } from 'react';

const ParallaxSection = () => {
  const [activeSection, setActiveSection] = useState(0);
  const parallaxRightRef = useRef(null);
  const sectionsRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.getBoundingClientRect().top;
      const containerHeight = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Determine active section based on scroll position
      let newActiveSection = 0;
      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top < viewportHeight * 0.6 && rect.bottom > viewportHeight * 0.4) {
            newActiveSection = index;
          }
        }
      });
      setActiveSection(newActiveSection);

      // Parallax effect for right side
      if (parallaxRightRef.current) {
        const scrollProgress = Math.max(0, -containerTop / (containerHeight - viewportHeight));
        const translateY = scrollProgress * 30;
        parallaxRightRef.current.style.transform = `translate3d(0px, ${translateY}px, 0px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxData = [
    {
      id: 'parallax-text-1',
      label: 'Alignment',
      title: 'Get business units working in harmony',
      description: 'Improve cross-functional collaboration with one workspace that brings teams and departments together to achieve shared goals.',
      image: 'https://cdn.prod.website-files.com/656da6fea306219773d04208/66f7dcaca7350acde771b950_WM-Alignment.avif',
      srcset: 'https://cdn.prod.website-files.com/656da6fea306219773d04208/66f7dcaca7350acde771b950_WM-Alignment-p-500.avif 500w, https://cdn.prod.website-files.com/656da6fea306219773d04208/66f7dcaca7350acde771b950_WM-Alignment-p-800.avif 800w, https://cdn.prod.website-files.com/656da6fea306219773d04208/66f7dcaca7350acde771b950_WM-Alignment-p-1080.avif 1080w, https://cdn.prod.website-files.com/656da6fea306219773d04208/66f7dcaca7350acde771b950_WM-Alignment.avif 1708w'
    },
    {
      id: 'parallax-text-2',
      label: 'Efficiency',
      title: 'Execute with speed and precision',
      description: 'Standardize and automate workflows, while assigning clear ownership for efficient execution and faster delivery.',
      image: 'https://cdn.prod.website-files.com/656da6fea306219773d04208/66f7dcabae93976a74e1f860_WM-Efficiency.avif',
      srcset: 'https://cdn.prod.website-files.com/656da6fea306219773d04208/66f7dcabae93976a74e1f860_WM-Efficiency-p-500.avif 500w, https://cdn.prod.website-files.com/656da6fea306219773d04208/66f7dcabae93976a74e1f860_WM-Efficiency-p-800.avif 800w, https://cdn.prod.website-files.com/656da6fea306219773d04208/66f7dcabae93976a74e1f860_WM-Efficiency.avif 1708w'
    },
    {
      id: 'parallax-text-3',
      label: 'Visibility',
      title: 'Take the guesswork out of decision-making',
      description: 'With all business units and data connected in one workspace, get real-time insights, from potential risks to work progress, to make accurate decisions.',
      image: 'https://cdn.prod.website-files.com/656da6fea306219773d04208/66fa714b3b706c6015a2f06d_WM-Visibility.avif',
      srcset: 'https://cdn.prod.website-files.com/656da6fea306219773d04208/66fa714b3b706c6015a2f06d_WM-Visibility-p-500.png 500w, https://cdn.prod.website-files.com/656da6fea306219773d04208/66fa714b3b706c6015a2f06d_WM-Visibility-p-800.png 800w, https://cdn.prod.website-files.com/656da6fea306219773d04208/66fa714b3b706c6015a2f06d_WM-Visibility.avif 1708w'
    }
  ];

  return (
    <div style={{
      color: '#000',
      fontFamily: 'Poppins, sans-serif',
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '20px',
      boxSizing: 'border-box',
      display: 'block',
      padding: '6rem 1rem 0.5rem'
    }}>
      {/* Header Section */}
      <div style={{
        color: '#000',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '1rem',
        fontWeight: '400',
        lineHeight: '20px',
        boxSizing: 'border-box',
        textAlign: 'center',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
      }}>
        <div style={{
          color: '#000',
          fontFamily: 'Poppins, sans-serif',
          textAlign: 'center',
          boxSizing: 'border-box',
          letterSpacing: '-0.025rem',
          marginTop: '0',
          marginBottom: '0',
          fontSize: '3rem',
          lineHeight: '1.3',
          maxWidth: '20ch',
          fontWeight: '400'
        }}>
          Built to give your work a competitive edge
        </div>
        <div style={{
          color: '#000',
          fontFamily: 'Poppins, sans-serif',
          fontSize: '1rem',
          fontWeight: '400',
          lineHeight: '20px',
          textAlign: 'center',
          boxSizing: 'border-box',
          paddingBottom: '2rem',
          paddingRight: '2rem'
        }}></div>
      </div>

      {/* Parallax Container */}
      <div ref={containerRef} style={{
        color: '#000',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '1rem',
        fontWeight: '400',
        lineHeight: '20px',
        boxSizing: 'border-box',
        gridColumnGap: '1rem',
        gridRowGap: '1rem',
        backgroundColor: 'transparent',
        gridTemplateRows: 'auto',
        gridTemplateColumns: '1fr 1fr',
        gridAutoColumns: '1fr',
        width: '100%',
        maxWidth: '120rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        overflow: 'visible'
      }}>
        <div style={{
          color: '#000',
          fontFamily: 'Poppins, sans-serif',
          fontSize: '1rem',
          fontWeight: '400',
          lineHeight: '20px',
          boxSizing: 'border-box',
          flexDirection: 'row',
          alignItems: 'flex-start',
          width: '100%',
          display: 'flex'
        }}>
          {/* Left Side - Text Content */}
          <div style={{
            color: '#000',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '1rem',
            fontWeight: '400',
            lineHeight: '20px',
            boxSizing: 'border-box',
            flexFlow: 'column',
            justifyContent: 'center',
            alignItems: 'flex-end',
            width: '42.5%',
            marginLeft: 'auto',
            display: 'flex'
          }}>
            {parallaxData.map((item, index) => (
              <div
                key={item.id}
                id={item.id}
                ref={(el) => (sectionsRef.current[index] = el)}
                style={{
                  color: '#000',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1rem',
                  fontWeight: '400',
                  lineHeight: '20px',
                  boxSizing: 'border-box',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  width: '100%',
                  maxWidth: '40rem',
                  minHeight: '75vh',
                  paddingRight: '2rem',
                  display: 'flex'
                }}
              >
                <div style={{
                  color: '#000',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1rem',
                  fontWeight: '400',
                  lineHeight: '20px',
                  boxSizing: 'border-box',
                  flexFlow: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  maxWidth: '28.75rem',
                  display: 'flex'
                }}>
                  <div style={{
                    color: '#000',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1rem',
                    fontWeight: '400',
                    lineHeight: '20px',
                    boxSizing: 'border-box'
                  }}>
                    {item.label}
                  </div>

                  <div style={{
                    color: '#000',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1rem',
                    fontWeight: '400',
                    lineHeight: '20px',
                    boxSizing: 'border-box',
                    flex: 'none',
                    paddingBottom: '1.5rem',
                    paddingRight: '1.5rem'
                  }}></div>

                  <h2 style={{
                    color: '#000',
                    fontFamily: 'Poppins, sans-serif',
                    boxSizing: 'border-box',
                    letterSpacing: '-0.025rem',
                    maxWidth: '15ch',
                    marginTop: '0',
                    marginBottom: '0',
                    lineHeight: '1.3',
                    fontWeight: '400',
                    fontSize: '2.4rem'
                  }}>
                    {item.title}<br />
                  </h2>

                  <div style={{
                    color: '#000',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1rem',
                    fontWeight: '400',
                    lineHeight: '20px',
                    boxSizing: 'border-box',
                    paddingBottom: '2rem',
                    paddingRight: '2rem'
                  }}></div>

                  <p style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1rem',
                    fontWeight: '400',
                    boxSizing: 'border-box',
                    marginTop: '0',
                    color: '#000',
                    marginBottom: '0',
                    lineHeight: '1.6'
                  }}>
                    {item.description}
                  </p>

                  <div style={{
                    color: '#000',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1rem',
                    fontWeight: '400',
                    lineHeight: '20px',
                    boxSizing: 'border-box',
                    paddingBottom: '2rem',
                    paddingRight: '2rem'
                  }}></div>

                  <a
                    href="https://auth.monday.com/p/core/users/sign_up_new"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: '400',
                      lineHeight: '20px',
                      boxSizing: 'border-box',
                      textDecoration: 'none',
                      maxWidth: '100%',
                      color: '#fff',
                      border: '1px solid #6161ff',
                      borderRadius: '10rem',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      padding: '0.725rem 1.5rem',
                      fontSize: '0.875rem',
                      transition: 'all 0.1s',
                      display: 'flex',
                      backgroundColor: '#6161ff'
                    }}
                  >
                    <div>Get Started</div>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Sticky Images */}
          <div
            ref={parallaxRightRef}
            style={{
              color: '#000',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1rem',
              fontWeight: '400',
              lineHeight: '20px',
              boxSizing: 'border-box',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '50%',
              minHeight: '75vh',
              display: 'flex',
              position: 'sticky',
              top: '15vh',
              willChange: 'transform',
              transform: 'translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d'
            }}
          >
            {parallaxData.map((item, index) => (
              <a
                key={`image-${item.id}`}
                href={`#${item.id}`}
                style={{
                  textDecoration: 'none',
                  position: index === 0 ? 'relative' : 'absolute',
                  top: index === 0 ? 'auto' : '0',
                  left: index === 0 ? 'auto' : '0',
                  width: '100%',
                  height: '100%',
                  opacity: activeSection === index ? '1' : '0',
                  transition: 'opacity 0.5s ease-in-out',
                  pointerEvents: activeSection === index ? 'auto' : 'none'
                }}
              >
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%'
                }}>
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    sizes="(max-width: 1708px) 100vw, 1708px"
                    srcSet={item.srcset}
                    style={{
                      maxWidth: '100%',
                      verticalAlign: 'middle',
                      display: 'inline-block',
                      border: '0'
                    }}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;