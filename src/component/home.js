import React, { Component } from "react";
import { tech, about } from "../constant/data";
import { Grid } from "@material-ui/core";

import Footer from "./footer";
import { Href } from "./href";
//import  Navbar from './navbar'

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            techinfo: tech,
            aboutinfo: about,
        };
    }

    render() {
        const { aboutinfo } = this.state;
        return (
            <Grid
                container
                className="bg-gray-900 h-screen flex justify-center text-center"
            >
                <div className="flex justify-center mt-5">
                    <div className="bg-gray-900 shadow-lg z-10 border-b border-green-900 m-5 w-ful px-4 py-2 lg:w-1/2">
                        {aboutinfo.map((item) => (
                            <div key={item.title}>
                                <h2 className="font-bold text-white mb-5 text-3xl">
                                    {item.title}
                                </h2>
                                <h2
                                    key={item}
                                    className="font-bold italic text-white text-xl"
                                >
                                    {item.slug}
                                </h2>

                                <p className="font-semibold text-white break-words px-4 py-3">
                                    {item.description}
                                </p>
                            </div>
                        ))}

                        <Href path="/project" name="View Project" />
                        <Href path="/techstack" name="View My Tech Stack" />
                        <Href path="/resume" name="View Resume" />
                    </div>
                </div>

                <Footer />
            </Grid>
        );
    }
}

export default Home;
