import React, { useContext } from "react";
import MessageList from "../../Components/MessagesList/MessagesList";
import { ContactList } from "../../Components/ContactList/ContactList";
import { ContactDetailContext } from "../../Contexts/ContactDetailsContext";
import { NewMessageForm } from "../../Components/NewMessageForm/NewMessageForm";
import "./MessageScreen.css";
import ContactListHeader from "../../Components/ContactListHeader/ContactListHeader";
import ContactListAside from "../../Components/ContactListAside/ContactListAside";
import WhatsAppSpinner from "../../Components/Loader/Loader";
import { ContactHeader } from "../../Components/ContactInfoHeader/ContactInfoHeader";

export function MessageScreen() {
  const { contactDetail, isContactDetailLoading, onCreateNewMenssage } =
    useContext(ContactDetailContext);

  return (
    <div className="message-screen__container">
      <div className="contact-list__aside-container">
        <ContactListAside />
      </div>

      <div className='section__contacts'>
        <div>
          <ContactListHeader />
        </div>
        <div className='contact-list__container'>
          <ContactList/>
        </div>
      </div>
      <div>
        <ContactHeader
        name={contactDetail.name}
        />
      </div>
      <div>
        {isContactDetailLoading ? (
          <WhatsAppSpinner />
        ) : contactDetail ? (
          <MessageList messages={contactDetail.messages} />
        ) : (
          <span>Mensaje no encontrado</span>
        )}
        <div>
          <NewMessageForm onCreateNewMessage={onCreateNewMenssage} />
        </div>
      </div>
    </div>
  );
}

export default MessageScreen;
