import React from "react";
import Subject from "./Subject";


const Subjects = ({ subjects, textLink }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-30px">
      {subjects.map((subject, idx) => (
        <Subject   key={idx} subject={subject} textLink={textLink} />
      ))}
    </div>
  );
};

export default Subjects;
