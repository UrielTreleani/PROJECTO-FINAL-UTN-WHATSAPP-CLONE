import "./NewMessageForm.css"

export const NewMessageForm = (props)=>{

    const horaActual = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    const handleSubmit = (event)=>{
        event.preventDefault()
        const form = event.target
        const message_value = form.mensaje.value    

        props.onCreateNewMessage({
            content: message_value,
            timestamp: horaActual
        })

        form.reset()
    }

    return(
        <div className="section-messages__message-form-container">
            <form onSubmit={handleSubmit}>
                <input placeholder= "Escribe un mensaje" type="text" name="mensaje" id="mensaje"/>
                <button type="submit">
                    <i className="bi bi-arrow-right-circle send-button__icon"></i>
                </button>
            </form>
        </div>
    )
}   