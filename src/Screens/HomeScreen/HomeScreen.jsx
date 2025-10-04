import React from 'react'
import { ContactList } from '../../Components/ContactList/ContactList'
import ContactListHeader from '../../Components/ContactListHeader/ContactListHeader'
import ContactListAside from '../../Components/ContactListAside/ContactListAside'
import WhatsAppSpinner from "../../Components/Loader/Loader";
import "./HomeScreen.css"

const HomeScreen = () => {
    return (
        <div className='home-screen__container'>
            <div>
                <ContactListAside />
            </div>
            <div className='home-screen__contacts-container'>
                <div>
                    <div>
                        <ContactListHeader />
                    </div>
                    <div>
                        <ContactList/>
                    </div>
                </div>
            </div>
            <div className='home-screen__unselected-contact-container'>
                <div>
                    <WhatsAppSpinner />
                </div>
                <span>Selecciona un contacto</span>
            </div>
        </div>
    )
}

export default HomeScreen