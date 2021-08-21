import React from 'react';
import { FaRegUser, FaRegNewspaper, FaPaw, FaRegFlag } from "react-icons/fa";
import './SideMenu.scss'
import { Link } from 'react-router-dom'

function SideMenu() {





    return (
        <div className="sideMenu">
            <div className="sideMenu__content">
                <div className="sideMenu__avatar">
                    <img src="/images/user.jpg" alt="avatar" />
                    <p>Nikola Djordjevic</p>
                </div>
                <div className="sideMenu__nabBar">
                    <Link to='/' className="menuItem">
                        <FaRegUser />
                        <p>HOME</p>
                    </Link>
                    <Link to='/userPage' className="menuItem">
                        <FaRegUser />
                        <p>USER</p>
                    </Link>
                    <Link to='/blogPage' className="menuItem">
                        <FaRegNewspaper />
                        <p>BLOG</p>
                    </Link>
                    <Link to='/animalPage' className="menuItem">
                        <FaPaw />
                        <p>ANIMALS</p>
                    </Link>
                    <Link to='/bannerPage' className="menuItem">
                        <FaRegFlag />
                        <p>BANNERS</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SideMenu;
