import React from 'react';
import { BsFacebook, BsLinkedin, BsGithub, BsTwitter , BsFillTelephoneInboundFill} from 'react-icons/bs';
import {SiGmail} from 'react-icons/si';
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
                            <a target={'_tab'} href='https://web.facebook.com/S.K.Sumanta25'><BsFacebook></BsFacebook></a>
                            <a target={'_tab'} href="https://www.linkedin.com/in/sumanta-majumder"><BsLinkedin></BsLinkedin> </a>
                            <a target={'_tab'} href="https://twitter.com/Sumanta225"><BsTwitter></BsTwitter> </a>
                            <a target={'_tab'} href="https://github.com/sumanta62"><BsGithub></BsGithub> </a>

                        </div>
                       <p className='flex items-center gap-2'> <BsFillTelephoneInboundFill></BsFillTelephoneInboundFill><span> +880 1917123225</span> </p> 
                        <p className='flex items-center gap-2'> <SiGmail></SiGmail> <span>sumantamajumder62@gmail.com</span></p>
                    </div>
                </div>

                <div className='text-center mt-10'>
                    <p className='text-sm '>Copyright © 2022 - Sumanta Portfoliyo</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;