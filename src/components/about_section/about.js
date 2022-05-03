import "./about.css";
const About = (props) => {
    return (
        <div className="aboutDiv" id="about">
            <div className="leftBlankDiv"></div>
            <div className="about_Div">
                {props.children}
            </div>

        </div>
    )
}
export default About;