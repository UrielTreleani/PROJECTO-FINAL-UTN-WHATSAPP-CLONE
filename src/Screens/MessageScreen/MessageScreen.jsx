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
  const { contactDetail, isContactDetailLoading, onCreateNewMessage } =
    useContext(ContactDetailContext);

  return (
    <div className="message-screen__container">
      <div className="message-screen__aside-container">
        <ContactListAside />
      </div>
      <div className="message-screen__contacts-container">
        <div>
          <ContactListHeader />
        </div>
        <div>
          <ContactList />
        </div>
      </div>
      <div className="message-screen__section-message-container">
        {isContactDetailLoading ? (
          <div className="message-screen__contact-detail-loader">
            <WhatsAppSpinner />
            <span>
              Cargando mensajes...
            </span>
          </div>
        ) : contactDetail ? (
          <div className="message-screen__section-message">
            <div className="message-screen__contact-header-container">
              <ContactHeader
                name={contactDetail?.name}
                img={contactDetail?.profile_img}
                last_connection={contactDetail?.last_time_connected}
              />
            </div>
            <div className="message-screen__messages-container">
              <MessageList messages={contactDetail.messages} />
            </div>
            <div className="message-screen__form-container">
              <NewMessageForm onCreateNewMessage={onCreateNewMessage} />
            </div>
          </div>
        ) : (
          <span>Mensaje no encontrado</span>
        )}
      </div>
    </div>
  );
}

export default MessageScreen;
