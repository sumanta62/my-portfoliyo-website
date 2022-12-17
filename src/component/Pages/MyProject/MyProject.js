import React, { useEffect, useState } from 'react';
import Project from './Project';

const MyProject = () => {

    const [myProduct, setMyProduct] = useState([]);

    useEffect(() => {
        fetch(`project.json`)
            .then(res => res.json())
            .then(data => setMyProduct(data))
    }, [])
    console.log(myProduct);

    return (
        <div className='bg-gray-800 text-white py-14'>
            <div className="container m-auto w-10/12">
                <div className='text-center w-5/6 md:w-3/6 lg:w-2/6 m-auto'>
                    <h1 className="text-3xl md:text-4xl font-bold pb-2">My Project</h1>
                    <p className='text-sm md:text-md'>I have built a large number of custom websites.
                        Here are some of his samples.</p>
                </div>
                <div className='max-w-5xl mt-8 mx-auto grid flex-cols md:grid-cols-2 lg:grid-cols-3 gap-8'>

                    {
                        myProduct.map(project => <Project key={project.id} project={project} ></Project>)
                    }

                </div>
            </div>
        </div>
    );
};

export default MyProject;