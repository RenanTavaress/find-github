import React from "react"
import {ButtonTabStyle} from './styles'

export const ButtonTab = ({onChange, nameButton}) => {
   return (
      <nav>
         <ButtonTabStyle onClick={onChange}>{nameButton}</ButtonTabStyle>
      </nav>
   )
}