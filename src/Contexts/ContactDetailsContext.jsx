import {getContactById} from "../services/contactServices"
import { createContext, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";


export const ContactDetailContext = createContext(
    {
    isContactDetailLoading: false,
    contactDetail: null,
    onCreateNewMessage: (new_message) => {}
    }
);

const ContactDetailContextProvider = (props)=>{

    const[contactDetail, setContactDetail] = useState(null)
    const[isContactDetailLoading, setIsContactDetailLoading] = useState(false)
    
    const {id_contacto} = useParams()

    function loadingContactById(contact_id){

        setIsContactDetailLoading(true)

        setTimeout(
            ()=>{
                const contact = getContactById(contact_id)
                setContactDetail(contact)
                setIsContactDetailLoading(false)
            },
            2000
        )
    }

    useEffect(
        ()=>{
            loadingContactById(id_contacto)
        },
        [id_contacto]
    )

    const onCreateNewMessage = (new_message)=>{

        const new_message_object = {
            author: "Yo",
            content: new_message.content,
            timestamp: new_message.timestamp,
            id: contactDetail.messages.length + 1
        }

        const messages_cloned = [...contactDetail.messages]
        messages_cloned.push(new_message_object)
        console.log(messages_cloned)
        setContactDetail({...contactDetail, messages: messages_cloned})
    }

    return(
        <ContactDetailContext.Provider value={
        {
            contactDetail: contactDetail,
            isContactDetailLoading: isContactDetailLoading,
            onCreateNewMessage: onCreateNewMessage
        }
    }>
            <Outlet/>
        </ContactDetailContext.Provider>
    )
}

export default ContactDetailContextProvider