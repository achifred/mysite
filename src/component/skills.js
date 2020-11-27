import React, { Component } from "react";
import { Grid, } from "@material-ui/core";
import { skills, databases, apistack,infrastructure } from "../constant/data";

class Skills extends Component {
    state = {
        skills,
        databases,
        apistack,
    };
    render() {
        const { Container } = this.props;
        const { skills } = this.state;
        return (
            <div style={Container}>
                <Grid container>
                    <Grid container style={{ justifyContent: "center" }}>
                        <div
                        className="w-3/4 min-h-screen  text-center hover:shadow-2xl rounded-lg"
                            
                        >
                            <h3
                            className="text-center font-extrabold pt-10 text-3xl text-gray-700"
                               
                            >
                                Tech Stacks
                            </h3>
                            {skills.map((item) => (
                                <div key={item.techstack}>
                                    <p
                                    className="text-center italic text-lg  font-bold text-gray-600"
                                        
                                    >
                                        {item.techstack}
                                    </p>
                                </div>
                            ))}

                            <h3
                               className="text-center font-extrabold pt-10 text-3xl text-gray-700"
                            >
                                Databases
                            </h3>
                            {databases.map((item) => (
                                <div key={item.techstack}>
                                    <p
                                        className="text-center italic text-lg  font-bold text-gray-600"
                                    >
                                        {item.techstack}
                                    </p>
                                </div>
                            ))}
                            <h3
                                className="text-center font-extrabold pt-10 text-3xl text-gray-700"
                            >
                                Infrastructure
                            </h3>
                            {infrastructure.map((item) => (
                                <div key={item.techstack}>
                                    <p
                                       className="text-center italic text-lg  font-bold text-gray-600"
                                    >
                                        {item.techstack}
                                    </p>
                                </div>
                            ))}
                            <h3
                                className="text-center font-extrabold pt-10 text-3xl text-gray-700"
                            >
                                API Specs
                            </h3>
                            {apistack.map((item) => (
                                <div key={item.techstack}>
                                    <p
                                       className="text-center italic text-lg  font-bold text-gray-600"
                                    >
                                        {item.techstack}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Skills;
