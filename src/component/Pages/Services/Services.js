import React, { useEffect, useState } from 'react';
import servicesImage from '../../images/Services/pexels-tranmautritam-326503.jpg'


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`services.json`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className=" hero" style={{ backgroundImage: `url(${servicesImage})`, minHeight: "100vh" }}>
            <div className="hero-overlay bg-opacity-90 text-white">
                <div className='container m-auto w-10/12 mb-16'>
                    <div className=' pb-5 mt-24 text-center w-5/6 md:w-3/6 lg:w-2/6 m-auto'>
                        <h1 className="text-3xl md:text-4xl font-bold pb-2">Services</h1>
                        <p className='text-sm '>A web designer is responsible for a website’s appearance. These designs need to be handed to a web developer to create them.</p>
                    </div>
                    <div>
                        <div className=' mt-8 mx-auto grid flex-cols md:grid-cols-2 gap-y-16'>

                            {
                                services.map(servise=>
                                    <div className="max-w-xs md:max-w-md mx-auto p-6 rounded-md transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring border border-zinc-500 bg-gray-800">
                                        <img src={servise?.img} alt="" className=" object-cover object-center w-14  md:w-16 rounded-t-md -mt-14" />
                                        <div className="flex flex-col justify-between pt-1 space-y-4">
                                            <div className="space-y-1">
                                                <h2 className="text-base md:text-2xl font-semibold tracking-wide">{servise?.project_name}</h2>
                                                <p className="text-gray-100 text-sm">{servise?.details.slice(0, 100) + ' ....'}</p>
                                            </div>
                                            <div>
                                                <a target='new tab' href={servise?.live_link} className="text-lg font-bold text-blue-800 underline">Web Link </a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;