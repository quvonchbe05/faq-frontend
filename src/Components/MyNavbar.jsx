import React from 'react';
import { DarkThemeToggle, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
    return (
        <Navbar fluid rounded className='m-2 py-3.5 drop-shadow-md'>
            <div className='flex items-center'>
                <Link to={'/'} className='flex items-center'>
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">FAQ</span>
                </Link>
            </div>
            <DarkThemeToggle className='ml-3' />
        </Navbar>
    );

}
export default MyNavbar;
