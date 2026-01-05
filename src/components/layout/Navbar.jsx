'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function MondayNavbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    const hideNavbarRoutes = [
        '/auth/signup',
        '/auth/login',
        '/auth/register',
        '/dashboard',
        '/work-management/board',
        '/work-management/dashboard'
    ];
    const isDashboardRoute = pathname?.startsWith('/dashboard');

    if (hideNavbarRoutes.includes(pathname) || isDashboardRoute) {
        return null;
    }

    const MenuLink = ({ title }) => (
        <div className="relative h-full flex items-center">
            <a
                href="#"
                className="flex items-center h-full px-4 hover:text-black transition-colors text-sm"
                style={{ color: '#323338', fontWeight: 300 }}
            >
                {title}
            </a>
        </div>
    );

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 bg-white z-50" style={{ height: '80px', borderBottom: '1px solid #E6E9EF' }}>
                <div className="mx-auto px-8 h-full flex items-center justify-between" style={{ maxWidth: '1440px' }}>
                    <a href="/" className="flex-shrink-0">
                        <img src="/logo.png" alt="monday.com" className="h-40" />
                    </a>

                    <div className="hidden lg:flex items-center h-full flex-1 justify-between ml-6">
                        <div className="flex items-center h-full">
                            <MenuLink title="Products" />
                            <MenuLink title="Solutions" />
                            <MenuLink title="Resources" />
                            <a href="/enterprise" className="flex items-center h-full px-4 hover:text-black transition-colors text-sm" style={{ color: '#323338', fontWeight: 300 }}>
                                Enterprise
                            </a>
                        </div>

                        <div className="flex items-center gap-5">
                            <a href="/pricing" className="text-sm hover:text-black transition-colors" style={{ color: '#323338', fontWeight: 300 }}>Pricing</a>
                            <a href="/auth/signup" className="text-sm hover:text-black transition-colors" style={{ color: '#323338', fontWeight: 300 }}>Log in</a>
                            <a href="/demo" className="px-4 py-2.5 border rounded-full text-[13px] transition-all duration-200" style={{ borderColor: '#6161FF', color: '#6161FF', fontWeight: 300 }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F0F3FF'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                                Request a demo
                            </a>
                            <a href="/auth/signup" className="px-5 py-3 text-white rounded-full text-[13px] flex items-center gap-2 transition-all duration-200" style={{ backgroundColor: '#6161FF', fontWeight: 300 }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5252E6'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '6161FF'}>
                                Get Started
                                <svg className="w-3.5 h-3.5" viewBox="0 0 9 7" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.628.616a.5.5 0 1 0-.64.768L6.203 3.23H.5a.5.5 0 0 0 0 1h5.612L3.988 6a.5.5 0 1 0 .64.769l3.23-2.693a.5.5 0 0 0 0-.768z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <button className=" hover:bg-gray-50 rounded-lg transition-colors">
                                <img src="https://dapulse-res.cloudinary.com/image/upload/remote_mondaycom_static/uploads/Yotam_Ron/switcher-icon-hp.png" alt="Apps" className="w-10 h-10" />
                            </button>
                        </div>
                    </div>

                    <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {mobileOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl" style={{ borderTop: '1px solid #E6E9EF' }}>
                        <div className="px-6 py-8 space-y-6">
                            {['Products', 'Solutions', 'Resources', 'Enterprise', 'Pricing', 'Log in'].map(item => (
                                <a
                                    key={item}
                                    href={item === 'Log in' ? '/auth/signup' : '#'}
                                    className="block text-lg font-medium py-3"
                                    style={{ color: '#323338' }}
                                >
                                    {item}
                                </a>
                            ))}
                            <div className="pt-6 space-y-4" style={{ borderTop: '1px solid #E6E9EF' }}>
                                <a href="/demo" className="block w-full text-center py-4 border-2 rounded-lg font-medium transition" style={{ borderColor: '#6161FF', color: '#6161FF' }}>
                                    Request a demo
                                </a>
                                <a href="/auth/signup" className="w-full py-4 text-white rounded-lg font-medium flex items-center justify-center gap-3 transition" style={{ backgroundColor: '#6161FF' }}>
                                    Get Started
                                    <svg className="w-4 h-4" viewBox="0 0 9 7" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.628.616a.5.5 0 1 0-.64.768L6.203 3.23H.5a.5.5 0 0 0 0 1h5.612L3.988 6a.5.5 0 1 0 .64.769l3.23-2.693a.5.5 0 0 0 0-.768z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
            <div style={{ height: '72px' }} />
        </>
    );
}
