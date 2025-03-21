import React from "react";
import Memoji from "../assets/memoji.png";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import {Link} from "react-scroll";

const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">
                        I'm a Software Engineer
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        With two years of hands-on experience, I'm currently working as a Back End Engineer at
                        Collectiv Food. I have experience in many languages and tools like .Net, Java, React, Python and
                        AWS Cloud Services. I have worked with databases like PostgreSQL, MySQL and MongoDB and many
                        more.
                        These are written in the experience section below. I am also familiar with testing libraries
                        like XUnit, JUnit, React Testing Library, Mocha, Jest and others.

                        I'm looking to further my software engineering career and keep learning more about this field.
                        I'm always looking to work on new projects, so if you have an idea and are
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
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
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
