import './img_container.css';
import f1 from "./img/ttB.png"
import { motion } from 'framer-motion';
const ImgContainer = () => {
    return (
        <div className="img_container">
        <motion.div animate={{opacity:[0,0.5,1],x:[-800,0],scale:[0.5,1],rotate:[0,360]}} transition={{duration:1}} className="img_background">
                <motion.div animate={{ opacity: [0, 1], y: [15, 0] }} transition={{delay:0.9, duration:0.7}} className="img1">
                    <img className="img2" src={f1} alt="Auother picture" height="30rem" width="23rem"></img>
                </motion.div>
        </motion.div>
        </div>
    )
}
export default ImgContainer;