import "./ContactHeader.css"


export function ContactHeader(props){

return(
    <div className="message-screen__contact-header-container">
        <div className="message-screen__contact-header-contact-info">
            <div className="message-screen__contact-header-profile-image-container">
                <img src={props.img} alt="profile-img"/>
            </div>
            <div className="contact-header__name">
                {props.name}
            </div>
        </div>
        <div className="message-screen__contact-header-buttons-container">
            <span>
                <i className="bi bi-camera-video contact-header__icon"></i>
            </span>
            <span>
                <i className="bi bi-search contact-header__icon"></i>
            </span>
            <span>
                <i className="bi bi-three-dots-vertical contact-header__icon"></i>
            </span>
        </div>
    </div>
)
}

