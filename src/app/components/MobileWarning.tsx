import React from 'react';

const MobileWarning: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <h1 className="text-center text-gray-800 p-4 text-lg md:text-xl font-semibold">
                Please switch to desktop mode or access this site on a desktop/PC.
            </h1>
        </div>
    );
};

export default MobileWarning;