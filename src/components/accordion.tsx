'use client'

import { useState } from "react";
// @ts-ignore
import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";

const skills = {
    languages: [
        { label: "JavaScript", img: "./Img/javasc!pt.png" },
        { label: "HTML", img: "./Img/htm!.png" },
        { label: "CSS", img: "./Img/css!.png" },
        { label: "Python", img: "./Img/python.jpeg" },
    ],
    frameworks: [
        { label: "Bootstrap", img: "./Img/bootstrap_main.png" },
        { label: "Tailwind", img: "./Img/tailwind.png" },
        { label: "React", img: "./Img/react_main.png" },
        { label: "Django REST", img: "./Img/django_rest.png" },
        { label: "Next.js", img: "./Img/nextjs.webp" },
    ],
    otherSkills: [
        "Frontend Web Developer",
        "Backend Web Developer",
        "REST APIs",
        "PostgreSQL",
        "Version Control, Git, GitHub,",
        "TypeScript",
        "Firebase Authentication",
        "MongoDb"
    ],
};

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };
    return (
        <div className="h-full">
            <div className="w-[98%] mx-auto my-6 rounded-lg py-12 px-12">
                {/* Languages */}
                <div className="border border-gray-100 rounded-lg mb-4 overflow-hidden">
                    <button
                        className="w-full text-left px-6 py-4 font-semibold flex justify-between items-center  text-black"
                        onClick={() => toggle(0)}
                    >
                        Languages

                        <span className="transition-transform duration-300">
                            {openIndex === 0 ? (
                                // @ts-ignore
                                <FaChevronUp className="w-5 h-5" />
                            ) : (
                                // @ts-ignore
                                <FaChevronDown className="w-5 h-5" />
                            )}
                        </span>
                    </button>
                    {openIndex === 0 && (
                        <div className=" px-6 py-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border border-gray-300 rounded-md">
                            {skills.languages.map((lang) => (
                                <div key={lang.label} className="flex flex-col items-center">
                                    <img src={lang.img} alt={lang.label} className="h-12 w-12" />
                                    <p className="text-sm font-semibold text-[#253858] mt-2">{lang.label}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Frameworks */}
                <div className="border border-gray-100 rounded-lg mb-4 overflow-hidden">
                    <button
                        className="w-full text-left px-6 py-4 bg-white font-semibold text-black flex justify-between items-center"
                        onClick={() => toggle(1)}
                    >
                        Frameworks
                        <span className="transition-transform duration-300">
                            {openIndex === 1 ? (
                                // @ts-ignore
                                <FaChevronUp className="w-5 h-5" />
                            ) : (
                                // @ts-ignore
                                <FaChevronDown className="w-5 h-5" />
                            )}
                        </span>
                    </button>
                    {openIndex === 1 && (
                        <div className=" px-6 py-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border border-gray-300  rounded-md">
                            {skills.frameworks.map((fw) => (
                                <div key={fw.label} className="flex flex-col items-center">
                                    <img src={fw.img} alt={fw.label} className="h-16" />
                                    <p className="text-sm font-semibold text-[#253858] mt-2">{fw.label}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>


                <div className=" rounded-lg overflow-hidden">
                    <button
                        className="w-full text-left px-6 py-4 bg-white font-semibold text-black border border-gray-100 flex justify-between items-center"
                        onClick={() => toggle(2)}
                    >
                        Other Skills
                        <span className="transition-transform duration-300">
                            {openIndex === 2 ? (
                                // @ts-ignore
                                <FaChevronUp className="w-5 h-5" />
                            ) : (
                                // @ts-ignore
                                <FaChevronDown className="w-5 h-5" />
                            )}
                        </span>
                    </button>
                    {openIndex === 2 && (
                        <ul className="bg-white px-6 py-4 list-disc pl-8 space-y-3">
                            {skills.otherSkills.map((skill) => (
                                <li key={skill} className="text-sm p-2 border-t-0 font-semibold text-[#253858] border border-gray-300 rounded-md ">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
               <div className="pt-7">
                 <a className="text-blue-600 bg-white hover:text-white hover:bg-blue-600 border border-blue-600 p-3 rounded-md" href="/documents/Akinola_Victor_CV.docx" download
                    >Get my Resume
                </a>
               </div>
            </div>
        </div>
    );
};

export default Accordion;
