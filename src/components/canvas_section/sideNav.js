import "./sideNav.css"
import { motion } from "framer-motion"
export const SideNav = ({navHandeler,navState}) => {
  return (
    <motion.div className="sideNav" animate={navState ? { x: [200, 0] ,opacity:[0,1] } : { x: [0, 200],}}>
      <p1 className="cutOnNav" onClick={navHandeler}>{"\u2716"}</p1>
      <a className="NMlogo" href="">
        <h2>N.MCanvas</h2>
      </a>
        <a href="#about" onClick={navHandeler}>
        <h4 className="side_navPageList">About</h4>
        </a>
        <a href="#skill" onClick={navHandeler}>
          <h4 className="side_navPageList">Skills</h4>
        </a>
         <a href="https://match-sequence.netlify.app">
          <h4 className="side_navPageList">N.MProjects</h4>
        </a>
        </motion.div>
    )
}