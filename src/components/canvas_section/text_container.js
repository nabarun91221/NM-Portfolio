import './text_container.css';
import { motion } from 'framer-motion';
import React from "react";
const TextContainer = ({prmt_hndl}) => {
    return (
        <div className="text_container">
        <div className="text_background">
                <motion.h1 animate={{ scale: [0, 1] }} transition={{delay:0.2}} className="h1">Hi, I'm Nabarun</motion.h1>
                <motion.div animate={{ y: [-30, 0], opacity:[0,1]}} transition={{delay:0.9}} className="text" >
                <h2 className="h2">M.E.R.N stack Developer</h2>
                    <h3 className="h3">Keep my Code clean | Working on other Skills | 1st year of University | Computer Science</h3>
                    
                        <button className="b" onClick={prmt_hndl}> Contact
                            <motion.div
                                className="SpinAni" animate={{ x: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 1, }}>{'\u27A4'}
                            </motion.div>
                        </button>
                    
                </motion.div>
        </div>
    </div>
)
}
export default TextContainer;