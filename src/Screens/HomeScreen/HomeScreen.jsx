import React, { useContext } from 'react'
import { ContactList } from '../../Components/ContactList/ContactList'
import ContactListHeader from '../../Components/ContactListHeader/ContactListHeader'
import ContactListAside from '../../Components/ContactListAside/ContactListAside'
import WhatsAppSpinner from "../../Components/Loader/Loader";
import "./HomeScreen.css"
import ThemeProvider, { ThemeContext } from '../../Contexts/ThemeSwichContext';

const HomeScreen = () => {

    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <div className='home-screen__container'>
            <div>
                <ContactListAside />
            </div>
            <div className={ theme === false ? 'home-screen__contacts-container' : 'home-screen__contacts-container contacts-container-ligth-theme'}>
                <div className='home-screen__contacts'>
                    <div className='home-screen__contact-list-header-container'>
                        <ContactListHeader />
                    </div>
                    <div>
                        <ContactList/>
                    </div>
                </div>
            </div>
            <div className={ theme === false ? 'home-screen__unselected-contact-container' : 'home-screen__unselected-contact-container unselected-contact-ligth-theme'}>
                <div>
                    <WhatsAppSpinner />
                </div>
                <span>Selecciona un contacto</span>
            </div>
        </div>
    )
}

export default HomeScreen