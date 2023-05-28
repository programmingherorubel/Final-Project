import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import useCart from '../Hooks/useCart';

const Navbar = () => {
    const {user,logout} = useContext(AuthContext)
    const [cart] = useCart()


    const navOptions = <>
    
                
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/menu'>Menu</Link></li>
                <li><Link to='/order/salad'>Order</Link></li>
                <li><Link to='/Login'>Login</Link></li>
                <li><Link to='/demo'>Demo</Link></li>
                {user?.displayName && <li><Link to=''>{user.displayName}</Link></li>}

                
                </>
    return (
        <div className="navbar fixed top-0 z-50 bg-black opacity-40 max-w-screen-xl text-white mx-auto ">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                   {navOptions}
                </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navOptions}
                </ul>
            </div>
            {user?.email ? <div onClick={()=>logout()} className="navbar-end">
                <a className="btn">Logout</a>
            </div>
            :
            <div className="navbar-end">
                <a className="btn">Login</a>
            </div>}
            {/* cart */}
            <div className="mx-4 gap-2">
                <Link to='/' className='flex gap-2'><FontAwesomeIcon className='text-white' icon={faCartShopping}/>
                <div className="badge badge-secondary">{cart?.length || 0}</div></Link>
            </div>
            </div>
    );
};

export default Navbar;