import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../images/Aboute/pic preview.png'

const Navebar = () => {


    const menuItem = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/aboute'>Aboute Us</Link></li>
        <li><Link to='/mySkill'>My Skill</Link></li>
        <li><Link to='/project'>My Projuct</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/contuct'>Contuct Me</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        {/* <li className='border-dashed border-2 rounded-2xl'><a target='/' href="https://drive.google.com/file/d/1Asqns_V1wuPRE-4EuVJekah00HPe-f_1/view?usp=sharing">My Resume</a></li> */}
    </React.Fragment>

    return (
        <div className=''>
            <div style={{ position: 'fixed' }} className='mt-3 border rounded-full  text-white z-10 w-full '>
                <div className="navbar w-11/12 m-auto justify-between font-bold">
                    <div>
                        <Link to='/' className="btn btn-ghost normal-case text-xl">
                            <img src="https://logos-download.com/wp-content/uploads/2021/01/Portfolio_Plus_Banking_Software_Logo.png" className="w-28" alt="" />
                        </Link>
                    </div>
                    <div className="navbar-end">
                        <div className="dropdown flex justify-end">
                            <ul tabIndex={0} className="menu  menu-compact z-0 dropdown-content mt-12 bg-gray-600 text-sky-200 p-2 pt-7 shadow rounded-box w-52 ">
                            {/* <label class="btn btn-sm btn-circle absolute right-2 top-2">✕</label> */}
                                {menuItem}
                            </ul>
                            <div>
                                <label tabIndex={1} className="cursor-pointer bg-inherit lg:hidden">
                                    <img src={logoImg} className="w-12 rounded-full" alt="" />
                                </label>
                            </div>
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