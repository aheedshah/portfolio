import React from 'react';
import { motion } from 'framer-motion';

const WorkTimeline = () => {
  const experiences = [
    {
      title: "Back End Engineer",
      company: "Collectiv Food",
      period: "April 2024-Present",
      position: "left",
    },
    {
      title: "Contract Software Engineer",
      company: "",
      period: "September 2023 - April 2024",
      position: "right",
    },
    {
      title: "Software Engineering Intern",
      company: "Intuit",
      period: "June 2023 - September 2023",
      position: "left",
    },
    {
      title: "Student",
      company: "Goldsmiths University",
      details: "Computer Science (1st Class Honours)",
      period: "Oct 2020-Aug 2023",
      position: "right",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-600" />
          
          {/* Experience items */}
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex my-8">
              {/* Timeline dot */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-teal-500 rounded-full z-10" />
              
              {exp.position === 'left' ? (
                <>
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="w-6/12 pr-8"
                  >
                    <div className="bg-gray-900 p-6 rounded-lg shadow-xl ml-auto">
                      <h3 className="text-xl font-bold text-teal-500">{exp.title}</h3>
                      {exp.company && <h4 className="text-lg text-gray-300">{exp.company}</h4>}
                      {exp.details && <p className="text-gray-400">{exp.details}</p>}
                      <p className="text-gray-400 mt-2">{exp.period}</p>
                    </div>
                  </motion.div>
                  <div className="w-5/12 pl-8"></div>
                </>
              ) : (
                <>
                  <div className="w-6/12 pr-8"></div>
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="w-5/12 pl-8"
                  >
                    <div className="bg-gray-900 p-6 rounded-lg shadow-xl">
                      <h3 className="text-xl font-bold text-teal-500">{exp.title}</h3>
                      {exp.company && <h4 className="text-lg text-gray-300">{exp.company}</h4>}
                      {exp.details && <p className="text-gray-400">{exp.details}</p>}
                      <p className="text-gray-400 mt-2">{exp.period}</p>
                    </div>
                  </motion.div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkTimeline;