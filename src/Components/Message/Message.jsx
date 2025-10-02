

function Message(props){
    return(
        <div>
            <div>
                <span>{props.auhtor}</span>
                <p className="message-content">{props.content}</p>
                <span>{props.timestap}</span>
            </div>
        </div>
    )
}

export default Message