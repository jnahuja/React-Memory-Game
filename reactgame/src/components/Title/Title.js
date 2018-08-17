import React from "react";
import "./Title.css";

const Title = props => (

    <header className="title">
        <h1 className="h1custom">{props.children}</h1>
        <h2>Click on an image to earn points, but don't click on any more than once!</h2>
    </header>
)   
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    // <nav className="nav nav-tabs">
        // <h1 className="title">{props.children}</h1>;
    // </nav>


export default Title;
