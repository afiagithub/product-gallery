import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='font-mulish'>
            <Outlet/>
        </div>
    );
};

export default MainLayout;