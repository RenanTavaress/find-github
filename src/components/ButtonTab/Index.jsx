import React from "react"

export const ButtonTab = ({onChange, nameButton}) => {
   return (
      <nav>
         <button onClick={onChange}>{nameButton}</button>
      </nav>
   )
}