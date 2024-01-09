import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { skills, experiences, testimonials } from "../constants";

import CTA from "../components/CTA";

const About = () => {
    return (
        <section className="max-container">
            <h1 className="head-text">
                Hello, I'm{" "}
                <span className="pink-gradient_text font-semibold drop-shadow">
                    Liza
                </span>
            </h1>

            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p>
                    Software engineer passionate about improving the quality of
                    human lives by bringing solutions to challenges and
                    elevating both human and digital experiences. I'm a
                    Bangladeshi Canadian living in Toronto. I adore every single
                    majestic big cat, and dragons!
                </p>
            </div>

            <div className="py-16">
                <h3 className="subhead-text pink-gradient_text">
                    Work Experience
                </h3>
                <div className="mt-5 flex flex-col gap-3 text-slate-500">
                    <p>
                        I've developed big scale products in a number of
                        industries including healthcare and clinical research
                        service provider, telematics, and e-book publishing.
                    </p>
                </div>

                <div className="mt-12 flex">
                    <VerticalTimeline>
                        {experiences.map((experience) => (
                            <VerticalTimelineElement
                                key={experience.company_name}
                                date={experience.date}
                                iconStyle={{
                                    background: experience.iconBg,
                                }}
                                icon={
                                    <div className="flex justify-center items-center w-full h-full">
                                        <img
                                            src={experience.icon}
                                            alt={experience.company_name}
                                            className="w-[60%] h-[60%] object-contain"
                                        />
                                    </div>
                                }
                                contentStyle={{
                                    borderBottom: "8px",
                                    borderStyle: "solid",
                                    borderBottomColor: experience.iconBg,
                                    boxShadow: "none",
                                }}
                            >
                                <div>
                                    <h3 className="text-black text-xl font-poppins font-semibold">
                                        {experience.title}
                                    </h3>
                                    <p
                                        className="text-black-500 font-medium font-base"
                                        style={{ margin: 0 }}
                                    >
                                        {experience.company_name}
                                    </p>
                                </div>

                                <ul className="my-5 list-disc ml-5 space-y-2">
                                    {experience.points.map((point, index) => (
                                        <li
                                            key={`experience-point-${index}`}
                                            className="text-black-500/50 font-normal pl-1 text-sm"
                                        >
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>

            <div className="py-10 flex flex-col">
                <h3 className="subhead-text pink-gradient_text">My Skills</h3>

                <div className="mt-16 pb-10 flex flex-wrap gap-12">
                    {skills.map((skill, index) => (
                        <div key={index} className="block-container w-20 h-20">
                            <div className="btn-back rounded-xl" />
                            <div className="btn-front rounded-xl flex justify-center items-center">
                                <img
                                    src={skill.imageUrl}
                                    alt={skill.name}
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="py-10 flex flex-col">
                <h3 className="subhead-text pink-gradient_text">
                    What My Peers Say About Me
                </h3>

                <div className="mt-16 pb-10 flex flex-wrap justify-between">
                    {testimonials.map((tm, index) => (
                        <div
                            key={index}
                            className="pb-10 block-container flex w-full sm:w-1/4 flex-col rounded-lg bg-white shadow-[0_2px_25px_-3px_rgba(237,0,140,0.1),0_10px_40px_-2px_rgba(237,0,140,0.08)] dark:bg-neutral-700"
                        >
                            <div className="m-3 text-left testimonial-min-height">
                                "{tm.testimonial}"
                            </div>

                            <div className="relative mt-2 mb-2">
                                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
                            </div>

                            <div className="pt-10 flex items-start">
                                <div className="rounded-full overflow-hidden w-16 h-16 flex-shrink-0 ml-2 mr-2">
                                    <img
                                        src={tm.image}
                                        alt={tm.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="ml-1">
                                    <p className="font-normal text-sm">
                                        {tm.name}
                                    </p>
                                    <p className="font-light text-sm">
                                        {tm.designation}
                                    </p>
                                    <p className="font-light text-sm">
                                        {tm.company}
                                    </p>
                                    <p>{tm.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative mt-2 mb-2">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
            </div>
            <hr className="border-slate-200" />

            <CTA />
        </section>
    );
};

export default About;
