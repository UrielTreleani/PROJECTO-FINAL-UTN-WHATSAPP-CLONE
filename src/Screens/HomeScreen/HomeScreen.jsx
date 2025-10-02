import React from 'react'
import { ContactList } from '../../Components/ContactList/ContactList'
import ContactListHeader from '../../Components/ContactListHeader/ContactListHeader'
import ContactListAside from '../../Components/ContactListAside/ContactListAside'
import WhatsAppSpinner from "../../Components/Loader/Loader";
import "./HomeScreen.css"

const HomeScreen = () => {
    return (
        <div className='home-screen__container'>
            <div className='contact-list__aside-container'>
                <ContactListAside />
            </div>
            <div className='home-screen__chats-container'>
                <div className='section__contacts'>
                    <div>
                        <ContactListHeader />
                    </div>
                    <div className='contact-list__container'>
                        <ContactList/>
                    </div>
                </div>
                <div className='unselected-contact__container'>
                    <div>
                        <WhatsAppSpinner />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen