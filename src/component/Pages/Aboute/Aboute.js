import React from 'react';
import abouteImg from '../../images/Aboute/pic preview.png'
import bgImage from '../../images/Aboute/banner.png'

const Aboute = () => {
    return (
        <div className=''>
            <section className="bg-gray-800 text-gray-100">
                <div className=" hero" style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: 'center center', minWidth: '100%', backgroundSize: 'cover'}}>
                    <div className="hero-overlay bg-opacity-30">
                        <div className=" hero" >
                            <div className="container flex items-center flex-col md:flex-col-2 justify-center mx-auto py-10 md:flex-row lg:justify-start">
                                <div className="flex w-full md:w-3/6 lg:2/5">
                                    <img src={abouteImg} alt="" className="object-contain w-3/5 m-auto rounded-lg" />
                                </div>
                                <div className=" justify-center items-center w-11/12 md:w-3/6  lg:text-left  md:mx-10">
                                    <h1 className="text-3xl md:text-4xl font-bold leading-none text-center lg:text-left mt-5 md:mt-0">Aboute Us</h1>
                                    <p className="mt-6 mb-2 text-sm text-justify">My name is Sumanta Majumder. I am pursuing a diploma in engineering from the Department of Computers at Patuakhali Polytechnic Institute. I developed skills and strengthened my existing abilities during my web development course at Programming Hero and PeopleNTech Institute of Information Technology.</p>
                                    <p className="mb-2 text-sm text-justify leading-5">My web development course honed my aptitude with JavaScript, jQuery, ES6, React.js, Node.js, Express.js, MongoDB, JSON, React Bootstrap, Tailwind CSS, Bootstrap5, CSS3, and HTML5 user interfaces. I have built a large number of custom websites. I am hardworking and responsible at work. I have the ability to work together with the company team.</p>
                                    <p className=" mb-3 text-sm sm:mb-12  text-justify leading-5">I will prove myself to be an essential asset through my dedication, sincerity, and professionalism. Thank you for your time and consideration.</p>
                                    <div className="flex space-y-4 sm:items-center justify-center  sm:justify-center md:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                        <button rel="noopener noreferrer" href="#" className="px-6 py-2 text-lg  font-semibold rounded bg-gradient-to-r from-green-400 to-blue-300 text-gray-900 transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring ">Aboute Me</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Aboute;