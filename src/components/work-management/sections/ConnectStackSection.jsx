import React from "react";

const ConnectStackSection = () => {
  const mobileIcons = [
    "https://cdn.prod.website-files.com/656da6fea306219773d04208/671765c1ad1778a60204b73d_Integrations-Icons-5.avif",
    "https://cdn.prod.website-files.com/656da6fea306219773d04208/671765c16fde401410071d1c_Integrations-Icons-3.avif",
    "https://cdn.prod.website-files.com/656da6fea306219773d04208/671765c1f5d313176cbccd24_Integrations-Icons-4.avif",
    "https://cdn.prod.website-files.com/656da6fea306219773d04208/671765a90716554a00d5be84_Integrations-Icons.avif",
    "https://cdn.prod.website-files.com/656da6fea306219773d04208/671765c18debb2e92fbf39b6_Integrations-Icons-8.avif",
    "https://cdn.prod.website-files.com/656da6fea306219773d04208/671765c1e16fdfb6e80526c2_Integrations-Icons-7.avif",
    "https://cdn.prod.website-files.com/656da6fea306219773d04208/671765c112fffbd502351b7d_Integrations-Icons-6.avif",
    "https://cdn.prod.website-files.com/656da6fea306219773d04208/671765c10bba53c9d6461d4f_Integrations-Icons-1.avif",
    "https://cdn.prod.website-files.com/656da6fea306219773d04208/671765c3421922d20f401867_Integrations-Icons-2.avif",
    "https://cdn.prod.website-files.com/656da6fea306219773d04208/671765c14d5ac529e7c15016_Integrations-Icons-9.avif",
  ];

  const connectLogos = [
    "https://cdn.prod.website-files.com/656da6fea306219773d04208/66f90f0c17c8c744bae880b0_connect-logo-001.avif",
    "https://cdn.prod.website-files.com/656da6fea306219773d04208/66f90f0b6976f830c4f9559f_connect-logo-002.avif",
    "https://cdn.prod.website-files.com/656da6fea306219773d04208/66f90f0b55f7927357b3925c_connect-logo-003.avif",
    "https://cdn.prod.website-files.com/656da6fea306219773d04208/66f90f0c17c8c744bae880bc_connect-logo-004.avif",
    "https://cdn.prod.website-files.com/656da6fea306219773d04208/66f90f0bfd2ca9b6dde57f9b_connect-logo-005.avif",
    "https://cdn.prod.website-files.com/656da6fea306219773d04208/66f90f0c9e7ff405b840cffa_connect-logo-006.avif",
  ];

  return (
    <div
      style={{
        paddingLeft: "2.5rem",
        paddingRight: "2.5rem",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        transition: "all 0.2s",
        gridColumnGap: "1svw",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "86rem",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
          overflow: "visible",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            position: "relative",
            boxSizing: "border-box",
          }}
        >
          {/* Mega Text Parent */}
          <div
            style={{
              perspective: "1000px",
              position: "relative",
              maxWidth: "54rem",
              boxSizing: "border-box",
            }}
          >
            {/* Mobile Icons - Hidden on desktop */}
            <div
              style={{
                display: "none",
                boxSizing: "border-box",
              }}
            >
              {mobileIcons.map((icon, index) => (
                <img
                  key={index}
                  src={icon}
                  loading="lazy"
                  alt=""
                  style={{
                    boxSizing: "border-box",
                  }}
                />
              ))}
            </div>

            {/* Main Heading */}
            <div
              style={{
                fontSize: "11rem",
                fontWeight: 100,
                lineHeight: 1,
                letterSpacing: "-0.05rem",
                color: "#000",
                fontFamily: "Poppins, sans-serif",
                boxSizing: "border-box",
              }}
            >
              Connect your stack
            </div>

            {/* Spacer */}
            <div
              style={{
                paddingBottom: "5rem",
                paddingRight: "5rem",
                boxSizing: "border-box",
              }}
            />
          </div>

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
            Integrates with 200+ of your favorite apps
          </div>

          {/* Spacer for mobile - Hidden on desktop */}
          <div
            style={{
              paddingBottom: "2rem",
              paddingRight: "2rem",
              display: "none",
              boxSizing: "border-box",
            }}
          />

          {/* Connect Logos */}
          <div
            style={{
              display: "flex",
              flexFlow: "wrap",
              gridColumnGap: "2.6rem",
              gridRowGap: "1rem",
              width: "100%",
              marginTop: "2rem",
              boxSizing: "border-box",
            }}
          >
            {connectLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                loading="lazy"
                alt=""
                style={{
                  border: 0,
                  textAlign: "left",
                  verticalAlign: "bottom",
                  maxWidth: "100%",
                  textDecoration: "none",
                  display: "inline-block",
                  overflow: "clip",
                  flex: "none",
                  height: "3.5rem",
                  boxSizing: "border-box",
                }}
              />
            ))}
          </div>

          {/* Integration Image */}
          <img
            src="https://cdn.prod.website-files.com/656da6fea306219773d04208/66f919b77db120000362f49b_Group%201261166005.avif"
            loading="lazy"
            alt=""
            style={{
              border: 0,
              textAlign: "left",
              verticalAlign: "bottom",
              maxWidth: "100%",
              textDecoration: "none",
              display: "inline-block",
              overflow: "clip",
              width: "30%",
              position: "absolute",
              top: "-7.1rem",
              left: "68%",
              boxSizing: "border-box",
            }}
          />

          {/* Get Started Button - Hidden on desktop, shown on mobile */}
          <a
            href="https://auth.monday.com/p/core/users/sign_up_new"
            style={{
              display: "none",
              backgroundColor: "transparent",
              textDecoration: "none",
              maxWidth: "100%",
              border: "1px solid #000",
              borderRadius: "10rem",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "0.875rem 2rem",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              lineHeight: "20px",
              color: "#000",
              marginTop: "2rem",
              boxSizing: "border-box",
            }}
          >
            <div>Get Started</div>
            <div style={{ marginLeft: "0.75rem" }}>
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

        {/* Mask Awards */}
        <div
          style={{
            width: "100%",
            overflow: "auto",
            boxSizing: "border-box",
          }}
        />
      </div>
    </div>
  );
};

export default ConnectStackSection;