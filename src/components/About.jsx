import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>

                <p className="text-xl mt-20">
                    I am a third-year student of Computer Science and I'm currently studying
                    Computer Science at University of London, Goldsmiths. I am proficient in many languages which
                    are written in the experience section and  with source control. I am familiar with different testing
                    libraries like JUnit, React Testing Library, Mocha or Jest.
                </p>

                <br />

                <p className="text-xl">
                    I'm looking to further my career as a Software Engineer and keep on learning more about this field.
                    I'm always looking to work on new projects with developers so if you have an idea and are looking for
                    an extra pair of hands, don't hesitate to reach out!
                </p>
            </div>
        </div>
    );
};

export default About;
