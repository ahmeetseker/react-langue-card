"use client"

import React from 'react';
import reactLogo from "../../image/react.svg"
import Image from 'next/image';

const Header = () => {
    return (
        <div className='w-[200px]'>
            <Image  src={reactLogo} alt="react-logo" className='react-logo' />
        </div>
    );
};


export default Header;
