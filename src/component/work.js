import React, { Component } from "react";
import { Divider } from "@material-ui/core";
import { education, workexp } from "../constant/data";

class Work extends Component {
    state = {
        education,
        workexp,
    };
    render() {
        const { prev, back } = this.props;
        const { education, workexp } = this.state;
        return (
            <div className="bg-gray-900 h-auto">
                <div className="block justify-center pt-3">
                    <div className="flex justify-center">
                        <div className="w-10/12 lg:w-1/2 rounded-lg justify-center bg-gray-200 text-center px-4 py-2">
                            <h2 className="font-bold text-xl text-gray-900 px-4 py-2">
                                Work Experience
                            </h2>
                            {workexp.map((item) => (
                                <div key={item.date}>
                                    <h5 className="font-bold text-gray-700 text-xl px-4 py-2">
                                        {item.company}
                                    </h5>
                                    <h5 className="font-bold text-gray-700  px-4 py-2">
                                        {item.role} {item.date}
                                    </h5>

                                    <div>
                                        {item.project.map((item) => (
                                            <div key={item.role}>
                                                <p className="mb-5 text-center text-gray-700">
                                                    * {item.role}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <Divider />
                            <h2 className="font-bold text-xl text-gray-900 px-4 py-2">
                                Education
                            </h2>
                            {education.map((item) => (
                                <div key={item.year}>
                                    <h5 className="font-bold text-xl text-gray-700">
                                        {item.name}
                                    </h5>
                                    <h5 className="font-bold italic text-gray-700">
                                        {item.programe} {item.year}
                                    </h5>
                                    <h5 className="font-bold  text-gray-700">
                                        {item.description}
                                    </h5>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className=" flex justify-center pb-5">
                    {back}
                    <button
                        className="bg-transparent shadow-lg z-10 border-b border-green-900 text-white"
                        onClick={prev}
                    >
                        About me
                    </button>
                </div>
            </div>
        );
    }
}

export default Work;
