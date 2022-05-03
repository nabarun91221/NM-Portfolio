import "./skill_container.css";
const Skill = (props) => {
    return (
        <div className="skill_container" id="skill">
            {props.children}
      </div>
    )
}
export default Skill;