import "./home.scss";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

function Home() {
    const [workspaceName, setworkspaceName] = useState("");
    const [workspaceUrl, setWorkspaceUrl] = useState("");
    const history = useHistory();
    const location = useLocation();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(workspaceName !== "" && workspaceUrl !== ""){
            history.push('/planning', {name:location.state.name, workspaceName:workspaceName});
        }else{
            alert("Your Workspace Name and Workspace Url field is empty.");
        }
    }

    return (
        <div className="home">
            <div className="header">
                <div className="headerTop">
                    <img src="/avatar/logo.png" alt="" className="headerImg" />
                    <h3 className="title">{location.state.name}</h3>
                </div>
                <div className="headerBottom">
                    <ul className="processBar">
                        <li className="circleFill">1</li>
                        <li className="lineFill"></li>
                        <li className="lineFill"></li>
                        <li className="circleFill">2</li>
                        <li className="lineFill"></li>
                        <li className="line"></li>
                        <li className="circle">3</li>
                        <li className="line"></li>
                        <li className="line"></li>
                        <li className="circle">4</li>
                    </ul>
                </div>
            </div>
            <div className="mainHeading">
                <h3 className="mainContentHeading">Let's set up a home for all your work</h3>
                <p className="mainSmallContent">You can always change another workspace later.</p>
            </div>
            <div className="login">
                <form className="loginForm">
                    <label htmlFor="" className="formLabel">Workspace Name</label>
                    <input type="text" className="formInput" placeholder={location.state.name} onChange={(e)=>setworkspaceName(e.target.value)}/>
                    <label htmlFor="" className="formLabel">Workspace URL(optional)</label>
                    <div className="urlLayout">
                        <span className="url">www.eden.com/</span>
                        <input type="text" className="formInput1" placeholder="www.eden.com" onChange={(e)=>setWorkspaceUrl(e.target.value)} />
                    </div>
                    <button className="formButton" onClick={handleSubmit}>Create Workspace</button>
                </form>
            </div>
        </div>
    )
}

export default Home