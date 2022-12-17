import React from 'react';
import images1 from '../../images/Banner/pexels-cottonbro-studio-6804604.jpg'
import { TypeAnimation } from 'react-type-animation';
import abouteImg from '../../images/Banner/20220416_144646-removebg-preview-removebg-preview.png'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className=" hero" style={{ backgroundImage: `url(${images1})`, backgroundPosition:'center center', minWidth:'100%', backgroundSize:'cover',   minHeight: "100vh" }}>
                    <div className="hero-overlay bg-opacity-70">
                        <div className=" text-neutral-content h-full flex flex-col-reverse md:flex-row justify-between items-center w-11/12 sm:w-10/12 m-auto p-5">
                            <div className=" w-full text-center md:text-start">
                               <div className='w-5/6 lg:w-4/6 m-auto md:m-0'>
                               <h1 className="mb-1 text-2xl lg:text-4xl font-bold "><span className='text-green-400'>Hi I'M</span> <br /> <span className='text-sky-300 '>SUMANTA MAJUMDER</span></h1>
                                <TypeAnimation
                                    sequence={[
                                        `I AM FRONT-END DEVELOPER`,  // Types 'One'
                                        2000, // Waits 1s
                                        'I ',  // Deletes 'One' and types 'Two'
                                        // 2000, // Waits 2s
                                        // 'I AM SUMANTA MAJUMDER. I AM FRONTEND DEVELOPER', // Types 'Three' without deleting 'Two'

                                        // () => {
                                        //     console.log('Done typing!'); // Place optional callbacks anywhere in the array
                                        // }
                                    ]}
                                    wrapper="div"
                                    cursor={true}
                                    repeat={Infinity}
                                    style={{ fontSize: '30px', lineHeight:'27px' }}
                                />
                                <p className='mt-6 text-sm md:text-md text-justify'>I am a front-end developer with industry experience building websites and web applications. I specialize in JavaScript and have professional experience working with React.js, and MongoDB. </p>
                                <div className='mt-7'>
                                    <button className='outline-dashed outline-2 outline-offset-2 rounded-2xl py-1 px-4 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring'><a target='/' href="https://drive.google.com/file/d/1Asqns_V1wuPRE-4EuVJekah00HPe-f_1/view?usp=sharing">My Resume</a></button>
                                </div>
                               </div>
                            </div>
                            <div className=" mt-20 md:mt-0 mb-3">
                                <img src={abouteImg} alt="" className="object-contain rounded-lg border w-4/6 lg:w-full m-auto " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;