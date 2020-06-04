import React from 'react';
import '../assets/styles/Navbar.css';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    return(
        <div className = 'navbar grid theme-grad-bg'>
           <NavLink to = '/'> <motion.div whileHover = {{scale: 1.1}} id = 'home' /> </NavLink>
           <NavLink to = '/search'> <motion.div whileHover = {{scale: 1.1}} id = 'search' /> </NavLink>
           <NavLink to = '/create'> <motion.div whileHover = {{scale: 1.1}} id = 'create' /> </NavLink>
           <NavLink to = '/me'> <motion.div whileHover = {{scale: 1.1}} id = 'profile' /> </NavLink> 
        </div>
    )
}

export default Navbar;