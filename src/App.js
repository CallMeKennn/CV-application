import "./App.scss";
import Header from "./Component/Header";
import Description from "./Component/Description";
import Education from "./Component/Education";
import Skill from "./Component/Skill";
import Experience from "./Component/Experience";
import Avatar from "./Assets/img/avatar.jpg"
import Infomation from "./Component/Infomation";

function App() {
    return (
        <div className="App">
            <div className="app-container">
                <Header />
                <div className="main-container">
                    <div className="flex">
                        <Description />
                        <Experience />
                        <Education />
                        <Skill />
                    </div>
                    <div className="skill_and_img">
                        <img src={Avatar}/>
                        <Infomation/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
