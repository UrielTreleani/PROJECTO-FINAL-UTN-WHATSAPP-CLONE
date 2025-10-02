import { createContext, use, useEffect, useState } from "react";
import { getAllContact } from "../services/contactServices";

export const ContactListContext = createContext(
    {
        isContactListLoading: false,
        contactList: []
    }
)


const ContactListContextProvider = (props)=>{
    
    const [contactList, setContactList] = useState([])
    const [isContactListLoading, setIsContactlistLoading] = useState(false)

    const loadContactList = ()=>{

    setIsContactlistLoading(true)

    setTimeout(
        ()=>{
            const contact_list_response = getAllContact()
            setContactList(contact_list_response)
            setIsContactlistLoading(false)
        }, 
        2000
    )
}
    useEffect(
        ()=>{
            loadContactList()
        },
        []
    )

    return(
    <ContactListContext.Provider value={{
        contactList: contactList,
        isContactListLoading: isContactListLoading
    }}>
        {props.children}
    </ContactListContext.Provider>
)
}

export default ContactListContextProvider

