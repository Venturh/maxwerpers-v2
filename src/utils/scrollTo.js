import { scroller } from "react-scroll"
const scrollTo = to => {
  const options = {
    duration: 300,
    delay: 0,
    smooth: "easeInOutQuart",
  }

  scroller.scrollTo(to, options)
}

export default scrollTo
