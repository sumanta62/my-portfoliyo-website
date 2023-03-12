import React from 'react';

import img1 from '../../images/Project/Screenshot (335).png'
import img2 from '../../images/Project/Screenshot (191).png'
import img3 from '../../images/Project/Screenshot (193).png'
import Project from './Project';

const ProjectImage = () => {

    const images = [
        { img: img1 },
        { img: img2 },
        { img: img3 },
    ]
console.log(images);

    return (
        <div>
            { 
            images.map((image, i) =>
            <Project
            key={i}
            image={image}
            ></Project>)
            
        }
        </div>
    );
};

export default ProjectImage;