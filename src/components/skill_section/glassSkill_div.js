import "./glassSkill_div.css";
import { motion } from "framer-motion";
import { useState } from "react";
const GlassSkill = (props) => {
    // const [isSeen, setisSeen] = useState(false);
    // const isSeenToggle = () => {
    //     setisSeen(true);
    //     if (!isSeen)
    //         return ({ y: [100, 0], opacity: [0, 0, 0, 1] })
    //     else return (0);
    // }
    return (
        <motion.div whileInView={{ y: [100, 0], opacity: [0,0,0,1] }} transition={{duration:0.5}} className="mainDiv">
            <div className="logoDiv">
                <img src={props.logo} height="100%" width="100%">
                </img> 
            </div>
            <div className="descriptionDiv">
                <h3 className="header">{ props.header }</h3>
                <h4 className="description">{props.description}</h4>
            </div>
        </motion.div>
    )
}
export default GlassSkill;