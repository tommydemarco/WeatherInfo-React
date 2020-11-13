import React from 'react'
import './TheSidebar.styles.css'

const TheSidebar = () => {
    return (
        <nav className="sidebar">
            <ul className="sidebar__list">
                <li className="sidebar__list-item">
                    <a className="sidebar__link" href="#">home</a>
                </li>
                <li className="sidebar__list-item">
                    <a className="sidebar__link" href="#">weather</a>
                </li>
                <li className="sidebar__list-item">
                    <a className="sidebar__link" href="#">news</a>
                </li>
                <li className="sidebar__list-item">
                    <a className="sidebar__link" href="#">contacts</a>
                </li>
            </ul>
        </nav>
    )
}

export default TheSidebar
