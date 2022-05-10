import "./contact.css"
import { motion } from "framer-motion";
const Contact = ({ prmt_hndl, prmt_state, getInputs, setFirstname, setLastname, setEmail, setNumber, setMsg,
  First_name, Last_name, Email,Number,Msg}) => {
  
  return (
    <div className="contact_background" style={prmt_state ? { visibility: "visible" } : { visibility: "hidden", opacity:0 }} >
       <motion.div className="contact_container" animate={prmt_state ? { y: [300, 0], opacity: [0,1] } : { y: [0,500], opacity: [1,0] }} transition={{ duration: 0.4 }}>
         <div className="cut" onClick={prmt_hndl}>X</div>
        <form action="/submitReq" method="post" onSubmit={e => { e.preventDefault(); }}>
          <div className="u_div">
            
            <div className="eInput">
           <label for="email" className="u_div">First Name</label>
              <input className="u" value={First_name} type="name" placeholder="Alex" onChange={setFirstname}></input>
            </div>

            <div className="eInput">
           <label for="email" className="u_div">Last Name</label>
              <input className="u" value={Last_name} type="name" placeholder="Cormen" onChange={setLastname}></input> 
            </div>
       </div>
          <div className="u_div">

            <div className="eInput">
           <label for="email" className="u_div">Email</label>
            <input className="u" value={Email} type="email" placeholder="example@gmail.com" onChange={setEmail}></input>
            </div>

            <div className="eInput">
              <label for="number" className="u_div">Number</label>
              <input className="u" value={Number} type="phone" placeholder="7422992768" onChange={setNumber}></input>
            </div>
            
       </div>
          <div className="l_div">
            <label for="text">Write Your Messege..</label>
         <textarea id="cmsg" className="l" value={Msg} type="text" placeholder="Your massege goes here" onChange={setMsg}></textarea>
           </div>
          <button className="btn" onClick={getInputs}>Submit</button>
           </form>
   
       </motion.div>
       </div>
   )
 }
export default Contact;

