import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import './Header.css'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav>

            <div>
                <Link to='/' className='main-name'>Quizzify</Link>
            </div>

            <div onClick={() => setOpen(!open)} className='bar-icon'>
                {
                    open ? <XMarkIcon /> : <Bars3Icon />

                }
            </div>


            <div className={`nav-links ${open ? 'side1' : 'side2'}`} >
                <Link to='/'>Home</Link>
                <Link to='/topics'>Topics</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blogs'>Blogs</Link>

            </div>

        </nav>
    );
};

export default Header;