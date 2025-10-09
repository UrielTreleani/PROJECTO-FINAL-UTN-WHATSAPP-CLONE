import React, { useContext } from 'react'
import "./ContactListAside.css"
import { ThemeContext } from '../../Contexts/ThemeSwichContext'

function ContactListAside() {

    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
    <div className={ theme === false ? 'contact-list__aside-container': 'contact-list__aside-container aside-ligth-theme'}>
        <div className='contact-list__aside-icon-container'>
            <span>
                <i className="bi bi-chat-left-text-fill aside-icon blue-icon"></i>
            </span>
            <span>
                <i className={ theme === false ? "bi bi-filter-circle aside-icon" : "bi bi-filter-circle aside-icon aside-icon-ligth-theme"}></i>
            </span>
            <span>
                <i className={ theme === false ? "bi bi-chat-quote aside-icon" : "bi bi-chat-quote aside-icon aside-icon-ligth-theme"}></i>
            </span>
            <span>
                <i className={ theme === false ? "bi bi-people aside-icon" : "bi bi-people aside-icon aside-icon-ligth-theme"}></i>   
            </span>
        </div>
        <div className='contact-list__aside-icon-container'>
            <span>
                <i className={ theme === false ? "bi bi-gear aside-icon" : "bi bi-gear aside-icon aside-icon-ligth-theme"}></i>
            </span>
            <span>
                <i className={ theme === false ? "bi bi-person aside-icon" : "bi bi-person aside-icon aside-icon-ligth-theme"}></i>
            </span>
        </div>
    </div>
    )
}

export default ContactListAside