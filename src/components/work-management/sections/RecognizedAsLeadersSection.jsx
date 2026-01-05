import React from "react";

const RecognizedAsLeadersSection = () => {
  const awards = [
    {
      id: 1,
      logo: "https://cdn.prod.website-files.com/656da6fea306219773d04208/66f9303acb68be0e77a29876_Frame%201561554242.avif",
      description: "Forrester Total Economic Impact™ research: ",
      highlight: "Motorola sees 346% ROI with futures.com",
      link: "https://monday.com/lp/motorola-forrester-report",
    },
    {
      id: 2,
      logo: "https://cdn.prod.website-files.com/656da6fea306219773d04208/66f9303a580abe1affb1e696_Frame%201561554243.avif",
      description: "A Leader in the 2025 Gartner® Magic Quadrant™ for ",
      highlight: "Collaborative Work Management",
      link: "https://monday.com/w/gartner-mq/cwm-2024",
    },
    {
      id: 3,
      logo: "https://cdn.prod.website-files.com/656da6fea306219773d04208/66f9303a580abe1affb1e696_Frame%201561554243.avif",
      description: "A Leader in the 2025 Gartner® Magic Quadrant™ for ",
      highlight: "Adaptive Project Management and Reporting",
      link: "https://monday.com/w/gartner-mq/apmr-2024",
    },
  ];

  return (
    <div
      style={{
        paddingLeft: "2.5rem",
        paddingRight: "2.5rem",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        transition: "all 0.2s",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "86rem",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          boxSizing: "border-box",
        }}
      >
        {/* Header Section */}
        <div
          style={{
            maxWidth: "80rem",
            marginBottom: "4rem",
            marginLeft: "auto",
            marginRight: "auto",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              maxWidth: "24rem",
              boxSizing: "border-box",
            }}
          >
            <h2
              style={{
                fontSize: "3rem",
                lineHeight: "1.3",
                fontWeight: 400,
                letterSpacing: "-0.025rem",
                marginTop: 0,
                marginBottom: 0,
                color: "#000",
                fontFamily: "Poppins, sans-serif",
                boxSizing: "border-box",
              }}
            >
              Recognized as leaders
            </h2>
          </div>
        </div>

        {/* Awards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridColumnGap: "2rem",
            gridRowGap: "2rem",
            paddingTop: "5rem",
            paddingBottom: "1rem",
            boxSizing: "border-box",
          }}
        >
          {awards.map((award) => (
            <div
              key={award.id}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                maxWidth: "21rem",
                gap: "1rem",
                boxSizing: "border-box",
              }}
            >
              {/* Logo */}
              <img
                src={award.logo}
                alt=""
                loading="lazy"
                width="201"
                style={{
                  border: 0,
                  verticalAlign: "bottom",
                  display: "inline-block",
                  maxWidth: "10rem",
                  marginBottom: "1rem",
                  boxSizing: "border-box",
                }}
              />

              {/* Description */}
              <div
                style={{
                  fontSize: "1.125rem",
                  lineHeight: "1.6",
                  fontWeight: 400,
                  marginTop: 0,
                  marginBottom: 0,
                  color: "#000",
                  fontFamily: "Poppins, sans-serif",
                  boxSizing: "border-box",
                }}
              >
                {award.description}
                <strong>{award.highlight}</strong>
              </div>

              {/* Link */}
              <a
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "transparent",
                  textDecoration: "none",
                  color: "#000",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "0.875rem",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  lineHeight: "20px",
                  boxSizing: "border-box",
                }}
              >
                <div>Read the report</div>
                <div style={{ marginLeft: "0.5rem" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_2450_390)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.03033 0.21967C6.73744 -0.0732233 6.26256 -0.0732233 5.96967 0.21967C5.67678 0.512563 5.67678 0.987437 5.96967 1.28033L8.93934 4.25H1C0.585786 4.25 0.25 4.58579 0.25 5C0.25 5.41421 0.585786 5.75 1 5.75H8.93934L5.96967 8.71967C5.67678 9.01256 5.67678 9.48744 5.96967 9.78033C6.26256 10.0732 6.73744 10.0732 7.03033 9.78033L11.6339 5.17678C11.7315 5.07915 11.7315 4.92085 11.6339 4.82322L7.03033 0.21967Z"
                        fill="currentcolor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2450_390">
                        <rect width="12" height="10" fill="currentcolor" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecognizedAsLeadersSection;