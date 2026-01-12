import Card from "./Card";

import Java from "../assets/icons/Java.svg";
import Python from "../assets/icons/Python.svg";
import CPlusPlus from "../assets/icons/C++ (CPlusPlus).svg";
import JavaScript from "../assets/icons/JavaScript.svg";
import React from "../assets/icons/React.svg";
import Node from "../assets/icons/Node.js.svg";
import Tailwind from "../assets/icons/Tailwind CSS.svg";
import MySQL from "../assets/icons/MySQL.svg";
import PostgreSQL from "../assets/icons/PostgresSQL.svg";
import SQLite from "../assets/icons/SQLite.svg";
import MongoDB from "../assets/icons/MongoDB.svg";
import Git from "../assets/icons/Git.svg";
import Postman from "../assets/icons/Postman.svg";

const skills = [
  { icon: Java, label: "Java" },
  { icon: Python, label: "Python" },
  { icon: CPlusPlus, label: "C++" },
  { icon: JavaScript, label: "JavaScript" },
  { icon: React, label: "React" },
  { icon: Node, label: "Node.js" },
  { icon: Tailwind, label: "Tailwind CSS" },
  { icon: MySQL, label: "MySQL" },
  { icon: PostgreSQL, label: "PostgreSQL" },
  { icon: SQLite, label: "SQLite" },
  { icon: MongoDB, label: "MongoDB" },
  { icon: Git, label: "Git" },
  { icon: Postman, label: "Postman" },
];

export default function Skill() {
  return (
    <div id="skill" className="bg-teal-100 py-20 border-t border-solid border-teal-600">
      <h1 className="text-center font-bold text-4xl pb-16">Skills</h1>
      <section className="flex flex-wrap w-[80%] md:w-[70%] mx-auto gap-6 justify-center">
        {skills.map((skill, index) => (
          <Card key={index} icon={skill.icon} label={skill.label} />
        ))}
      </section>
    </div>
  );
}
