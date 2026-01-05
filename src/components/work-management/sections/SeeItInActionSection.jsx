import React, { useState } from 'react';

const SeeItInActionSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div style={{
      paddingLeft: '1rem',
      paddingRight: '1rem',
      paddingBottom: '1rem',
      paddingTop: '0',
      transition: 'all 0.2s',
      display: 'block',
      overflow: 'visible',
      fontFamily: 'Poppins, sans-serif',
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '20px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        gridColumnGap: '3rem',
        gridRowGap: '3rem',
        color: '#f5f6f8',
        borderRadius: '2.5rem',
        flexFlow: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        maxWidth: '120rem',
        height: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '6rem 2rem',
        display: 'flex',
        backgroundColor: '#311cac',
        boxSizing: 'border-box'
      }}>
        <div style={{
          gridColumnGap: '1rem',
          gridRowGap: '1rem',
          gridTemplateRows: 'auto',
          gridTemplateColumns: '1fr 1fr',
          gridAutoColumns: '1fr',
          width: '100%',
          maxWidth: '86rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'block',
          overflow: 'visible',
          boxSizing: 'border-box'
        }}>
          <div style={{
            gridColumnGap: '2rem',
            gridRowGap: '2rem',
            gridTemplateRows: 'auto',
            gridTemplateColumns: '1fr 1fr',
            gridAutoColumns: '1fr',
            placeItems: 'center stretch',
            width: '100%',
            display: 'grid',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '1rem',
            fontWeight: '400',
            lineHeight: '20px',
            color: '#f5f6f8',
            boxSizing: 'border-box'
          }}>
            {/* Text Section */}
            <div style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1rem',
              fontWeight: '400',
              lineHeight: '20px',
              color: '#f5f6f8',
              boxSizing: 'border-box'
            }}>
              <h2 style={{
                color: '#fff',
                letterSpacing: '-1px',
                maxWidth: '8ch',
                marginTop: '0',
                marginBottom: '0',
                fontWeight: '200',
                lineHeight: '1.1',
                fontSize: '5.5rem',
                fontFamily: 'Poppins, sans-serif',
                boxSizing: 'border-box'
              }}>
                See it in action<br />
              </h2>
            </div>

            {/* Video Section */}
            <div style={{
              borderRadius: '1rem',
              position: 'relative',
              overflow: 'hidden',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1rem',
              fontWeight: '400',
              lineHeight: '20px',
              color: '#f5f6f8',
              boxSizing: 'border-box'
            }}>
              <div style={{
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1rem',
                fontWeight: '400',
                lineHeight: '20px',
                color: '#f5f6f8',
                boxSizing: 'border-box'
              }}>
                <div style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1rem',
                  fontWeight: '400',
                  lineHeight: '20px',
                  color: '#f5f6f8',
                  boxSizing: 'border-box'
                }}>
                  {!showVideo ? (
                    <div style={{ position: 'relative' }}>
                      <video
                        id="video-001"
                        controls
                        style={{
                          backgroundImage: 'url("https://dapulse-res.cloudinary.com/video/upload/v1756906401/Generator_featured%20images/wm-webflow/WM_video_new_logo-small.jpg")',
                          objectFit: 'cover',
                          width: '100%',
                          display: 'block'
                        }}
                      >
                        <source
                          src="https://dapulse-res.cloudinary.com/video/upload/v1756908468/Generator_featured%20images/wm-webflow/WM_video_new_logo-small.mp4"
                          type="video/mp4"
                        />
                      </video>
                      <img
                        src="https://cdn.prod.website-files.com/656da6fea306219773d04208/685cee6a4546d0e2886f2966_See%20it%20in%20action.png"
                        alt=""
                        loading="lazy"
                        sizes="(max-width: 878px) 100vw, 878px"
                        srcSet="https://cdn.prod.website-files.com/656da6fea306219773d04208/685cee6a4546d0e2886f2966_See%20it%20in%20action-p-500.png 500w, https://cdn.prod.website-files.com/656da6fea306219773d04208/685cee6a4546d0e2886f2966_See%20it%20in%20action-p-800.png 800w, https://cdn.prod.website-files.com/656da6fea306219773d04208/685cee6a4546d0e2886f2966_See%20it%20in%20action.png 878w"
                        onClick={() => setShowVideo(true)}
                        style={{
                          border: '0',
                          textAlign: 'left',
                          verticalAlign: 'bottom',
                          maxWidth: '100%',
                          textDecoration: 'none',
                          display: 'inline-block',
                          overflow: 'clip',
                          zIndex: '1',
                          cursor: 'pointer',
                          objectFit: 'cover',
                          height: '100%',
                          position: 'absolute',
                          inset: '0%',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '1rem',
                          fontWeight: '400',
                          lineHeight: '20px',
                          color: '#f5f6f8',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>
                  ) : (
                    <video
                      id="video-001"
                      controls
                      autoPlay
                      loop
                      playsInline
                      style={{
                        backgroundImage: 'url("https://dapulse-res.cloudinary.com/video/upload/v1756906401/Generator_featured%20images/wm-webflow/WM_video_new_logo-small.jpg")',
                        objectFit: 'cover',
                        width: '100%',
                        display: 'block'
                      }}
                    >
                      <source
                        src="https://dapulse-res.cloudinary.com/video/upload/v1756908468/Generator_featured%20images/wm-webflow/WM_video_new_logo-small.mp4"
                        type="video/mp4"
                      />
                    </video>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeItInActionSection;