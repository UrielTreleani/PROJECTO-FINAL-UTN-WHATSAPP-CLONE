import { Link } from "react-router"
import { ContactListContext } from "../../Contexts/ContactListContext"
import React, { useContext } from "react"
import { ContactDetailContext } from "../../Contexts/ContactDetailsContext"



export function ContactHeader(props){

return(
    <div>
        <div>
            <div>
                <img src={props.img} alt=""/>
            </div>
            <div className="contact-header__name">
                {props.name}
            </div>
        </div>
        <div>
            <span></span>
            <span>
                <i className="bi bi-search contact-header__icon"></i>
            </span>
            <span></span>
        </div>
    </div>
)
}

