import Message from "../Message/Message";

const MessageList = (props)=>{
            
    const messages_list_jsx = props.messages.map(
        (message)=>{
            return(
                <Message
                key={message.id}
                author={message.author}
                timestap={message.timestap}
                content={message.content}
                id={message.id}
                />
            )
        }
    )

                console.log({messages_list_jsx})

    return(
        <div>
            {messages_list_jsx}
        </div> 
    )
}

export default MessageList