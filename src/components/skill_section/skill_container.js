import "./skill_container.css";
import { AnimateSharedLayout } from "framer-motion";
const Skill = (props) => {
    return (
        <div className="skill_container" id="skill">
            <AnimateSharedLayout>
                {props.children}
            </AnimateSharedLayout>
            </div>
        
    )
}
export default Skill;