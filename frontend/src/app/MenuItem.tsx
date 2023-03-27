import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MenuItem.module.css'

interface Iprops {
    icon: string, 
    name: string,
    link: string,
}
const MenuItem = (props: Iprops) => {
    const {icon, name, link} = props
    return (
        <div className={classes.menuItem}>                
            <i className={icon}></i>
                <span>
                    <button><NavLink to={link}>{name}</NavLink></button>
                </span>
        </div>
    )
};

export default MenuItem;