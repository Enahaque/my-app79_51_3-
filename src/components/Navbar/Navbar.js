import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Navbar = () => {
    const[open,setOpen]=useState(false);
    const routes = [
        {id:1,name:'Home',link:'/Home'},
        {id:2,name:'Shop',link:'/Shop'},
        {id:3,name:'Deals',link:'/Deals'},
        {id:4,name:'Coupons',link:'/Coupons'},
        {id:5,name:'Contact',link:'/Contact'},
    ]
    return (
        <nav className='bg-gray-300'>

            <div onClick={()=>setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon className='text-amber-500'></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center absolute md:static duration-1000 ease-in text-amber-500 bg-gray-300 w-full ${open ? 'top-10'  :'top-[-120px]'}`}>
                
                {
                    routes.map(route=><Link
                    key={route.id}
                    route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;