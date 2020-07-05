import React from "react"

const Image = ({ name, className }) => {
  return (
    <img
      className={className}
      src={require(`../../images/${name}.svg`)}
      alt="img"
    />
  )
}

export default Image
