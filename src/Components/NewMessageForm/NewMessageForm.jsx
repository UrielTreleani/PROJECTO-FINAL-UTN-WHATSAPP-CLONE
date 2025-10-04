import "./NewMessageForm.css"

export const NewMessageForm = (props)=>{

    const handleSubmit = (event)=>{
        event.preventDefault()
        const form = event.target
        const message_value = form.mensaje.value

        props.onCreateNewMessage(
            message_value
        )
    }

    return(
        <div className="section-messages__message-form-container">
            <form onSubmit={handleSubmit}>
                <textarea name="mensaje" id="mensaje">
                    
                </textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}   