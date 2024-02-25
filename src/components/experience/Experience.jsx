import React from "react";
import "./Experience.css";
import Skillcard from "./Skillcard";
import data from "../../data/data.json";
import Expcard from "./Expcard";

function Experience(params) {
  let skills = data[0].skills;
  let experience = data[0].experience;

  return (
    <div className="exp slides" id="exp">
      <div className="exp_container">
        <Skillcard data={skills} />
        <Expcard data={experience} />
      </div>
    </div>
  );
}
export default Experience;
