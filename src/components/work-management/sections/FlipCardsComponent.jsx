import React, { useState } from 'react';

const FlipCardsComponent = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardsData = [
    {
      id: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 49 40" fill="none" height="100%">
          <path d="M46.5752 12.8061V20.9107C46.5752 21.7611 46.1749 22.5618 45.4946 23.072L26.5998 37.2431C25.6317 37.9691 24.299 37.9629 23.3378 37.2279L3.06048 21.7217C2.39207 21.2106 2 20.4172 2 19.5757V11.4554" stroke="currentColor" strokeWidth="2.70153" />
          <path d="M24.0371 27.6646L45.7662 13.6046C46.5356 13.1067 47.0274 12.2479 46.888 11.3421C46.7472 10.4264 46.4744 9.52847 46.0747 8.67082C45.4638 7.35976 44.5683 6.1685 43.4394 5.16506C42.3106 4.16162 40.9704 3.36565 39.4955 2.82259C38.0205 2.27953 36.4397 2.00002 34.8432 2.00002C33.2468 2.00002 31.6659 2.27953 30.191 2.82259C28.716 3.36565 27.3759 4.16162 26.247 5.16506C25.5753 5.7621 24.9863 6.42564 24.4907 7.14133" stroke="currentColor" strokeWidth="2.70153" strokeLinecap="round" />
          <path d="M23.6139 27.6646L3.1721 13.6112C2.43902 13.1072 1.97501 12.2701 2.10585 11.3902C2.24449 10.4578 2.51978 9.54346 2.92643 8.67082C3.53737 7.35976 4.43284 6.1685 5.56171 5.16506C6.69058 4.16162 8.03074 3.36565 9.50569 2.82259C10.9806 2.27953 12.5615 2.00002 14.1579 2.00002C15.7544 2.00002 17.3352 2.27953 18.8102 2.82259C20.2851 3.36565 21.6253 4.16162 22.7541 5.16506C23.4204 5.75725 24.0701 6.42994 24.5781 7.14244" stroke="currentColor" strokeWidth="2.70153" strokeLinecap="round" />
        </svg>
      ),
      title: 'High adoption',
      subtitle: 'When teams love it, data flows',
      description: 'Experience an intuitive platform people love to use — boosting engagement and assuring data accuracy.',
      logoText: 'Awarded Highest User Adoption for Enterprises by G2'
    },
    {
      id: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 37 38" fill="none" height="100%">
          <path d="M6.99805 18.6627L23.6609 2H35.3247V13.6638L18.662 30.3266L6.99805 18.6627Z" stroke="currentColor" strokeWidth="2.444" />
          <path d="M6.99873 8.66507L2 13.6638L6.99873 18.6627L16.9963 8.66507H6.99873Z" stroke="currentColor" strokeWidth="2.444" />
          <path d="M28.6597 30.3266L23.661 35.3254L18.6621 30.3266L28.6597 20.329V30.3266Z" stroke="currentColor" strokeWidth="2.444" />
        </svg>
      ),
      title: 'Speed to value',
      subtitle: 'Experience instant business impact',
      description: 'Quickly launch and iterate on processes and projects to meet changing needs for operational efficiency.',
      logoText: 'The Total Economic Impact™ Forrester study reports less than 4 month payback period'
    },
    {
      id: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 45 45" fill="none" height="100%">
          <path d="M9.04194 3.27383H3.27734V9.03843H9.04194V3.27383Z" stroke="currentColor" strokeWidth="2.82" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.04199 6.15946H35.9585" stroke="currentColor" strokeWidth="2.82" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.16016 9.03878V35.9588" stroke="currentColor" strokeWidth="2.82" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M38.8398 9.04159V35.9616" stroke="currentColor" strokeWidth="2.82" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.04199 38.8435H35.9585" stroke="currentColor" strokeWidth="2.82" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Freedom to customize',
      subtitle: 'Where flexibility meets standardization',
      description: 'Customize automations, reports, and processes to your needs without compromising on governance and control.',
      logoText: 'monday.com supports over 200 use cases in 190 different industries'
    }
  ];

  const PlusIcon = () => (
    <svg width="100%" viewBox="0 0 31 37" fill="none">
      <circle cx="15.0719" cy="17.9112" r="15.0709" fill="#6161FF" />
      <path d="M21.9328 18.6946H16.7967V23.9031H14.747V18.6946H9.63498V16.8379H14.747V11.6053H16.7967V16.8379H21.9328V18.6946Z" fill="white" />
    </svg>
  );

  return (
    <div style={{
      boxSizing: 'border-box',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      paddingBottom: '1rem',
      paddingTop: '0',
      transition: 'all 0.2s',
      display: 'block',
      overflow: 'visible'
    }}>
      <div style={{
        backgroundColor: '#000',
        borderRadius: '2.5rem',
        padding: '6rem 2rem',
        color: '#f5f6f8',
        columnGap: '3rem',
        rowGap: '3rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        maxWidth: '120rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        boxSizing: 'border-box'
      }}>
        {/* Header */}
        <h1 style={{
          fontSize: '3rem',
          lineHeight: '1.3',
          color: '#fff',
          textAlign: 'center',
          fontWeight: '400',
          letterSpacing: '-0.025rem',
          marginTop: '0',
          marginBottom: '0',
          boxSizing: 'border-box',
          fontFamily: 'Poppins, sans-serif'
        }}>
          What sets us apart
        </h1>

        {/* Cards Container */}
        <div style={{
          columnGap: '1rem',
          rowGap: '1rem',
          gridTemplateRows: 'auto',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridAutoColumns: '1fr',
          width: '100%',
          maxWidth: '86rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'grid',
          boxSizing: 'border-box'
        }}>
          {cardsData.map((card) => (
            <div
              key={card.id}
              style={{
                position: 'relative',
                flex: '1',
                cursor: 'default',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                borderRadius: '1rem',
                padding: '8rem 2.5rem 2.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                lineHeight: '135%',
                boxSizing: 'border-box',
                color: '#fff'
              }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Icon at top */}
              <div style={{
                position: 'absolute',
                top: '2.5rem',
                left: '2.5rem',
                width: '2.5rem',
                height: '2.5rem',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                {card.icon}
              </div>

              {/* Content */}
              <div style={{ display: 'block' }}>
                <p style={{
                  fontSize: '2.75rem',
                  fontWeight: '600',
                  lineHeight: '120%',
                  color: '#fff',
                  maxWidth: '10ch',
                  marginTop: '1.5rem',
                  marginBottom: '1.5rem',
                  boxSizing: 'border-box',
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  {card.title}
                </p>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '400',
                  color: '#fff',
                  maxWidth: '95%',
                  marginTop: '0',
                  marginBottom: '10px',
                  lineHeight: '1.6',
                  boxSizing: 'border-box',
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  {card.subtitle}
                </p>
              </div>

              {/* Plus Icon */}
              <div style={{
                position: 'absolute',
                bottom: '1.5rem',
                right: '1.5rem',
                width: '2rem',
                height: '2rem',
                transition: 'transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
                zIndex: 4
              }}>
                <PlusIcon />
              </div>

              {/* Back of Card - appears on hover */}
              {hoveredCard === card.id && (
                <div style={{
                  position: 'absolute',
                  inset: '0',
                  backgroundColor: '#000',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  borderRadius: '1rem',
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  transition: 'opacity 0.3s',
                  boxSizing: 'border-box'
                }}>
                  <p style={{
                    fontSize: '1.125rem',
                    fontWeight: '200',
                    lineHeight: '1.6',
                    color: '#fff',
                    marginBottom: '6rem',
                    marginTop: '0',
                    fontFamily: 'Poppins, sans-serif'
                  }}>
                    {card.description}
                  </p>

                  <div style={{ marginTop: 'auto' }}>
                    <p style={{
                      fontSize: '0.875rem',
                      fontWeight: '200',
                      color: 'rgba(255, 255, 255, 0.7)',
                      lineHeight: '1.4',
                      marginTop: '0',
                      marginBottom: '0',
                      fontFamily: 'Poppins, sans-serif'
                    }}>
                      {card.logoText}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-3 px-10 py-4 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95">
            <span className="text-base">Get Started</span>
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.03033 0.21967C6.73744 -0.0732233 6.26256 -0.0732233 5.96967 0.21967C5.67678 0.512563 5.67678 0.987437 5.96967 1.28033L8.93934 4.25H1C0.585786 4.25 0.25 4.58579 0.25 5C0.25 5.41421 0.585786 5.75 1 5.75H8.93934L5.96967 8.71967C5.67678 9.01256 5.67678 9.48744 5.96967 9.78033C6.26256 10.0732 6.73744 10.0732 7.03033 9.78033L11.6339 5.17678C11.7315 5.07915 11.7315 4.92085 11.6339 4.82322L7.03033 0.21967Z" fill="white" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlipCardsComponent;