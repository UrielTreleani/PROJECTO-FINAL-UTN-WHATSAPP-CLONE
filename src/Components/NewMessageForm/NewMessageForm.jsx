import { useContext } from "react"
import "./NewMessageForm.css"
import { ThemeContext } from "../../Contexts/ThemeSwichContext"

export const NewMessageForm = (props)=>{

    const {theme, toggleTheme} = useContext(ThemeContext)

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
                <input placeholder= "Escribe un mensaje" type="text" name="mensaje" id="mensaje" className={ theme === false ?"section-messages__input" : "section-messages__input input-light-theme" }/>
                <button type="submit">
                    <i className="bi bi-arrow-right-circle send-button__icon"></i>
                </button>
            </form>
        </div>
    )
}   