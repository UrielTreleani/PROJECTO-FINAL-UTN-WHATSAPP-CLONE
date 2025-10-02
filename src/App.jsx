import { Route, Routes } from "react-router"
import HomeScreen from "./Screens/HomeScreen/HomeScreen"
import { ContactListContext } from "./Contexts/ContactListContext"
import ContactListContextProvider from "./Contexts/ContactListContext"
import {MessageScreen} from "./Screens/MessageScreen/MessageScreen"
import ContactDetailContextProvider from "./Contexts/ContactDetailsContext"



function App() {


  return (
      <div>
        <ContactListContextProvider>
      <Routes>

        <Route path="/" element={<HomeScreen/>}/> 
        
        <Route element={<ContactDetailContextProvider/>}>
          <Route path="/contacto/:id_contacto" element={<MessageScreen/>}/> 
        </Route>

      </Routes>
        </ContactListContextProvider>
      </div>
  )
}

export default App
