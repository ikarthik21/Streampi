import { UserButton } from '@clerk/nextjs';
import React from 'react';

const Options = () => {
    return (
        <div>        
            <UserButton afterSignOutUrl="/"  />
        </div>
    );
};

export default Options;