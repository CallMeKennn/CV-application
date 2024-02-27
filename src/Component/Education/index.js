import React from "react";
import "./Education.scss";
import {education} from "../../Data/Data"

const Education = () => {
    return (
        <div className="education-container">
            <h1>Education</h1>
            <hr />
            {education.map((education, index) => (
              <div key={index} className="education">
                <div className="year">{education.year}</div>
                <div>
                  <div className="school">{education.school}</div>
                  <div className="degree">Degree:  {education.degree}</div>
                </div>
              </div>
            ))}
        </div>
    );
};

export default Education;
