import React from 'react';
import { Link } from 'react-router-dom';


const Project = ({ project }) => {
  
    return (
        <div>
            <div className="max-w-xs mx-auto rounded-md transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring bg-gray-900 text-gray-100">
                <img src={project?.img} alt="" className=" object-cover object-center w-full h-36 rounded-t-md  bg-gray-500" />
                <div className="flex flex-col justify-between p-6 pt-1 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-base md:text-2xl font-semibold tracking-wide">{project?.project_name}</h2>
                        <p className="text-gray-100 text-sm">{project?.details.slice(0, 100) + ' ....'}</p>
                    </div>
                    <div>
                        <a target='new tab' href={project?.live_link} className="text-3lg font-bold text-blue-800 underline">Live Link </a>
                    </div>
                    <Link to={`/myProjectDetails/${project.id}`} className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gradient-to-r from-green-400 to-blue-300 text-gray-900"> Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Project;