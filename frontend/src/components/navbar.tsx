import React from 'react';
import { Link } from 'react-router-dom';

import '../styling/main.css'

const Navigation = () => {

    return (
        <div className="navbar bg-base-100 flex justify-end">
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/guide'>How to Use</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation