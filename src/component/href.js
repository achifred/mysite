import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

export function Href({ path, name }) {
    return (
        <Grid container style={{ justifyContent: "center" }}>
            <button className="bg-gray-900 mt-3 px-2 py-2 border-b border-green-900 rounded shadow-sm z-5 text-white hover:bg-black  ">
                <Link to={path}>{name}</Link>
            </button>
        </Grid>
    );
}
