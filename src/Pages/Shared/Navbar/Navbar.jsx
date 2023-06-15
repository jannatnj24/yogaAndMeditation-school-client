import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Components/Providers/AuthProvider';

const Navbar = () => {
    const {user,logOut}=useContext(AuthContext);
  const handleLogOut = () => {
      logOut()
          .then()
          .catch(error => console.log(error));
  }
  console.log(user)
    return (
        <div  className="navbar  bg-slate-900 fixed z-10 bg-opacity-30  max-w-screen-xl text-blue-900">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn bg-blue-100 lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow font-bold bg-blue-400 z-10 bg-opacity-80 rounded-box w-52">
            <li><Link className='text-black  font-bold' to="/">Home</Link> </li>
            <li><Link className='text-black  font-bold' to="/instructors">Instructors</Link> </li>
            <li><Link className='text-black  font-bold' to="/classes">Classes</Link> </li>
            <div className=" navbar-end">
          
            
        </div>
              
            
            </ul>
          </div>
           
          <Link className="btn btn-ghost font-bold normal-case text-xl "> <span className="text-green-600">YOGA AND MEDITATION SCHOOL</span>
          </Link>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li><Link className='text-white  font-bold' to="/">Home</Link> </li>
            <li><Link className='text-white  font-bold' to="/instructors">Instructors</Link> </li>
            <li><Link className='text-white  font-bold' to="/classes">Classes</Link> </li>
           
           {user&& <li><Link className='text-white' to="/dashboard ">Dashboard</Link> </li>}
         
         
          </ul>
        </div>
        <div>     
        </div>
        <div className=" navbar-end">
          {user && <img className='rounded-full w-[30px] md:m-4' src={user.photoURL}  /> }
           {user ? <p onClick={handleLogOut} className=" text-white font-bold mx-2">Log Out</p>:<Link to="/login" className=" text-white mx-2 font-bold">Login</Link> }
        </div>
      </div>
    );
};

export default Navbar;