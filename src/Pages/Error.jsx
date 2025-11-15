import React from 'react';
import { Link } from 'react-router';
import ErrorImage from '../assets/Gemini_Generated_Image_f6byuhf6byuhf6by.png'

const Error = () => {
    return (
        <div className='max-w-[400px] mx-auto my-8 px-4 flex flex-col items-center gap-4 text-center'>
            <div className='w-full'>
                <img className='w-full h-auto rounded-xl' src={ErrorImage}/>
            </div>
            <h2 className='text-xl md:text-2xl font-bold'>Looks like this page has gone <br/> walkies...</h2>
            <p className='text-center'>We can't seem to find the page you're looking for It might have been moved, renamed, oris temporarily unavailable</p>
            <Link to='/' className='btn text-white bg-[#a64259]'>Return to Home</Link>
        </div>
    );
};

export default Error;