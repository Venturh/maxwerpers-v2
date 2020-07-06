import React from "react"
import { Linkedin, PlayStore, Github } from "@styled-icons/boxicons-logos/"

const Socials = () => {
  const openLink = url => {
    window.open(url)
  }

  return (
    <React.Fragment>
      <Github onClick={() => openLink("https://github.com/Venturh")} />
      <PlayStore
        onClick={() =>
          openLink(
            "https://play.google.com/store/apps/developer?id=Venturh&hl=gsw"
          )
        }
      />
      <Linkedin
        onClick={() =>
          openLink("https://www.linkedin.com/in/max-werpers-9474251a5/")
        }
      />
    </React.Fragment>
  )
}

export default Socials
