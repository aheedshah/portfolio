import React from "react";
import typescript from "../assets/typescript.png";
import reactImage from "../assets/react.png";
import python from "../assets/python.png";
import github from "../assets/github.png";
import sass from "../assets/sass.png";
import java from "../assets/java.png";
import mysql from "../assets/mysql.png";
import aws from "../assets/aws.png";
import cSharp from "../assets/c-sharp.png";
import terraform from "../assets/terraform.webp";
import pulumi from "../assets/pulumi.webp";
import goLang from "../assets/go-lang.png";

const Experience = () => {
    const techs = [
        {
            id:1,
            src: java,
            title: "Java",
            style: "shadow-green-500"
        },
        {
            id: 2,
            src: reactImage,
            title: "React",
            style: "shadow-blue-600",
        },
        {
            id: 3,
            src: mysql,
            title: "MySQL",
            style: "shadow-sky-400",
        },
        {
            id: 6,
            src: typescript,
            title: "TypeScript/JavaScript",
            style: "shadow-yellow-500",
        },
        {
            id: 7,
            src: sass,
            title: "SASS",
            style: "shadow-white",
        },
        {
            id: 8,
            src: python,
            title: "Python",
            style: "shadow-pink-400",
        },
        {
            id: 9,
            src: github,
            title: "Version Control (Github, Bitbucket)",
            style: "shadow-gray-400",
        },
        {
            id: 9,
            src: aws,
            title: "AWS Services",
            style: "shadow-gray-400",
        },
        {
            id: 10,
            src: cSharp,
            title: "C# (.NET)",
            style: "shadow-gray-400",
        },
        {
            id: 11,
            src: terraform,
            title: "Terraform",
            style: "shadow-gray-400",
        },
        {
            id: 12,
            src: pulumi,
            title: "Pulumi",
            style: "shadow-gray-400",
        },
        {
            id: 13,
            src: goLang,
            title: "Go Lang",
            style: "shadow-gray-400",
        },
    ];

    return (
        <div
            name="experience"
            className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Experience
                    </p>
                    <p className="py-6">These are some of the technologies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {techs.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
