import React from 'react';

const FooterComponent = () => {
    return (
        <div className="fixed bottom-0 right-20 z-30 flex gap-6 mb-12 text-sm">
            <button className="text-lime-400 font-semibold">EN</button>
            <button className="text-white hover:text-white transition-colors">FR</button>
            <button className="text-white hover:text-white transition-colors">DE</button>
        </div>
    );
};

export default FooterComponent;