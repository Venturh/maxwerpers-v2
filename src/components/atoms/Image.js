import React from "react"
import styled from "styled-components"

const Image = ({ name, className }) => {
  return <img className={className} src={require(`../../images/${name}.svg`)} />
}

export default Image
