import "./aboutText_div.css"
import facebook from "../about_section/svg/socialLink/icons8-facebook.svg";
import instagram from "../about_section/svg/socialLink/icons8-instagram.svg";
import twitter from "../about_section/svg/socialLink/icons8-twitter.svg";
import linkedin from "../about_section/svg/socialLink/icons8-linkedin.svg";
import github from "../about_section/svg/socialLink/icons8-github.svg";
export const AboutTextDiv = () => {
    return (
        <div className="aboutText_div">
            <p1 className="abt_me">About Me</p1>
            <p1 className="des"> I'm a Full-Stack Web Developer</p1>
            <p1 className="subDes">I generally use M.E.R.N as my primary technology </p1>
            <p1 className="subDes">but I also familiarize with Firebase and React Native</p1>
            <p1 className="subDes">currently I'm in 2nd year of university, doing my computer sceince degree from HIT Kolkata.</p1>
            <div className="socialDiv">
                <a href="https://www.facebook.com/nabarun.middya">
                    <img src={facebook} height="30vh" width="30vh" className="soc" alt="facebook"></img>
                </a>
                <a href="https://www.instagram.com/nabarunmiddya/">
                    <img src={instagram} height="30vh" width="30vh" className="soc" alt="instagram"></img>
                </a>
                <a href="https://twitter.com/middya_nabarun">
                    <img src={twitter} height="30vh" width="30vh" className="soc" alt="twitter"></img>
                    </a>
                <a href="https://www.linkedin.com/in/nabarun-middya-4627231b8/">
                    <img src={linkedin} height="30vh" width="30vh" className="soc" alt="linkedin"></img>
                    </a>
                <a href="https://github.com/nabarun91221">
                    <img src={github} height="30vh" width="30vh" className="soc" alt="github"></img>
                    </a>
            </div>
        </div>
    )
}