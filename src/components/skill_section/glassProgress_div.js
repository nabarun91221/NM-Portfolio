import "./glassProgress_div.css"
import { motion } from "framer-motion";
import cppLogo from "./icon/cpp.png";
import puzzleLogo from "./icon/puzzle.png";
import javaLogo from "./icon/javascript.png";
import reactLogo from "./icon/react.png";
import chromeLogo from "./icon/chrome.png";
import gamingLogo from "./icon/arcade.png";
import { delay } from "q";
const GlassProgress = () => {
    return (
        <div className="mainPro">
            <div className="titDiv">
                <img src={cppLogo} alt="cpp" height="60px" width="60px"></img>
                <img src={javaLogo} alt="Java Script" height="60px" width="60px"></img>
                <img src={reactLogo} alt="React" height="60px" width="60px"></img>
                <img src={chromeLogo} alt="Chrome" height="60px" width="60px"></img>
                <img src={gamingLogo} alt="Gaming" height="60px" width="60px"></img>
                <img src={puzzleLogo} alt="Critical thinking" height="60px" width="60px"></img>
            </div>
            <div className="progressDiv">
                <div className="bar">
                    <motion.div
                        whileInView={{ x: [0,-50,0], transition: { duration: 1}, }} className="p70">
                        
                     </motion.div>
                </div>
                <div className=" bar">
                    <motion.div
                        whileInView={{ x: [0, -80, 0], transition: { duration: 1,}, }} className="p80">
                        
                     </motion.div>
                </div>
                <div className="bar">
                   <motion.div
                        whileInView={{ x: [0, -50,0], transition: { duration: 1}, }} className="p50">
                        
                     </motion.div>
                </div>
                <div className="bar">
                    <motion.div
                        whileInView={{ x: [0, -40, 0], transition: { duration: 1}, }} className="p40">
                        
                     </motion.div>
                </div>
                <div className="bar">
                    <motion.div
                        whileInView={{ x: [0, -85, 0], transition: { duration: 1}, }} className="p85">
                        
                     </motion.div>
                </div>
                <div className="bar">
                    <motion.div
                        whileInView={{ x: [0, -90, 0], transition: { duration: 1}, }} className="p90">
                        
                     </motion.div>
                </div>

            </div>
        </div>
    )
}
export default GlassProgress;