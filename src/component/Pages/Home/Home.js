import React from 'react';
import Aboute from '../Aboute/Aboute';
import Banner from '../Banner/Banner';
import Cuntuct from '../Cuntuct/Cuntuct';
import MyProject from '../MyProject/MyProject';
import ProjectDetails from '../MyProject/ProjectDetails';
import MySkill from '../MySkill/MySkill';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Aboute></Aboute>
            {/* <ProjectDetails></ProjectDetails> */}
            <MySkill></MySkill>
            <MyProject></MyProject>
            <Services></Services>
            <Cuntuct></Cuntuct>
        </div>
    );
};

export default Home;