import "./Message.css"

function Message(props){

    return(
        <div className={props.author == "Yo" ? "message-author__yo message__content-container" : "message-author__other message__content-container"}>
            <div className="message-content">
                <span>{props.auhtor}</span>
                <p>{props.content}</p>
                <span>{props.timestap}</span>
            </div>
        </div>
    )
}

export default Message