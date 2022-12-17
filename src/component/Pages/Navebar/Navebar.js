import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navebar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItem = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/aboute'>Aboute Us</Link></li>
        <li><Link to='/mySkill'>My Skill</Link></li>
        <li><Link to='/project'>My Projuct</Link></li>
        <li><Link to='/contuct'>Contuct Me</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/myProjectDetails/:id'>Blog</Link></li>
        <li className='border-dashed border-2 rounded-2xl'><a target='/' href="https://drive.google.com/file/d/1Asqns_V1wuPRE-4EuVJekah00HPe-f_1/view?usp=sharing">My Resume</a></li>
    </React.Fragment>

    return (
        <div className='w-80'>
            <div style={{ position: 'fixed' }} className='mt-5 border rounded-full  text-white z-10 w-full '>
                <div className="navbar w-11/12 m-auto justify-between font-bold">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={1} className="menu menu-compact z-0 dropdown-content mt-3 bg-gray-600 text-sky-200  p-2 shadow rounded-box w-52">
                                {menuItem}
                            </ul>
                        </div>
                        <div>
                            <Link to='/' className="btn btn-ghost normal-case text-xl">
                                <img src="https://logos-download.com/wp-content/uploads/2021/01/Portfolio_Plus_Banking_Software_Logo.png" className="w-28" alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal text-sky-200 ">
                            {menuItem}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navebar;