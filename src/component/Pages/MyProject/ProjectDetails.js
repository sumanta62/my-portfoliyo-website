import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
    const loader = useLoaderData();

    return (
        <div className='bg-gray-700'>
            <div className="text-white pt-24">
                <div className="">
                    <img
                        src={loader?.img}
                        className=" w-full md:w-8/12 h-[400px] md:h-[450] lg:h-[500px] m-auto object-contain "
                        alt=""
                    />
                </div>
                <div className=" px-5 md:px-10 z-10 -mt-32 relative mx-auto mb-5 lg:mb-10 space-y-5">
                    <div className="w-44 md:w-60 border mx-auto z-10 ">
                        <img src={loader?.img} className="w-full border" alt="" />
                    </div>
                    <div>
                        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold hover:underline cursor-pointer text-center ">
                            {loader?.project_name}{" "}
                        </h1>
                    </div>
                </div>
                <div className="bg-gray-800 pt-6 pb-4">
                    <div className="md:flex justify-between mx-5 md:mx-10 gap-5 md:gap-20 lg:gap-44 space-y-5">
                        <div className="w-full md:w-8/12  m-auto ">
                            <div className="mb-5 flex justify-between items-center">
                                <div className="flex justify-between">
                                    <h1 className="text-2xl md:text-3xl font-bold">Overview</h1>
                                </div>
                                <Link to="/">
                                    <button className=' border px-3 py-2 rounded-lg hover:bg-sky-600 hover:border-sky-600'>Back Page</button></Link>
                            </div>
                            <hr className="text-gray-400" />
                            <div className="  pt-5">
                                <div className=" gap-x-5 flex justify-end">
                                    <div className='space-y-2'>
                                        <p className='text-sm md:text-lg'><span className='text-md md:text-lg  font-bold mr-2 underline underline-offset-4'>Title :</span><span className='text-xl ml-2'> {loader?.project_name}</span></p>
                                        <p className='text-sm md:text-lg'><span className='text-md md:text-lg  font-bold mr-2 underline underline-offset-4'>Publish Date : </span>{loader?.post_date}</p>
                                        <p><span className='text-md md:text-lg  font-bold mr-2 underline underline-offset-4'>Live Link : </span><a
                                            href={loader?.live_link}
                                            target="_blank"
                                            className="hover:underline text-blue-600 text-sm md:text-lg"
                                            alt=""
                                            rel="noreferrer"
                                        >
                                            {loader?.live_link ? loader?.live_link.slice(0, 29) : "loader?.live_link"}
                                        </a> </p>
                                        <p><span className='text-md md:text-lg  font-bold mr-2 underline underline-offset-4'>Client_side_code :</span> <a
                                            href={loader?.client_side}
                                            target="_blank"
                                            className="hover:underline text-blue-600 text-sm md:text-lg"
                                            alt=""
                                            rel="noreferrer"
                                        >
                                            {loader?.client_side ? loader?.client_side.slice(0, 31) : "loader?.client_side"}
                                        </a></p>
                                        <p><span className='text-md md:text-lg  font-bold mr-2 underline underline-offset-4'>Server_side_code : </span>  <a
                                            href={loader?.server_side}
                                            target="_blank"
                                            className="hover:underline text-blue-600 text-sm md:text-lg"
                                            alt=""
                                            rel="noreferrer"
                                        >
                                            {loader?.server_side ? loader?.server_side.slice(0, 31) : "loader?.server_side"}
                                        </a></p>
                                        <p className='text-sm md:text-lg'> <span className='text-md md:text-lg  font-bold mr-2 underline underline-offset-4'>Technology :</span>  {loader?.technology} </p>
                                        <p className='text-sm md:text-lg'> <span className='text-md md:text-lg  font-bold mr-2 underline underline-offset-4'>Details :</span>  {loader?.details} </p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3 mt-8">
                                <h1 className="text-2xl md:text-3xl font-bold">
                                    Screenshots (05)
                                </h1>
                                <hr className="text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;