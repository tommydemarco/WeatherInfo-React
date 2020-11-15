import React from 'react'
//========> ROUTER 
import { NavLink } from 'react-router-dom'
//========> CSS
import './TheSidebar.styles.css'

const TheSidebar = () => {
    return (
        <nav className="sidebar">
            <ul className="sidebar__list">
                <li className="sidebar__list-item">
                    <NavLink className="sidebar__link" to="/">home</NavLink>
                </li>
                <li className="sidebar__list-item">
                    <NavLink className="sidebar__link" to="/weather">weather</NavLink>
                </li>
                <li className="sidebar__list-item">
                    <a className="sidebar__link" href="#">news</a>
                </li>
                <li className="sidebar__list-item">
                    <NavLink className="sidebar__link" to="/contacts">contacts</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default TheSidebar
