import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import HedNavbar from '../HedNavbar/HedNavbar';
import Navebar from '../Navebar/Navebar';

const Main = () => {
    return (
        <div>
            {/* <HedNavbar></HedNavbar> */}
            <Navebar></Navebar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;