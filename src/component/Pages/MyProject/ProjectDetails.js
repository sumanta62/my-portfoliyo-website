import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
   const prjectDetails = useLoaderData();
   console.log(prjectDetails);

    return (
        <div className='pt-24 bg-black'>
            <h2 className='text-4xl text-white text-center'>Project Details</h2>
        </div>
    );
};

export default ProjectDetails;