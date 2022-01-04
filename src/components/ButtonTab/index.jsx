import React from "react"
import { ButtonTabStyle } from './styles'

export const ButtonTab = ({onChange, nameButton}) => {
   return (
      <ButtonTabStyle onClick={onChange}>{nameButton}</ButtonTabStyle>
   )
}