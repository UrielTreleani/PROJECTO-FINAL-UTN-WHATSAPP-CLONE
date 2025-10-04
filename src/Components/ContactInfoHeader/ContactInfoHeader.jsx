import "./ContactInfoHeader.css"


export function ContactHeader(props){

return(
    <div className="contact-header__container">
        <div className="contact-header__contact-info">
            <div className="contact-header__profile-image-container">
                <img src={props.img} alt="profile-img"/>
            </div>
            <div className="contact-header__contact-name">
                <span>
                {props.name}
                </span>
                <span className="contact-header__contact-last-connection">
                    {props.last_connection}
                </span>
            </div>
        </div>
        <div className="contact-header__buttons-container">
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

