import React from 'react'
import PropTypes from 'prop-types'
import './PageHeader.styles.css'

const PageHeader = ({ title }) => {
    return (
        <header className="page-header">
            <h1 className="page-header__title">{title}</h1>
            <ul className="page-header__icons-list">
                <li className="page-header__icon-item">
                    <a href="#" className="page-header__link" >
                        <svg className="page-header__icon">
                            <use xlinkHref="/assets/svg/sprite.svg#icon-search">
                            </use>
                        </svg>
                    </a>
                </li>
                <li className="page-header__icon-item">
                    <a href="#" className="page-header__link" >
                        <svg className="page-header__icon">
                            <use xlinkHref="/assets/svg/sprite.svg#icon-search">
                            </use>
                        </svg>
                    </a>
                </li>
                <li className="page-header__icon-item">
                    <a href="#" className="page-header__link" >
                        <svg className="page-header__icon">
                            <use xlinkHref="/assets/svg/sprite.svg#icon-search">
                            </use>
                        </svg>
                    </a>
                </li>
            </ul>        
        </header>
    )
}

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
}

export default PageHeader
