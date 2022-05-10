import './App.css';
import { motion } from "framer-motion";
import Header from './components/canvas_section/header';
import Nav from './components/canvas_section/nav';
import ImgContainer from './components/canvas_section/img_container';
import TextContainer from './components/canvas_section/text_container';
import Skill from './components/skill_section/skill_container';
import GlassSkill from './components/skill_section/glassSkill_div';
import GlassProgress from './components/skill_section/glassProgress_div';
import CppLogo from "../src/components/skill_section/SVG/icons8-c++.svg"
import JavaScriptLogo from "../src/components/skill_section/SVG/icons8-javascript.svg"
import ReactLogo from "../src/components/skill_section/SVG/icons8-react-native.svg"
import ChromeLogo from "../src/components/skill_section/SVG/icons8-chrome.svg"
import GameLogo from "../src/components/skill_section/SVG/icons8-apple-arcade.svg"
import PuzzelLogo from "../src/components/skill_section/SVG/icons8-puzzle.svg"
import About from './components/about_section/about.js';
import AboutSvgDiv from './components/about_section/aboutSvg_div';
import { SideNav } from './components/canvas_section/sideNav';
import { AboutTextDiv } from './components/about_section/aboutText_div';
import Contact from './components/contact_page/contact.js';
import { useState, } from 'react';
import axios from "axios";
import { AnimateSharedLayout } from "framer-motion";

function App() {

  ////the state whather the contact prompt need to show or not----->
  const [sidenav, setsidenav] = useState(false)
    const sideNavHandeler = () => {
      setsidenav(!sidenav);
    }
  const [promptToggel, setpromptToggel] = useState(false);
  const promptHandeler = async() => {
    await setpromptToggel(!promptToggel);
    setFirst_name("");
      setLast_name("");
      setEmail("");
      setNumber("");
      setMsg("");
  }
  /// individual fild state of contact from/prompt----->
  const [First_name, setFirst_name] = useState("");
  const [Last_name, setLast_name] = useState("");
  const [Email, setEmail] = useState("");
  const [Number, setNumber] = useState("");
  const [Msg, setMsg] = useState("");
/// function to assing the data while there is a chage in every fild value---->
  const setfirstname = (e) => {
    setFirst_name(e.target.value);
  }
  const setlastname = (e) => {
    setLast_name(e.target.value);
  }
  const setemail = (e) => {
    setEmail(e.target.value);
  }
  const setnumber = (e) => {
    setNumber(e.target.value);
  }
  const setmsg = (e) => {
    setMsg(e.target.value);
  }

  /// the function to get data contact from and store to massegeReqs state, 
  //and free the individual fild state ----------->
  const getInput = async () => {
    if (First_name !=="" && Last_name !=="" && Email !=="" && Number !=="" && Msg !=="") {
      let newObj = { first_name: First_name, last_name: Last_name, email: Email, number: Number, messege: Msg };
      axios.post("https://nabarun-portfolio.herokuapp.com/submitReq", newObj);
      promptHandeler();
      
    }
    else {
      alert(" Please fillup all state first");
      console.log("pls fillup all state first");
    }
  }
   
  //// the Actual DOM return Element----------------------------->

  return (
    <div className="App">
      
      <Contact prmt_hndl={promptHandeler} prmt_state={promptToggel} getInputs={getInput}
        setFirstname={setfirstname} setLastname={setlastname} setEmail={setemail}
        setNumber={setnumber} setMsg={setmsg}
        First_name={First_name} Last_name={Last_name} Email={Email} Number={Number} Msg={Msg}
      ></Contact>
      <SideNav navHandeler={sideNavHandeler} navState={sidenav}></SideNav>
      <Nav navHandeler={sideNavHandeler} navState={sidenav}></Nav>
      <Header>
        <motion.div
           animate={{ y: [15, 0],opacity:[0,1] }}
           transition={{ duration: 0.5, delay: 0 }}>
            
        </motion.div>
        <div className="canvas_container">
        <TextContainer prmt_hndl={promptHandeler}></TextContainer>
        <ImgContainer></ImgContainer>
        </div>
      </Header>

      
      <About >
        <AboutTextDiv></AboutTextDiv>
        <AboutSvgDiv></AboutSvgDiv>
      </About>

      <AnimateSharedLayout>
      <Skill>
        <div className="perent_leftSkillDiv">
        <div className="leftSkillDiv">
        <GlassSkill logo={CppLogo} header="C++" description="C++ is a general-purpose, case-sensitive, object-oriented, and generic programming language.."></GlassSkill>
        <GlassSkill logo={JavaScriptLogo} header="Java Script" description="J.s is a programming language that is one of the core technologies of the World Wide Web.."></GlassSkill>
        <GlassSkill logo={ReactLogo} header="React" description="React is a open-source front-end JavaScript library for building user interfaces based on UI components.."></GlassSkill>
        
        </div>
        <div className="leftSkillDiv">
          <GlassSkill logo={ChromeLogo} header="Chrome Extention" description="Extensions are software programs, built on web technologies that enable users to customize the Chrome.."></GlassSkill>
          <GlassSkill logo={GameLogo} header="Gaming" description="Every One loves gaming and I'am not the exception..."></GlassSkill>
          <GlassSkill logo={PuzzelLogo} header="Critical Thinking" description="I'am also pritty good at critical thinking and problem solving.."></GlassSkill>
        </div>
        </div>
        <div className="rightSkillDiv">
          <GlassProgress></GlassProgress>
        </div>
        </Skill>
        </AnimateSharedLayout>
        
      </div>
  );

}

export default App;
