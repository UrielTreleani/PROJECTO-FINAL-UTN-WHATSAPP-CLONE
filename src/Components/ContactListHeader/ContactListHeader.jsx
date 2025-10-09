import React, { useContext, useState } from 'react'
import "./ContactListHeader.css"
import { Link } from 'react-router'
import ThemeProvider, { ThemeContext } from '../../Contexts/ThemeSwichContext'
import { use } from 'react'






function ContactListHeader() {

    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
    <div className={theme === false ? 'contact-list__header' : 'contact-list__header contact-list__header-ligth-theme'}>
        <div className='contact-list-header__title-container'>
            <Link to={"/"}>
                <h1 className={ theme === false ? 'contact-list-header__title': 'contact-list-header__title title-ligth-theme'}>
                    WhatsApp Clone
                </h1>
            </Link>
            <div className='contact-list-header__buttons-container'>
                <button onClick={toggleTheme}> 
                    {
                        theme === false 
                            ? (
                            <i className="bi bi-sun header-icon sun-icon" ></i>
                            ) 
                            : (
                                <i className="bi bi-moon header-icon moon-icon"></i>
                            )
                        
                    }
                </button>
                {}
                <button>
                    <i className={ theme === false ? "bi bi-send-plus header-icon" :"bi bi-send-plus header-icon buttons-light-theme"}></i>
                </button>
                <button>
                    <i className={ theme === false ? "bi bi-three-dots-vertical header-icon" : "bi bi-three-dots-vertical header-icon buttons-light-theme"}></i>
                </button>
            </div>
        </div>
        <div className='contact-list-header__search-section'>
            <div>
                <div>
                    <div className={theme === false ? "contact-list-header__search" : "contact-list-header__search search-ligth-theme"}>
                        <i className="bi bi-search header-icon"></i>
                        <span>Buscar un chat o iniciar uno nuevo</span>
                    </div>
                </div>
            </div>
            <div className='contact-list-header__chat-filters'>
                <span className={ theme === false ? 'contact-list-header__filter' : 'contact-list-header__filter filter-ligth-theme'}>Todos</span>
                <span className={ theme === false ? 'contact-list-header__filter' : 'contact-list-header__filter filter-ligth-theme'}>No leídos</span>
                <span className={ theme === false ? 'contact-list-header__filter' : 'contact-list-header__filter filter-ligth-theme'}>Favoritos</span>
                <span className={ theme === false ? 'contact-list-header__filter' : 'contact-list-header__filter filter-ligth-theme'}>Grupos</span>
            </div>
        </div>
    </div>
    )
}

export default ContactListHeader