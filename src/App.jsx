
import './App.css'
import Maincontainer from "./components/maincontainer/maincontainer"
import { createContext, useContext, useState } from 'react'

export const Themecontext = createContext(null);
function App() {
const [theme,settheme]=useState("dark");
  return (
    < >
      <Themecontext.Provider value={{theme,settheme}}>
      <Maincontainer></Maincontainer>
      </Themecontext.Provider>
    </>
  )
}

export default App
