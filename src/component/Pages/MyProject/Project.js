import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Project = ({ project }) => {

    return (
        <div>
            <div className="max-w-xs mx-auto rounded-md transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring bg-gray-900 text-gray-100">
                <PhotoProvider>
                    <PhotoView src={project?.img}>
                        <figure><img src={project?.img} className=" object-cover object-center w-full h-36 rounded-t-md bg-gray-500 cursor-zoom-in" alt="" /></figure>
                    </PhotoView>
                </PhotoProvider>
                <div className="flex flex-col justify-between p-6 pt-1 space-y-4">
                    <div className="space-y-1">
                        <h2 className="text-base md:text-2xl font-semibold tracking-wide">{project?.project_name}</h2>
                        <p className="text-gray-100 text-sm">{project?.details.slice(0, 100) + ' ....'}</p>
                    </div>
                    <div className='flex justify-between'>
                        <a target='new tab ' href={project?.live_link} >
                            <button className='btn bg-gradient-to-r from-green-400 to-blue-300 btn-sm normal-case'>Live</button>
                        </a>
                        <a target='new tab' href={project?.client_side} >
                            <button className='btn bg-gradient-to-r from-green-400 to-blue-300 btn-sm text-sm normal-case'>Client</button>
                        </a>
                        <a target='new tab' href={project?.server_side} >
                            <button className='btn bg-gradient-to-r from-green-400 to-blue-300 btn-sm text-sm normal-case'>Server</button>
                        </a>

                    </div>
                    <Link to={`/myProjectDetails/${project.id}`} className="flex items-center justify-center w-full p-2 font-semibold tracking-wide rounded-md bg-gradient-to-r from-green-400 to-blue-300 text-gray-900 "> Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Project;