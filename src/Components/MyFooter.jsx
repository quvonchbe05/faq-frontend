import { Footer } from 'flowbite-react';
import React from 'react';

const MyFooter = () => {
    return (
        <div className='p-2'>
            <Footer className='drop-shadow-md flex justify-center' container>
                <Footer.Copyright href="#" by="FAQ" year={new Date().getFullYear()} />
            </Footer>
        </div>
    );
}

export default MyFooter;
