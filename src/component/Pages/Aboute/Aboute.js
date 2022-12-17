import React from 'react';
import abouteImg from '../../images/Aboute/pic preview.png'

const Aboute = () => {
    return (
        <div className=''>
            <section className="bg-gray-900 text-gray-100">
                {/* style={{ backgroundImage: `url(${abouteImg2})`, minHeight: "100vh" }} */}
                <div className=" hero" >
                    <div className="container flex items-center flex-col md:flex-col-2 justify-center mx-auto py-10 md:flex-row lg:justify-start">
                        <div className="flex w-full md:w-3/6 lg:2/5">
                            <img src={abouteImg} alt="" className="object-contain w-3/5 m-auto rounded-lg" />
                        </div>
                        <div className=" justify-center items-center w-11/12 md:w-3/6  lg:text-left  md:mx-10">
                            <h1 className="text-3xl md:text-4xl font-bold leading-none text-center lg:text-left mt-5 md:mt-0">Aboute Us</h1>
                            <p className="mt-6 mb-2 text-sm text-justify leading-5">To obtain a responsible and challenging front-end developer, To continuously enhance my knowledge, skills, attitude, and experience by getting involved in challenging work environments and utilizing them for personal and organizational purposes in the best possible way. I am self-motivated, energetic, enthusiastic, and always ready to learn new things. </p>
                            <p className=" mb-3 text-sm sm:mb-12  text-justify leading-5">I have built a large number of custom websites. I am confident in my ability to ensure the highest level of professionalism and commitment to my job. Thank you for your time and consideration. </p>
                            <div className="flex space-y-4 sm:items-center justify-center  sm:justify-center md:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                <button rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg  font-semibold rounded animate-bounce bg-gradient-to-r from-green-400 to-blue-300 text-gray-900">Aboute Me</button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Aboute;