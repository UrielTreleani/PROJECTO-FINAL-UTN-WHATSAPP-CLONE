import React from 'react'
import "./ContactListAside.css"

function ContactListAside() {
    return (
    <div className='contact-list__aside-container'>
        <div className='contact-list__aside-icon-container'>
            <span>
                <i className="bi bi-chat-left-text-fill aside-icon blue-icon"></i>
            </span>
            <span>
                <i className="bi bi-filter-circle aside-icon"></i>
            </span>
            <span>
                <i className="bi bi-chat-quote aside-icon"></i>
            </span>
            <span>
                <i className="bi bi-people aside-icon"></i>   
            </span>
        </div>
        <div className='contact-list__aside-icon-container'>
            <span>
                <i className="bi bi-gear aside-icon"></i>
            </span>
            <span>
                <i className="bi bi-person aside-icon"></i>
            </span>
        </div>
    </div>
    )
}

export default ContactListAside