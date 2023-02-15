import React from 'react';
import { Link } from 'react-router-dom';
import { CgMenuGridR } from "react-icons/cg";
const Navbar = () => {

    const menu =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/media'>Media</Link></li>
            <li><Link to='/message'>Message</Link></li>
            <li><Link to='/about'>About</Link></li>
        </>
    const userAccount =
        <>
            <li><Link to='/register'>Sign Up</Link></li>
            <li><Link to='/login'>Log in</Link></li>
            <li><Link>Logout</Link></li>
        </>

    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <CgMenuGridR className='text-xl'></CgMenuGridR>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                        {
                            menu
                        }
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl font-bold"><span className='text-slate-700'>Post</span><span className='text-indigo-500'>Hub</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {
                        menu
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSegCgK5aWTTuv_K5TPd10DcJxphcBTBct6R170EamgcCOcYs7LGKVy7ybRc-MCwOcHljg&usqp=CAU" alt=''/>
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            userAccount
                        }
                    </ul>
                </div>
            </div>

        </div >
    );
};

export default Navbar;