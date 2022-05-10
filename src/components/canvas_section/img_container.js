import './img_container.css';
import f1 from "./img/bgp/bg1.png"
import f2 from "./img/bgp/bg2.png"
import { motion } from 'framer-motion';
import { useState } from 'react';
const ImgContainer = () => {
    const [isHoverStart, setisHoverStart] = useState(false);
    let displayImg;
    const onHover = () => {
        setisHoverStart(!isHoverStart);
    }
    return (
        <div className="img_container">
        <motion.div animate={{opacity:[0,0.5,1],x:[-800,0],scale:[0.5,1],rotate:[0,360]}} transition={{duration:1}} className="img_background">
                <motion.div  className="img1" onHoverStart={onHover} onHoverEnd={onHover} >
                    <motion.img className="img2" src={
                        isHoverStart?f1:f2
                    } alt="Auother picture" height="30rem" width="23rem"
                        animate={{ opacity: [0, 0, 0.5, 1], }} transition={{ delay: 0.72, duration: 0.8 }}
                    ></motion.img>
                </motion.div>
        </motion.div>
        </div>
    )
}
export default ImgContainer;