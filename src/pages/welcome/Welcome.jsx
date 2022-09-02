import { useState } from "react";
import "./welcome.scss";
import { useHistory } from "react-router-dom";

function Welcome() {
    const [name, setName] = useState("");
    const [displayName, setDisplayName] = useState("");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name !== "" && displayName !== ""){
            history.push('/home', {name:name});
        }else{
            alert("Your Name and Display name field is empty.");
        }
    }

  return (
    <div className="welcome">
        <div className="header">
            <div className="headerTop">
                <img src="/avatar/logo.png" alt="" className="headerImg" />
                <h3 className="title">Eden</h3>
            </div>
            <div className="headerBottom">
                <ul className="processBar">
                    <li className="circleFill">1</li>
                    <li className="lineFill"></li>
                    <li className="line"></li>
                    <li className="circle">2</li>
                    <li className="line"></li>
                    <li className="circle">3</li>
                    <li className="line"></li>
                    <li className="circle">4</li>
                </ul>
            </div>
        </div>
        <div className="mainHeading">
            <h3 className="mainContentHeading">Welcome! First things first...</h3>
            <p className="mainSmallContent">You can always change them later.</p>
        </div>
        <div className="login">
            <form className="loginForm">
                <label htmlFor="" className="formLabel">Full Name</label>
                <input type="text" className="formInput" onChange={(e)=>setName(e.target.value)} placeholder="Full name"/>
                <label htmlFor="" className="formLabel">Display Name</label>
                <input type="text" className="formInput" onChange={(e)=>setDisplayName(e.target.value)} placeholder="Display name"/>
                <button className="formButton" onClick={handleSubmit}>Create Workspace</button>
            </form>
        </div>
    </div>
  )
}

export default Welcome