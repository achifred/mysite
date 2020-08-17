import React, { Component } from "react";
import { Typography, Button, Grid, Paper, Divider } from "@material-ui/core";
import { about, contact } from "../constant/data";

class About extends Component {
    state = {
        about,
        contact,
    };
    render() {
        const { next, back, Container } = this.props;
        const { about, contact } = this.state;
        return (
            <div style={Container}>
                <Grid container style={styles.aboutContainer}>
                    <Grid container style={{ justifyContent: "center" }}>
                        <Paper style={styles.abtPaper}>
                            <Typography
                                style={{
                                    margin: 15,
                                    fontSize: 20,
                                    color: "#2398AB",
                                }}
                            >
                                About me
                            </Typography>
                            {about.map((item) => (
                                <div key={item.title}>
                                    <Typography style={styles.aboutText}>
                                        {item.description}
                                    </Typography>
                                </div>
                            ))}
                            <Divider />
                            <Typography
                                style={{
                                    margin: 15,
                                    fontSize: 20,
                                    color: "#2398AB",
                                }}
                            >
                                Contact Details
                            </Typography>
                            {contact.map((item) => (
                                <div key={item.Phone}>
                                    <Typography style={styles.contactText}>
                                        Name: {item.name}
                                    </Typography>

                                    <Typography style={styles.contactText}>
                                        Phone: {item.Phone}
                                    </Typography>
                                    <Typography style={styles.contactText}>
                                        Email: {item.email}
                                    </Typography>
                                    <Typography style={styles.contactText}>
                                        Language: {item.language}
                                    </Typography>
                                </div>
                            ))}
                        </Paper>
                    </Grid>
                    {back}
                    <Button
                        onClick={next}
                        variant="contained"
                        style={styles.btn}
                    >
                        Work & Education
                    </Button>
                </Grid>
            </div>
        );
    }
}
const styles = {
    /*Container:{
    flex:1,
    background: 'linear-gradient(to right bottom, #126F6F , #7AD9D9    )',
    //backgroundColor:'#D1D8D9',
    height:'100vh'

  },*/
    aboutContainer: {
        justifyContent: "center",
    },
    abtPaper: {
        width: 700,
        textAlign: "center",
        margin: 18,
    },
    aboutText: {
        margin: 20,
        fontFamily: "Times New Roman",
        fontSize: 20,
    },

    contactText: {
        marginLeft: 20,
        marginTop: 12,
        marginBottom: 15,
        fontFamily: "Times New Roman",
        fontSize: 20,
    },
    btn: {
        //marginRight:20,
        backgroundColor: "transparent",
        color: "black",
    },
};
export default About;
