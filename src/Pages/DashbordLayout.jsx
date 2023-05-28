import { faBars, faCalendar, faHome, faPhone, faShop, faShoppingCart, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashbordLayout = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div> 
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 text-base-content bg-[#D1A054]">
                <li className='mt-2'><Link to='/dashbord'><FontAwesomeIcon icon={faHome}/>User Home</Link></li>

                <li className='mt-2'><Link to='/dashbord/mycart'><FontAwesomeIcon icon={faShoppingCart}/>My Cart</Link></li>


                <li className='mt-2'><Link to='/dashbord/mycart'><FontAwesomeIcon icon={faCalendar}/>Reservation</Link></li>


                <li className='mt-2'><Link to='/dashbord/mycart'><FontAwesomeIcon icon={faCalendar}/>Reservation</Link></li>

                
                <li className='mt-2'><Link to='/dashbord/mycart'><FontAwesomeIcon icon={faWallet}/>Pyment History</Link></li>

                <div className='divider'></div>
                <li className='mt-2 '><Link className='bg-transparent text-black' to='/'><FontAwesomeIcon icon={faHome}/>Home</Link></li>
                <li className='mt-2 '><Link className='bg-transparent text-black' to='/'><FontAwesomeIcon icon={faBars}/>Menu</Link></li>
                <li className='mt-2 '><Link className='bg-transparent text-black' to='/'><FontAwesomeIcon icon={faShop}/>Shop</Link></li>
                <li className='mt-2 '><Link className='bg-transparent text-black' to='/'><FontAwesomeIcon icon={faPhone}/>Contact</Link></li>

                </ul>
            
            </div>
        </div>
    );
};

export default DashbordLayout;