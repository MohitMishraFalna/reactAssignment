import { Check } from "@mui/icons-material";
import "./congratulation.scss";
import { useLocation } from "react-router-dom";

function Congratulation() {
    const location = useLocation();
    console.log(location);
  return (
    <div className="congratulation">
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
                        <li className="lineFill"></li>
                        <li className="circleFill">4</li>
                    </ul>
                </div>
            </div>
            <div className="mainSuccess">
                <div className="success">
                    <Check className="successIcon"/>
                </div>
            </div>
            <div className="mainHeading">
                <h3 className="mainContentHeading">Congratulations, {location.state.name}!</h3>
                <p className="mainSmallContent">You have completed onboarding, you can start using the {location.state.workspaceName}</p>
            </div>
            <div className="login">
                <form className="loginForm">                    
                    <button className="formButton">Launch Eden</button>
                </form>
            </div>
    </div>
  )
}

export default Congratulation