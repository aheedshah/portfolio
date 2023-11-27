import React from "react";
import toddlerWorld from "../assets/portfolio/toddlerworld.png";
import bankingApp from "../assets/portfolio/bankingApp.jpg";
import sudokuSolver from "../assets/portfolio/sudokuSolver.jpg";
import wordle from "../assets/portfolio/wordle.jpg";
import ecommerceApp from "../assets/portfolio/ecommerce.jpg";
import jobCrop from "../assets/portfolio/jobCrop.png";

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: toddlerWorld,
            name: "Toddler World",
            code: "https://www.github.com/aheedshah/toddler-world"
        },
        {
            id: 2,
            src: bankingApp,
            name: "Banking App",
            code: "https://www.github.com/aheedshah/bankingApp"
        },
        {
            id: 3,
            src: sudokuSolver,
            name: "Sudoku Solver",
            code: "https://github.com/aheedshah/University/tree/main/sudokuSolver"
        },
        {
            id: 4,
            src: wordle,
            name: "Wordle",
            code: "https://github.com/aheedshah/University/tree/main/Wordle%20"
        },
        {
            id: 5,
            src: ecommerceApp,
            name: "Ecommerce App",
            code: "https://www.github.com/aheedshah/ecommerce-app"
        },
        {
            id: 6,
            src: jobCrop,
            name: "Job Crop",
            code: "https://www.github.com/aheedshah/job-crop"
        },
    ];

    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">These are some of the projects I've worked on</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, name, code }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            <div className="flex items-center justify-center">
                                <div className="w-1/2 px-6 py-3 m-4 duration-200">
                                    <p>{name}</p>
                                </div>
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    <a href={code} target="_blank" rel="noreferrer">Code</a>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
