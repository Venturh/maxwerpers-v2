import { scroller } from "react-scroll"
const scrollTo = to => {
  const options = {
    duration: 400,
    smooth: "linear",
  }

  scroller.scrollTo(to, options)
}

export default scrollTo
