import React from 'react';
import { BsFacebook, BsLinkedin, BsPhone } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-gray-900 text-white'>
            <footer className=" container m-auto p-4 py-12" >

                <div className="footer flex gap-10 md:gap-8 sm:p-3 justify-center md:justify-between lg:px-12 xl:px-28 ">
                    <div className='hidden md:flex'>
                    <div className='grid'>
                        
                        <span className="footer-title">Project</span>
                        <Link className="link link-hover">Second hand car</Link>
                        <Link className="link link-hover">Healthful Food</Link>
                        <Link className="link link-hover">Dentist Expert</Link>
                    
                    </div>
                    </div>
                    <div className='hidden md:flex'>
                    <div className='grid'>
                        <span className="footer-title">Home Page</span>
                        <Link className="link link-hover">About us</Link>
                        <Link className="link link-hover">Project</Link>
                        <Link className="link link-hover">Contact</Link>
                    </div>
                    </div>
                    <div className='justify-items-center md:justify-items-start'>
                        <span className="footer-title">Contuct Me</span>
                        <div className='flex gap-3'>
                            <a href='https://web.facebook.com/S.K.Sumanta25'><BsFacebook>Facebook</BsFacebook></a>
                            <a href="https://www.linkedin.com/in/sumanta-majumder"><BsLinkedin></BsLinkedin> </a>

                        </div>
                        <a href='/'>+880 1917123225</a>
                        <a href='/'>sumantamajumder62@gmail.com</a>
                    </div>
                </div>

                <div className='text-center mt-10'>
                    <p className='text-sm '>Copyright © 2022 - My Portfolio</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;