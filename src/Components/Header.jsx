import React from 'react'
import { Link, NavLink } from 'react-router'

const Header = () => {
    const menuItems=<>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/products'>Products</NavLink></li>
     <li><NavLink to='/contact'>Contact</NavLink></li>
    </>
  return (
    <div className='shadow-sm'>
     <div className="navbar bg-base-100 mx-auto  container">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 text-lg text-red-700 font-bold rounded-box z-1 mt-3 w-52 p-2 shadow">
    {menuItems}
      </ul>
    </div>
        <Link to='/' className=""><img className='w-30 h-15 ' src="../../src/assets/logo.png" alt="" /></Link>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg text-red-700 font-bold">
          {menuItems}

    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/login' className="btn bg-base-100 border-2 font-bold border-red-700 text-red-700 hover:bg-red-700 hover:text-white">Login</Link>
  </div>
</div> 
    </div>
  )
}

export default Header
