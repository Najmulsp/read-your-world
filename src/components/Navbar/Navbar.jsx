import { NavLink } from "react-router-dom";


const Navbar = () => {

    const links = <>
            {/* <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/list">Listed Books</NavLink></li>            
            <li><NavLink to="/pages">Pages to Read</NavLink></li> 
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li> */}
            <li><NavLink
              to="/"
              className={({ isActive }) =>
              isActive ? "border border-lime-600 rounded-lg text-lime-600 font-semibold py-2 px-4" : ""
                }
            >Home</NavLink></li>

            <li><NavLink
              to="/list"
              className={({ isActive }) =>
              isActive ? "border border-lime-600 rounded-lg text-lime-600 py-2 px-4" : ""
                }
            >Listed Books</NavLink></li>
            <li><NavLink
              to="/pages"
              className={({ isActive }) =>
              isActive ? "border border-lime-600 rounded-lg text-lime-600 py-2 px-4" : ""
                }
            >Pages to Read</NavLink></li>
            <li><NavLink
              to="/blog"
              className={({ isActive }) =>
              isActive ? "border border-lime-600 rounded-lg text-lime-600 py-2 px-4" : ""
                }
            >Blog</NavLink></li>
            <li><NavLink
              to="/register"
              className={({ isActive }) =>
              isActive ? "border border-lime-600 rounded-lg text-lime-600 py-2 px-4" : ""
                }
            >Register</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Read Your World</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end ">
    <a className="btn mr-3 bg-lime-600 text-white px-6">Sign In</a>
    <a className="btn bg-cyan-500 text-white px-6">Sign Up</a>
  </div>
</div>
    );
};

export default Navbar;