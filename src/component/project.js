import React, { Component } from "react";
import { project } from "../constant/data";

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            works: project,
        };
    }
    render() {
        const { works } = this.state;
        const { back } = this.props;
        return (
            <div className="container mx-auto">
                
                    <div className="container mx-auto flex flex-wrap">
                        {works.map((item) => (
                            <div
                            className=" w-full lg:w-2/5 m-10 shadow-md rounded-lg hover:shadow-2xl"
                                
                                key={item.title}
                            >
                                <div>
                                    
                                        <img
                                            src={item.picture}
                                            alt=""
                                            className="w-full h-56"
                                            
                                        />

                                        <p className="text-center font-bold text-gray-800">
                                            {item.title}
                                        </p>
                                        <p className="text-center font-bold text-gray-600 px-2 py-1">
                                            {item.description}
                                        </p>

                                        
                                            <div className="flex justify-center">
                                            <a href={item.site} className="text-center mb-3 pt-3 font-bold text-gray-100 px-4 py-2  rounded-full bg-green-600 hover:bg-gray-800"> Let me see </a>
                                            </div>
                                    
                                        
                                
                                </div>
                            </div>
                        ))}
                    </div>
                    <div
                    className=" flex justify-center"
                       
                    >
                        {back}
                    </div>
                
            </div>
        );
    }
}


export default Project;
