import React, { createContext } from 'react'

export const ThemeDatacontext = createContext()

const ThemeContext = (props) => {
  return (
    <div>
       <ThemeDatacontext.Provider value='Learn Context Method'>
         {props.children}
       </ThemeDatacontext.Provider>
    </div>
  )
}

export default ThemeContext


