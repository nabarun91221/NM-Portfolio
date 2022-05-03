import "./nav.css";
import { motion } from "framer-motion";
const Nav = ({navHandeler, navState}) => {
    return (
      <motion.nav animate={navState ? { y: [0, -100] } : { y: [-100, 0] }}>
          <a className="home" href="/">
          <h2>N.MCanvas</h2>
         </a>
        <a href="#about">
          <h4 className="pageList rightOne">About</h4>
        </a>
        <a href="#skill">
          <h4 className="pageList rightOne">Skills</h4>
        </a>
         <a href="https://match-sequence.netlify.app">
          <h4 className="pageList rightOne">N.MProjects</h4>
        </a>
        <div className="manu" onClick={navHandeler}>
          {'\u2630'}
        </div>
       </motion.nav>
)
}
export default Nav;

 