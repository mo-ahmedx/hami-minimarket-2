import logo from '../assets/hami-logo.png';
import { useState } from 'react';
import Menu from '../assets/menu.png';
import Close from '../assets/close.png';
import LightMode from '../assets/LightMode.png';
import DarkMode from '../assets/DarkMode.png';
import Cart from '../../public/cart-3-svgrepo-com.svg';

function Header({ scrollTo, refs, cartcount }) {
    const [menu, setMenu] = useState(false);
    const { homeRef, productsRef, aboutRef, contactRef } = refs;

    function menuToggle() {
        setMenu(prev => !prev);
    }
    const [darkMode, setDarkMode] = useState(false);

    function darkModeToggle(){
        setDarkMode(prev => !prev);
    }

    return (
        <>
            <nav className={` ${darkMode? "bg-black/50" : "bg-white/40" } fixed top-0 left-0 z-50 backdrop-blur flex justify-between items-center pt-3 px-0 shadow-sm shadow-primaryYellow w-full`}>
                <div className='flex gap-2 items-center'>
                    <img src={logo} alt="Hami Skills Logo " onClick={() => scrollTo(homeRef)} className='w-[50px] h-[50px]' />
                    <h1 className={`p-2 font-heading  ${darkMode? "text-white" : "text-black"}`} onClick={() => scrollTo(homeRef)} >Hami MiniMarket</h1>
                </div>

                <ul className={`list-none hidden md:flex font-body `}>
                    <li className={`mx-4 ${darkMode? "text-white" : "text-black"} cursor-pointer p-2 hover:text-primaryYellow`} onClick={() => scrollTo(homeRef)}>Home</li>
                    <li className={`mx-4 ${darkMode? "text-white" : "text-black"} cursor-pointer p-2 hover:text-primaryYellow`} onClick={() => scrollTo(productsRef)}>Products</li>
                    <li className={`mx-4 ${darkMode? "text-white" : "text-black"} cursor-pointer p-2 hover:text-primaryYellow`} onClick={() => scrollTo(aboutRef)}>About</li>
                    <li className={`mx-4 ${darkMode? "text-white" : "text-black"} cursor-pointer p-2 hover:text-primaryYellow`} onClick={() => scrollTo(contactRef)}>Contacts</li>
                </ul>

                <div className='flex justify-between'>
                    <img src={darkMode? LightMode : DarkMode } onClick={darkModeToggle} alt="" className='w-8 h-8 mr-6'/>
                    <img
                        onClick={menuToggle}
                        src={menu ? Close : Menu}
                        alt="Menu"
                        className='w-8 h-8 mr-4 md:hidden cursor-pointer'
                    />
                    <div className='relative mr-4'>
                    <img src={Cart} className=' w-8 h-8 cursor-pointer' />
                    <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs flex items-center justify-center w-5 h-5 rounded-full'>{cartcount}</span>
                    </div>

                </div>
            </nav>

            {menu && (
                <div className=' dark:bg-black/30 fixed top-14  items-center gap-6 md:hidden backdrop-blur  bg-white/25 w-full h-[calc(100vh-3.5rem)]  z-40 animate-slideDown'>
                    <ul className='flex flex-col font-body pt-6 text-xl items-center gap-6'>
                        <li className='dark:text-white p-2 font-bold hover:text-primaryYellow cursor-pointer'
                            onClick={() => { scrollTo(homeRef); menuToggle(); }}>
                            Home
                        </li>
                        <li className='p-2 dark:text-white font-bold hover:text-primaryYellow cursor-pointer'
                            onClick={() => { scrollTo(productsRef); menuToggle(); }}>
                            Products
                        </li>
                        <li className='p-2 dark:text-white font-bold hover:text-primaryYellow cursor-pointer'
                            onClick={() => { scrollTo(aboutRef); menuToggle(); }}>
                            About
                        </li>
                        <li className='p-2 dark:text-white font-bold hover:text-primaryYellow cursor-pointer'
                            onClick={() => { scrollTo(contactRef); menuToggle(); }}>
                            Contacts
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}

export default Header;
