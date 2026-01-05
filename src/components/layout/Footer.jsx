import React, { useState } from 'react';

const MondayFooter = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('English');

  const languages = [
    'English', 'Nederlands', 'Türkçe', 'Español', 'Italiano', 'Svenska',
    'Français', 'Pусский', 'Polski', 'Deutsch', '日本語', '繁體中文', 'Portuguese', '한국어'
  ];

  return (
    <footer style={{
      backgroundColor: '#fff',
      width: '100%',
      height: 'auto',
      fontFamily: 'Poppins, sans-serif',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '20px',
      color: '#000'
    }}>
      <div style={{
        borderTop: '0 solid #4b4b4b',
        width: '80vw',
        maxWidth: '1400px',
        height: 'auto',
        margin: '0 auto',
        paddingTop: '96px'
      }}>
        {/* Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 0.75fr 1.25fr 1fr 1fr 0.75fr',
          gridColumnGap: '16px',
          gridRowGap: '36px',
          paddingBottom: '3rem'
        }}>
          {/* Column 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: '300px' }}>
            <a href="https://www.monday.com" style={{ display: 'inline-block', marginBottom: '16px' }}>
              <img
                src="https://cdn.prod.website-files.com/656da6fea306219773d04208/65829074fc3601290cdb4483_monday.com.webp"
                alt="monday.com logo"
                width="107"
                style={{ marginBottom: '16px' }}
              />
            </a>
            <a href="/work-management/pricing" style={linkStyle}>Pricing</a>
            <a href="https://monday.com/help" style={linkStyle}>Contact us</a>
            <a href="https://monday.com/templates/" style={linkStyle}>Templates</a>
            <a href="https://monday.com/smb/" style={linkStyle}>SMB</a>
            <a href="https://monday.com/w/enterprise/" style={linkStyle}>Enterprise</a>
            <a href="https://monday.com/nonprofits" style={linkStyle}>Nonprofits</a>
            <a href="https://monday.com/marketplace" style={linkStyle}>App marketplace</a>
            <a href="https://monday.com/helpcenter" style={linkStyle}>24/7 support</a>
          </div>

          {/* Column 2 - Features */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: '300px' }}>
            <div style={headingStyle}>Features</div>
            <a href="https://monday.com/workdocs" style={linkStyle}>Docs</a>
            <a href="https://monday.com/integrations/" style={linkStyle}>Integrations</a>
            <a href="https://monday.com/features/automations" style={linkStyle}>Automations</a>
            <a href="/w/ai" style={linkStyle}>AI</a>
            <a href="https://monday.com/features/dashboards" style={linkStyle}>Dashboard</a>
            <a href="https://monday.com/features/kanban" style={linkStyle}>Kanban</a>
            <a href="https://monday.com/features/gantt" style={linkStyle}>Gantt</a>
          </div>

          {/* Column 3 - monday. Products */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: '300px' }}>
            <div style={headingStyle}>monday. products</div>

            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <img src="https://cdn.prod.website-files.com/656da6fea306219773d04208/6827ab54688e3dd2d5bca021_WM_Symbol.svg"
                alt="" style={iconStyle} />
              <a href="https://monday.com/work-management" style={linkStyle}>monday. work management</a>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <img src="https://cdn.prod.website-files.com/656da6fea306219773d04208/6827ab46e3eb7d10d106048a_CRM_Symbol.svg"
                alt="" style={iconStyle} />
              <a href="https://monday.com/crm" style={linkStyle}>monday. CRM</a>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <img src="https://cdn.prod.website-files.com/656da6fea306219773d04208/690735b4354cf7990ff6f515_camp%20logo.svg"
                alt="" style={iconStyle} />
              <a href="/w/crm/campaigns" style={linkStyle}>monday. campaigns</a>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <img src="https://cdn.prod.website-files.com/656da6fea306219773d04208/6827ab2aea46b8d3ee1f3ce4_DEV_Symbol.svg"
                alt="" style={iconStyle} />
              <a href="https://monday.com/w/dev" style={linkStyle}>monday. dev</a>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <img src="https://cdn.prod.website-files.com/656da6fea306219773d04208/6827aa82ed04cf73eed78f9e_SVC_Symbol.svg"
                alt="" style={iconStyle} />
              <a href="/w/service" style={linkStyle}>monday. service</a>
            </div>

            <div style={{ ...headingStyle, marginTop: '16px' }}>
              <br />More by monday.com
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <img src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/workcanvas_icon_footer.png"
                alt="workcanvas icon footer" style={iconStyle} />
              <a href="https://workcanvas.com" style={linkStyle}>WorkCanvas</a>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <img src="https://cdn.prod.website-files.com/656da6fea306219773d04208/65829074fc3601290cdb4479_workforms_icon_footer.svg"
                alt="" style={iconStyle} />
              <a href="https://workforms.com" style={linkStyle}>WorkForms</a>
            </div>
          </div>

          {/* Column 4 - Use Case */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: '300px' }}>
            <div style={headingStyle}>Use case</div>
            <a href="https://monday.com/marketing" style={linkStyle}>Marketing</a>
            <a href="https://monday.com/project-management" style={linkStyle}>Project management</a>
            <a href="https://monday.com/crm" style={linkStyle}>Sales</a>
            <a href="https://monday.com/dev" style={linkStyle}>Developers</a>
            <a href="https://monday.com/use-cases/hr-management-software" style={linkStyle}>HR</a>
            <a href="https://monday.com/use-cases/it-operations" style={linkStyle}>IT</a>
            <a href="https://monday.com/operations" style={linkStyle}>Operations</a>
            <a href="https://monday.com/construction" style={linkStyle}>Construction</a>
            <a href="https://monday.com/education" style={linkStyle}>Education</a>
          </div>

          {/* Column 5 - Company */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: '300px' }}>
            <div style={headingStyle}>Company</div>
            <a href="https://monday.com/p/about/" style={linkStyle}>About us</a>
            <a href="https://monday.com/careers/" style={linkStyle}>Careers - We're hiring!</a>
            <a href="https://monday.com/w/insights" style={linkStyle}>Insights for leaders</a>
            <a href="https://monday.com/p/news/" style={linkStyle}>Press</a>
            <a href="https://monday.com/w/customer-stories" style={linkStyle}>Customer stories</a>
            <a href="https://monday.com/w/partnership/" style={linkStyle}>Become a partner</a>
            <a href="https://monday.com/p/esg" style={linkStyle}>Sustainability & ESG</a>
            <a href="https://monday.com/affiliate-program/" style={linkStyle}>Affiliates</a>
            <a href="https://monday.ert.org" style={linkStyle}>Emergency Response</a>
            <a href="https://ir.monday.com/" style={linkStyle}>Investor relations</a>
          </div>

          {/* Column 6 - Resources */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: '300px' }}>
            <div style={headingStyle}>Resources</div>
            <a href="https://monday.com/helpcenter" style={linkStyle}>Help Center</a>
            <a href="https://community.monday.com/" style={linkStyle}>Community</a>
            <a href="https://monday.com/blog" style={linkStyle}>Blog</a>
            <a href="https://monday.com/whats-new" style={linkStyle}>What's new</a>
            <a href="https://monday.com/helpcenter/academy" style={linkStyle}>Academy</a>
            <a href="https://monday.com/p/events-hub/" style={linkStyle}>Global events</a>
            <a href="https://monday.spaces.com" style={linkStyle}>monday. spaces</a>
            <a href="https://www.startupforstartup.com/ww/" style={linkStyle}>Startup for startup</a>
            <a href="https://monday.com/appsdeveloper" style={linkStyle}>App development</a>
            <a href="https://monday.com/p/find-a-partner/" style={linkStyle}>Find a partner</a>
            <a href="https://monday.com/expertcatalog" style={linkStyle}>Hire an expert</a>
            <a href="https://monday.com/alternative" style={linkStyle}>Compare</a>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={{
          borderTop: '1px solid #dcdfec',
          paddingTop: '3rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'stretch',
          gridColumnGap: '2.5rem',
          gridRowGap: '2.5rem'
        }}>
          {/* Left - Language & Compliance */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gridColumnGap: '0.75rem', gridRowGap: '0.75rem' }}>
            {/* Language Dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gridColumnGap: '1rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '14px',
                  color: '#585965',
                  padding: 0,
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                <span style={{ fontSize: '20px' }}>🌐</span>
                <span>{currentLang}</span>
                <span style={{ transform: langOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>▼</span>
              </button>

              {langOpen && (
                <div style={{
                  position: 'absolute',
                  bottom: '100%',
                  marginBottom: '8px',
                  backgroundColor: 'white',
                  border: '1px solid #e4e6f1',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  padding: '8px',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '4px',
                  zIndex: 10,
                  minWidth: '280px'
                }}>
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setCurrentLang(lang);
                        setLangOpen(false);
                      }}
                      style={{
                        textAlign: 'left',
                        padding: '8px 12px',
                        fontSize: '13px',
                        color: '#585965',
                        background: 'none',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontFamily: 'Poppins, sans-serif',
                        transition: 'background 0.2s'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f5fb'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Compliance Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <a href="https://monday.com/terms/gdpr" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.prod.website-files.com/6318588b0036387847c21c9a/632b459adca58ef19316e143_gdpr-logo.png"
                  alt="GDPR" style={{ height: 'auto', width: '40px' }} />
              </a>
              <a href="https://monday.com/trustcenter/iso" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.prod.website-files.com/656da6fea306219773d04208/65829074fc3601290cdb447c_iso-logo1.png"
                  alt="ISO" style={{ height: 'auto', width: '40px' }} />
              </a>
              <a href="https://monday.com/terms/soc2" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.prod.website-files.com/656da6fea306219773d04208/65829074fc3601290cdb447a_soc-logo.webp"
                  alt="SOC" style={{ height: 'auto', width: '40px' }} />
              </a>
              <a href="https://support.monday.com/hc/en-us/articles/360006506699" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.prod.website-files.com/656da6fea306219773d04208/65829074fc3601290cdb447e_hipaa-logo.png"
                  alt="HIPAA" style={{ height: 'auto', width: '40px' }} />
              </a>
            </div>
          </div>

          {/* Center - Social & Links */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {/* Social Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {['Reddit', 'Twitter', 'LinkedIn', 'Facebook', 'YouTube', 'Instagram', 'TikTok'].map((social, idx) => (
                <a key={idx} href="#" style={{ color: '#535768', textDecoration: 'none', fontSize: '20px' }}>
                  {social === 'Reddit' && '🔗'}
                  {social === 'Twitter' && '🐦'}
                  {social === 'LinkedIn' && '💼'}
                  {social === 'Facebook' && '👥'}
                  {social === 'YouTube' && '📺'}
                  {social === 'Instagram' && '📷'}
                  {social === 'TikTok' && '🎵'}
                </a>
              ))}
            </div>

            {/* Bottom Links */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#585965' }}>
              <a href="https://monday.com/trustcenter" style={smallLinkStyle}>Security</a>
              <span>·</span>
              <a href="https://monday.com/trustcenter" style={smallLinkStyle}>Terms and privacy</a>
              <span>·</span>
              <a href="https://monday.com/terms/privacy" style={smallLinkStyle}>Privacy policy</a>
              <span>·</span>
              <a href="#" style={smallLinkStyle}>Your privacy choices</a>
              <span>·</span>
              <a href="https://status.monday.com/" style={smallLinkStyle}>Status</a>
              <span>·</span>
              <span>All Rights Reserved © monday.com</span>
            </div>
          </div>

          {/* Right - App Stores */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginLeft: 'auto' }}>
            <a href="https://play.google.com/store/apps/details?id=com.monday.monday" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play" style={{ height: '40px', width: 'auto' }} />
            </a>
            <a href="https://itunes.apple.com/app/id1290128888" target="_blank" rel="noopener noreferrer">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store" style={{ height: '40px', width: 'auto' }} />
            </a>
            <a href="https://monday.com/accessibility-statement" target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', marginTop: '16px', fontSize: '14px', color: '#585965', textDecoration: 'none' }}>
              <span style={{ marginRight: '8px' }}>♿</span>
              Accessibility statement
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const linkStyle = {
  color: '#585965',
  fontSize: '13px',
  fontWeight: 300,
  lineHeight: '40px',
  textDecoration: 'none',
  transition: 'color 0.2s',
  cursor: 'pointer'
};

const headingStyle = {
  color: '#585965',
  fontSize: '16px',
  fontWeight: 500,
  paddingTop: 0,
  paddingBottom: '16px'
};

const iconStyle = {
  width: '18px',
  height: '18px',
  marginRight: '8px',
  objectFit: 'contain'
};

const smallLinkStyle = {
  color: '#585965',
  textDecoration: 'none',
  fontSize: '12px'
};

export default MondayFooter;