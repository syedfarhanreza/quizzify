import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/topics'>Topics</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/statistics'>Statistics</Link>
        </nav>
    );
};

export default Header;