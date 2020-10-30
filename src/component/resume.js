import React, { Component } from "react";
import { Link } from "react-router-dom";
import About from "./about";
import Work from "./work";

class Resume extends Component {
    state = {
        step: 1,
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1,
        });
    };
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1,
        });
    };
    focus = () => {
        alert("going home");
    };

    render() {
        const goBack = (
            <Link to="/" className="mr-3">
                <button className="bg-transparent text-white shadow-lg z-10 border-b border-green-900">
                    Home
                </button>
            </Link>
        );
        const { step } = this.state;
        switch (step) {
            case 1:
                return (
                    <About
                        next={this.nextStep}
                        prev={this.prevStep}
                        back={goBack}
                    />
                );

            case 2:
                return (
                    <Work
                        next={this.nextStep}
                        prev={this.prevStep}
                        back={goBack}
                        Container={backcolor}
                    />
                );

            default:
                break;
        }
    }
}
const backcolor = {
    flex: 1,
    background: "linear-gradient(to right bottom,  #DCF0F0   ,  #E5F0F0     )",
    //backgroundColor:'#D1D8D9',
    height: "100vh",
    // #126F6F #7AD9D9
};

export default Resume;
