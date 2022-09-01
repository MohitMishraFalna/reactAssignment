import { Groups, Person } from "@mui/icons-material";
import "./planning.scss";
import { useHistory, useLocation } from "react-router-dom";
import { useState } from "react";

function Planning() {

    const [planningA, setPlanningA] = useState("");
    const [planningB, setPlanningB] = useState("");
    const history = useHistory();
    const location = useLocation();

    // Set state for validation
    const handleA = (e) => { 
        setPlanningA("A"); 
        let right = document.getElementById("right");
        if(right.classList.contains('active')){
            right.classList.remove('active')
        }
        e.target.classList.add("active");
    }

    const handleB = (e) => { 
        setPlanningB("B"); 
        let left = document.getElementById("left");
        if(left.classList.contains('active')){
            left.classList.remove('active')
        }
        e.target.classList.add("active");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(planningA !== "" || planningB !== ""){
            history.push('/congratulation', {name:location.state.name, workspaceName:location.state.workspaceName});
        }else{
            alert("Please choose one out of two.");
        }
    }

    return (
        <div className="planning">
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
                        <li className="lineFill"></li>
                        <li className="circleFill">3</li>
                        <li className="lineFill"></li>
                        <li className="line"></li>
                        <li className="circle">4</li>
                    </ul>
                </div>
            </div>
            <div className="mainHeading">
                <h3 className="mainContentHeading">How are you planning to use {location.state.name}?</h3>
                <p className="mainSmallContent">we'll streamline your setup experience accourdingly.</p>
            </div>
            <div className="login">
                <form className="loginForm">
                    <div className="content">
                        <div className="left" id="left" onClick={handleA}>
                            <Person className="icon" />
                            <h5 className="contentTitle">For myself</h5>
                            <p className="contentBody">Write better. Think more clearly. Stay organize.</p>
                        </div>
                        <div className="right" id="right" onClick={handleB}>
                            <Groups className="icon"/>
                            <h5 className="contentTitle">With my team</h5>
                            <p className="contentBody">Wikis, docs,tasks & project, all in one place.</p>
                        </div>
                    </div>                    
                    <button className="formButton" onClick={handleSubmit}>Create Workspace</button>
                </form>
            </div>
        </div>
    )
}

export default Planning