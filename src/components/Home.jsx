import React from "react";
import Memoji from "../assets/memoji.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">
                        I'm a student and a Software Engineer
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">

                        I am recent graduate of Computer Science from Goldsmiths University of London.
                        I am proficient in many languages written in the experience section like Java, React and Python
                        and with version control too.
                        I am also familiar with testing libraries like JUnit, React Testing Library, Mocha or Jest.

                        I'm looking to further my software engineering career and keep learning more about this field.
                        I'm always looking to work on new projects with developers, so if you have an idea and are
                        looking for an extra pair of hands, don't hesitate to reach out!
                    </p>

                    <div>
                        <Link
                            to="portfolio"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
                        </Link>
                    </div>
                </div>

                <div>
                    <img
                        src={Memoji}
                        alt="my profile pic"
                        className="rounded-2xl mx-auto w-2/3 md:w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
