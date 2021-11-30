import React, {createContext, useState} from "react";
import Alert from "./hooks/useContext/alert/Alert";
import Main from "./hooks/useContext/Main";

const AlertContext = createContext()

function App() {
  const [alert, setAlert] = useState(false)

  const toggleAlert = () => setAlert(prev => !prev)

  return (
    <AlertContext.Provider value={alert}>
      <div className={'container pt-3'}>
        <Alert />
        <Main toggle={toggleAlert}/>
      </div>
    </AlertContext.Provider>
  )
}

export default App