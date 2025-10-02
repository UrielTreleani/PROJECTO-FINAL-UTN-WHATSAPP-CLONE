import React, { useContext } from "react"
import { ContactListContext } from "../../Contexts/ContactListContext"
import { Link } from "react-router"
import "./ContactList.css"
import WhatsAppSpinner from "../../Components/Loader/Loader";

export const ContactList = () => {

    const {contactList, isContactListLoading} = useContext(ContactListContext)

    return (
        <div>
            {
                isContactListLoading
                    ? <div className="loader-contacts"><WhatsAppSpinner/></div> 
                    : contactList.map(
                        (contact) => {
                            return <ContactItem
                                contact={contact}
                                key={contact.id}
                            />
                        }
                    )
            }
        </div>
    )
}


const ContactItem = (props)=>{

    const contact = props.contact

    return(
        <Link to={"/contacto/" + contact.id}>
            <div className="contact__container">
                <div className="contact-info">
                    <div>
                        <h2 className="contact-name">
                            {contact.name}
                        </h2>
                        <span className="contact-last-message">
                            {contact.last_message}
                        </span>
                    </div>
                    <div className="profile-image__container">
                        <img src={contact.profile_img} width={'150px'} />
                    </div>
                </div>
            </div>
                
        </Link>
    )
}