import { Link } from "react-router"
import "./ContactInfoHeader.css"
import { useContext } from "react"
import { ThemeContext } from "../../Contexts/ThemeSwichContext"

export function ContactHeader(props){

    const {theme, toggleTheme} = useContext(ThemeContext)

return(
    <div className={ theme === false ? "contact-header__container" : "contact-header__container contact-header-ligth-theme"}>
        <div className="contact-header__contact-info">
                <Link to={"/"}>
                    <i className={ theme === false ? "bi bi-arrow-left contact-header__back-icon" : "bi bi-arrow-left contact-header__back-icon header-icon-ligth-theme"}></i>
                </Link>
            <div className="contact-header__profile-image-container">
                <img src={props.img} alt="profile-img"/>
            </div>
            <div className={ theme === false ? "contact-header__contact-name" : "contact-header__contact-name contact-name-ligth-theme"}>
                <span>
                {props.name}
                </span>
                <span className={ theme === false ? "contact-header__contact-last-connection" : "contact-header__contact-last-connection last-connection-ligth-theme"}>
                    {props.last_connection}
                </span>
            </div>
        </div>
        <div className="contact-header__buttons-container">
            <span>
                <i className={ theme === false ? "bi bi-camera-video contact-header__icon" : "bi bi-camera-video contact-header__icon header-icon-ligth-theme"}></i>
            </span>
            <span>
                <i className={ theme === false ? "bi bi-search contact-header__icon" : "bi bi-search contact-header__icon header-icon-ligth-theme"}></i>
            </span>
            <span>
                <i className={ theme === false ? "bi bi-three-dots-vertical contact-header__icon" : "bi bi-three-dots-vertical contact-header__icon header-icon-ligth-theme"}></i>
            </span>
        </div>
    </div>
)
}

