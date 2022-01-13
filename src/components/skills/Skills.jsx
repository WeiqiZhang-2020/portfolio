import React from "react";

const skillsContent = [
  {
    name: "Javascript, css, HTML",
    skillPercent: "95",
  },
  {
    name: "React.Js",
    skillPercent: "90",
  },
  {
    name: "MongoDB, Express",
    skillPercent: "80",
  },
  {
    name: "Node.js",
    skillPercent: "95",
  },
  {
    name: "Git, Github",
    skillPercent: "90",
  },
  {
    name: "Jest, Mocha",
    skillPercent: "90",
  },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="progress_inner" key={i}>
          <span className="label">{val.name}</span>
          <div className="background">
            <div className="bar">
              <div
                className="bar_in"
                style={{ width: val.skillPercent + "%" }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
