import React from 'react';
import Image from 'next/image';
import loader from '@/src/assets/loader.gif';

const GlobalLoader = () => {
    return (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-white/80 backdrop-blur-sm">
            <Image src={loader} alt="Loading..." width={100} height={100} priority />
        </div>
    );
};

export default GlobalLoader;
