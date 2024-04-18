import { Box } from "@mui/material";
import React from "react";

const Footer = () => {

    const footerStyle = {
        backgroundColor: "#20313e",
        width: "auto",
        margin: 0,
        padding: "20px",
        boxSizing: "border-box",
        marginRight: "0",
    };

    return (
        <footer className="py-5" style={footerStyle}>
            <Box className="row">
                <Box className="col-md-4 ml-5">
                    <h5 style={{ color: "white" }}>About</h5>
                    <p style={{ color: "white" }}>
                        Welcome to our Placement Management System.
                        <br /> Streamlining the placement process
                    </p>
                </Box>

                <Box className="col-md-4 ml-5">
                    <h5 style={{ color: "white" }}>Contact Us</h5>
                    <p style={{ color: "white" }}>
                        Career Guidance and Placement Unit(CGPU)
                       <br />Viswajyothi School of Management Studies,
                       <br />Vazhakulam P.O,
                       <br />Muvattupuzha,
                       <br />Ernakulam, Kerala,
                       <br />India - 686 670
                       <br />Phone : 0485- 2262211, 2262255, 2262977, 2262244, 2262311
                       <br />mail: vjcvklm@gmail.com, vjcet@vjcet.org
                    </p>
                </Box>

                <Box className="col-md-2 ml-5">
                    <h5 style={{ color: "white" }}>Quick Links</h5>
                    <ul className="list-unstyled">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/student/login">Student Portal</a>
                        </li>
                        <li>
                            <a href="/recruiter/login">Recruiter Portal</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </Box>
            </Box>
        </footer>
    );
};

export default Footer;