import React from "react";
import { skill } from "../../Data/Data";
import "./Skill.scss";
import ExperienceList from "../ExperienceList";

const Skill = () => {
    return (
        <div className="skill">
            <h1>Experience</h1>
            <hr />
            {skill.map((skill, index) => (
                <div className="skill" key={index}>
                    <div className="skillName">{skill.skill}:</div>
                    <ExperienceList toggle={skill.toggle} />
                </div>
            ))}
        </div>
    );
};

export default Skill;
