import React, { Component } from "react";
import { Divider } from "@material-ui/core";
import { about, contact } from "../constant/data";

class About extends Component {
    state = {
        about,
        contact,
    };
    render() {
        const { next, back } = this.props;
        const { about, contact } = this.state;
        return (
            <div className="bg-gray-900 h-screen">
                <div className="block justify-center pt-10">
                    <div className="flex justify-center">
                        <div className="w-10/12 lg:w-1/2 rounded-lg justify-center bg-gray-200 text-center px-4 py-2">
                            <h2 className="font-bold text-xl text-gray-900 px-4 py-2">
                                About me
                            </h2>
                            {about.map((item) => (
                                <div key={item.title}>
                                    <h5 className="font-bold text-gray-700 px-4 py-2 text-lg">
                                        {item.description}
                                    </h5>
                                </div>
                            ))}
                            <Divider />
                            <h1 className="font-bold text-xl text-gray-900 px-4 py-2">
                                Contact Details
                            </h1>
                            {contact.map((item) => (
                                <div key={item.Phone}>
                                    <h5 className="font-bold text-gray-700 px-4 py-2">
                                        Name: {item.name}
                                    </h5>

                                    <h5 className="font-bold text-gray-700 px-4 py-2">
                                        Phone: {item.Phone}
                                    </h5>
                                    <h5 className="font-bold text-gray-700 px-4 py-2">
                                        Email: {item.email}
                                    </h5>
                                    <h5 className="font-bold text-gray-700 px-4 py-2">
                                        Language: {item.language}
                                    </h5>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className=" flex justify-center">
                        {back}
                        <button
                            onClick={next}
                            className="bg-transparent shadow-lg z-10 border-b border-green-900 text-white"
                        >
                            Work & Education
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
