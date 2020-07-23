import React, { Component } from "react";
import { Typography, Grid, Paper } from "@material-ui/core";
import { skills, databases, apistack } from "../constant/data";

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
                        <Paper
                            style={{
                                width: 700,
                                height: "100vh",
                                margin: 15,
                                textAlign: "center",
                            }}
                        >
                            <Typography
                                style={{
                                    textAlign: "center",
                                    fontSize: 30,
                                    marginTop: 30,
                                }}
                            >
                                Tech Stacks
                            </Typography>
                            {skills.map((item) => (
                                <div key={item}>
                                    <Typography
                                        style={{
                                            margin: 5,
                                            fontSize: 20,
                                            fontFamily: "Times New Roman",
                                            textAlign: "center",
                                            fontStyle: "italic",
                                        }}
                                    >
                                        {item.techstack}
                                    </Typography>
                                </div>
                            ))}

                            <Typography
                                style={{
                                    textAlign: "center",
                                    fontSize: 30,
                                    marginTop: 30,
                                }}
                            >
                                Databases
                            </Typography>
                            {databases.map((item) => (
                                <div key={item}>
                                    <Typography
                                        style={{
                                            margin: 5,
                                            fontSize: 20,
                                            fontFamily: "Times New Roman",
                                            textAlign: "center",
                                            fontStyle: "italic",
                                        }}
                                    >
                                        {item.techstack}
                                    </Typography>
                                </div>
                            ))}

                            <Typography
                                style={{
                                    textAlign: "center",
                                    fontSize: 30,
                                    marginTop: 30,
                                }}
                            >
                                API Specs
                            </Typography>
                            {apistack.map((item) => (
                                <div key={item}>
                                    <Typography
                                        style={{
                                            margin: 5,
                                            fontSize: 20,
                                            fontFamily: "Times New Roman",
                                            textAlign: "center",
                                            fontStyle: "italic",
                                        }}
                                    >
                                        {item.techstack}
                                    </Typography>
                                </div>
                            ))}
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Skills;
