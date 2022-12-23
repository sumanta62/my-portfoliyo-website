import React from 'react';
import skillImage from '../../images/Skill/pexels-startup-stock-photos-7114.jpg'
import image1 from '../../images/Skill/js.jpg'
import image2 from '../../images/Skill/es6.png'
import image3 from '../../images/Skill/reactjs.png'
import image4 from '../../images/Skill/nodejs-icon-logo.png'
import image5 from '../../images/Skill/exprease.png'
import image6 from '../../images/Skill/mongodb.svg.png'
import image7 from '../../images/Skill/JSON.png'
import image8 from '../../images/Skill/jquery.png'
import image9 from '../../images/Skill/tailwindcss.png'
import image10 from '../../images/Skill/ReactBootstrap.png'
import image11 from '../../images/Skill/CSS3.png'
import image12 from '../../images/Skill/html.png'
import image13 from '../../images/Skill/java.png'
import image14 from '../../images/Skill/TypeScript.png'
import image15 from '../../images/Skill/material-ui.png'
import image16 from '../../images/Skill/ithub.svg.png'
import image17 from '../../images/Skill/npm.png'
import image18 from '../../images/Skill/Visual_Studio.png'
import image19 from '../../images/Skill/firebase.png'
import image20 from '../../images/Skill/Netlify.png'
import image21 from '../../images/Skill/create-react-app.png'
import image22 from '../../images/Skill/chrome-dev-.png'

const expertiseSkills = [
    { image: image1, title: 'JavaScript' },
    { image: image8, title: 'jQuery' },
    { image: image3, title: 'React.js' },
    { image: image2, title: 'ES6' },
    { image: image4, title: 'Node.js' },
    { image: image6, title: 'MongoDB' },
    { image: image5, title: 'Express.js' },
    { image: image7, title: 'JSON' },
    { image: image10, title: 'React Bootstrap' },
    { image: image9, title: 'Tailwind CSS' },
    { image: image11, title: 'CSS3' },
    { image: image12, title: 'HTML5' }
]

const familiarSkill = [
    { images: image13, title: 'Java' },
    { images: image14, title: 'TypeScript' },
    { images: image15, title: 'Materia-Ui' },
]
const toolsSkill = [
    { images: image16, title: 'GitHub' },
    { images: image17, title: 'NPM' },
    { images: image18, title: 'VS Code' },
    { images: image19, title: 'Firebase' },
    { images: image20, title: 'Netlify' },
    { images: image21, title: 'Create React App' },
    { images: image22, title: 'Chrome Dev tool' },
]


const MySkill = () => {

    return (
        <div className=''>
            <div id="slide1" className=" w-full text-white">
                <div className=" hero bg-fixed" style={{ backgroundImage: `url(${skillImage})`, minHeight: "100vh" }}>
                    <div className="hero-overlay bg-opacity-60 ">
                        <div className=' pb-3 mt-24 m-auto text-center w-5/6 md:w-3/6 lg:w-2/6 '>
                            <h1 className="text-3xl md:text-4xl font-bold pb-2">My Skill</h1>
                            <p className='text-sm '>As a front-end developer, I try to work to the best of my ability to get the position.</p>
                        </div>
                        <div className='w-5/6 md:w-4/6 m-auto'>
                            <div className='text-center'>
                                <h4 className='text-2xl md:text-3xl text-gray-50 '>Expertise</h4>
                                <hr className='w-48 m-auto' />
                                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 text-center mt-2'>
                                    {
                                        expertiseSkills.map(skill => 
                                            <div className='items-center py-1 px-2 overflow-hidden rounded-lg shadow-md bg-gray-800 text-gray-100 m-4 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring cursor-pointer'>
                                                <div className='flex justify-center'>
                                                    <img src={skill?.image} alt="" className='rounded-full w-8 mr-2' />
                                                </div>
                                                <p className='text-xs'>{skill?.title}</p>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            {/* /////////////////////////// Familiar //////////////////// */}
                            <div className='text-center my-8'>
                                <h4 className='text-2xl md:text-3xl text-gray-50'>Familiar</h4>
                                <hr className='w-40 m-auto' />
                                <div className='flex flex-wrap justify-center mt-2'>
                                    {
                                        familiarSkill.map(familiar =>
                                            <div className='items-center py-1 px-2 overflow-hidden rounded-lg shadow-md bg-gray-800 text-gray-100 m-4 w-28 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring cursor-pointer'>
                                                <div className='flex justify-center'>
                                                    <img src={familiar?.images} alt="" className='rounded-full w-8 mr-2' />
                                                </div>
                                                <p className='text-xs'>{familiar?.title}</p>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            {/* /////////////////////////// Tools //////////////////// */}
                            <div className='text-center'>
                                <h4 className='text-2xl md:text-3xl  text-gray-50 '>Tools</h4>
                                <hr className='w-36 m-auto' />
                                <div className='flex flex-wrap justify-center mt-2 mb-7'>
                                    {
                                        toolsSkill.map(tools =>
                                            <div className='items-center py-1 px-2 overflow-hidden rounded-lg shadow-md bg-gray-800 text-gray-100 m-4 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring cursor-pointer w-24'>
                                                <div className='flex justify-center'>
                                                    <img src={tools?.images} alt="" className='rounded-full w-8 mr-2' />
                                                </div>
                                                <p className='text-xs'>{tools?.title}</p>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySkill;