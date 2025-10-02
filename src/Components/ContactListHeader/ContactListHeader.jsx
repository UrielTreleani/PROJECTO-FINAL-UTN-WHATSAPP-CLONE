import React from 'react'
import "./ContactListHeader.css"
import { Link } from 'react-router'

function ContactListHeader() {
    return (
    <div className='contact-list-header__container'>
        <div className='contact-list-header__new-message'>
            <Link to={"/"}>
                <span className='contact-list-header__title'>
                    WhatsApp Clone
                </span>
            </Link>
            <div className='contact-list-header__buttons-container'>
                <button>
                    <i className="bi bi-send-plus header-icon"></i>
                </button>
                <button>
                    <i className="bi bi-three-dots-vertical header-icon"></i>
                </button>
            </div>
        </div>
        <div className='contact-list-header__search-section'>
            <div>
                <div>
                    <div className="contact-list-header__search">
                        <i className="bi bi-search header-icon"></i>
                        <span>Buscar un chat o iniciar uno nuevo</span>
                    </div>
                </div>
            </div>
            <div className='contact-list-header__chat-filters'>
                <span className='contact-list-header__filter'>Todos</span>
                <span className='contact-list-header__filter'>No leídos</span>
                <span className='contact-list-header__filter'>Favoritos</span>
                <span className='contact-list-header__filter'>Grupos</span>
            </div>
        </div>
    </div>
    )
}

export default ContactListHeader