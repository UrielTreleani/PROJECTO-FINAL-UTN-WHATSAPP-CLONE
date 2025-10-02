import contacts from "../data/contactData"

export const getAllContact = ()=>{
    return(
        contacts
    )
}

export const getContactById = (contact_id)=>{
    for (const contact of contacts){
        if(Number(contact.id) === Number(contact_id)){
            return contact
        }
    }
}