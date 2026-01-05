import React from "react";

const EnterpriseClaritySection = () => {
  return (
    <div
      style={{
        paddingLeft: "1rem",
        paddingRight: "1rem",
        paddingBottom: "1rem",
        paddingTop: 0,
        display: "block",
        overflow: "visible",
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
          display: "block",
          overflow: "visible",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            backgroundColor: "#6161ff",
            borderRadius: "2.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            maxWidth: "120rem",
            height: "auto",
            marginLeft: "auto",
            marginRight: "auto",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "auto",
              gridAutoColumns: "1fr",
              gridColumnGap: "16px",
              gridRowGap: "16px",
              width: "100%",
              padding: "1rem 1rem 1rem 2rem",
              color: "#f5f6f8",
              boxSizing: "border-box",
            }}
          >
            {/* Left Column - Text Content */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                placeSelf: "center end",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  maxWidth: "43rem",
                  paddingTop: "3rem",
                  paddingBottom: "3rem",
                  paddingRight: "3rem",
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
                    color: "#f5f6f8",
                    fontFamily: "Poppins, sans-serif",
                    boxSizing: "border-box",
                  }}
                >
                  Enterprise-wide clarity
                </h2>

                <div
                  style={{
                    paddingBottom: "1rem",
                    paddingRight: "1rem",
                    boxSizing: "border-box",
                  }}
                />

                <p
                  style={{
                    fontSize: "1.125rem",
                    lineHeight: "1.6",
                    fontWeight: 400,
                    marginTop: 0,
                    marginBottom: 0,
                    color: "#fff",
                    width: "100%",
                    fontFamily: "Poppins, sans-serif",
                    boxSizing: "border-box",
                  }}
                >
                  Our experts will help you create a unified view of your organization, including scalable project management, efficient resource management, and alignment with your goals.
                </p>

                <div
                  style={{
                    paddingBottom: "2rem",
                    paddingRight: "2rem",
                    boxSizing: "border-box",
                  }}
                />

                <a
                  href="https://monday.com/sales/contact-us"
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    padding: "0.875rem 2rem",
                    backgroundColor: "transparent",
                    border: "1px solid #fff",
                    borderRadius: "10rem",
                    color: "#fff",
                    textDecoration: "none",
                    maxWidth: "100%",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "1rem",
                    fontWeight: 400,
                    lineHeight: "20px",
                    boxSizing: "border-box",
                  }}
                >
                  <div>Talk to sales</div>
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
                          fill="white"
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
            </div>

            {/* Right Column - Image */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                placeSelf: "center end",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-end",
                  width: "80%",
                  justifySelf: "end",
                  boxSizing: "border-box",
                }}
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/656da6fea306219773d04208/66f91530fb2ecb173ad6550d_image%20626.avif"
                  alt=""
                  style={{
                    width: "90%",
                    maxWidth: "40rem",
                    objectFit: "fill",
                    display: "inline-block",
                    overflow: "clip",
                    border: 0,
                    verticalAlign: "bottom",
                    textDecoration: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseClaritySection;