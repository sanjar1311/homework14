import { useState } from 'react'
import { createContext } from 'react/cjs/react.development'

const LangContext = createContext()

function LangProvider({ children }) {

  const [lang, setLang] = useState('en')

  return(

    <LangContext.Provider value={{lang, setLang}}>
      { children }
    </LangContext.Provider>
  )
}

export {LangProvider, LangContext}