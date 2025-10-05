import "./Message.css"

function Message(props){

    return(
        <div className={props.author == "Yo" ? "message-author__yo message__content-container" : "message-author__other message__content-container"}>
            <div className="message-content">
                <span>{props.auhtor}</span>
                <p>{props.content}</p>
                <div className="message__timestamp-container">
                    <span>{props.timestamp}</span>
                </div>
            </div>
        </div>
    )
}

export default Message