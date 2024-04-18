import React from "react";
import { Box } from "@mui/material";
import Card from "react-bootstrap/Card";
import { Container, Image } from "react-bootstrap";

const Contact = () => {
    const containerStyle = {
        background: "url('../../../assets/abstract-watercolor-paper.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    const cardStyle = {
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.5s",
        transformStyle: "preserve-3d",
        perspective: "1000px",
        transform: "rotateX(0)",
    };

    const cardHoverStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: "translateY(100%)",
        transition: "transform 0.5s",
    };

    const cardHoverText = {
        color: "#fff",
        fontSize: "18px",
        textAlign: "center",
    };

    const handleCardHover = (e) => {
        e.currentTarget.querySelector(".card-hover").style.transform =
            "translateY(0)";
    };

    const handleCardLeave = (e) => {
        e.currentTarget.querySelector(".card-hover").style.transform =
            "translateY(100%)";
    };

    return (
        <Box margin="10px" width="auto">
            <Box>
                <img
                    src={`../../../assets/contactpage.jpg`}
                    alt="contact"
                    style={{
                        background: "cover",
                        width: "100%",
                        height: "100%",
                    }}
                />
            </Box>
            <Box
                position="absolute"
                top="30%"
                left="50%"
                textAlign="center"
                color="white"
                sx={{ transform: "translate(-50%,-50%)" }}
            >
                <h1 className="text-center">CONTACT US</h1>
                <p>Home/Contact</p>
            </Box>
            <Box>
                <Box textAlign="center" marginTop="80px">
                    <h1>GET IN TOUCH</h1>
                </Box>
                <hr
                    style={{
                        borderTop: "1px solid #000",
                        margin: "60px auto",
                        width: "50%",
                    }}
                />
            </Box>

            <Box>
                <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.793281225627!2d76.62805107590033!3d9.951150273871555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07dd2f387bbce7%3A0x33c9780276b797b6!2sViswajyothi%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1712846223537!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </Box>

            <br />
            <br />
            <h1 className="display-10 mb-4 ml-2">Address</h1>
            <Container fluid className="py-5 " style={containerStyle}>
                <div className="row">
                    <div className="col-md-1 mr-3"></div>
                    <div className="col-md-3 mr-3 mb-2 d-none d-md-block">
                        <Image
                            src="../../../assets/contactaddress.jpg"
                            alt="Profile Picture"
                            fluid
                            roundedCircle
                        />
                    </div>

                    <div className="col-md-7 ml-5">
                        <Card
                            style={cardStyle}
                            onMouseEnter={handleCardHover}
                            onMouseLeave={handleCardLeave}
                        >
                            <Card.Body>
                                <Card.Title style={{ fontSize: "30px" }}>
                                    <br />
                                    Career Guidance and Placement Unit (CGPU)
                                    <br />
                                </Card.Title>

                                <div
                                    className="card-hover"
                                    style={cardHoverStyle}
                                >
                                    <p style={cardHoverText}>
                                        <Card.Text>
                                            <br />
                                            Viswajyothi School of Management Studies,
                                            Vazhakulam P.O,
                                            Muvattupuzha,
                                            Ernakulam, Kerala,
                                            India - 686 670
                                            Phone : 0485- 2262211, 2262255, 2262977, 2262244, 2262311
                                            mail: vjcvklm@gmail.com, vjcet@vjcet.org
                                        </Card.Text>
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Container>
            <br />
            <br />

            <h1 className="display-10 mb-4 ml-2">Contact Person</h1>

            <Container fluid className="py-5" style={containerStyle}>
                <div className="row">
                    <div className="col-md-1 mr-2"></div>
                    <div className="col-md-7 mb-5">
                        <Card
                            style={cardStyle}
                            onMouseEnter={handleCardHover}
                            onMouseLeave={handleCardLeave}
                        >
                            <Card.Body>
                                <Card.Title className="text-center" style={{ fontSize: "35px" }}>
                                    <br />

                                    Placement Officer <br />
                                    VJCET
                                    <br /><br />
                                </Card.Title>
                                <div
                                    className="card-hover"
                                    style={cardHoverStyle}
                                >
                                    <p style={cardHoverText}>
                                        <br />
                                        <Card.Title>
                                            Mr. C.Mavin
                                        </Card.Title>
                                        <Card.Text>
                                            <p>
                                                Asst. Professor & Placement Officer


                                            </p>
                                            <p>
                                                VJCET,{" "}
                                            </p>
                                            <p>Cell: +919446437330</p>
                                            <p>
                                                Phone: 0485 2262551</p>
                                            <p>Email: placement@vjcet.org</p>
                                        </Card.Text>
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center">
                            <Image
                                src="../../../assets/Mavin.jpeg"
                                alt="Profile Picture"
                                fluid
                                roundedCircle
                            />
                        </div>
                    </div>
                </div>
            </Container>

            <Box className="bottomContainer">
                <Box className="top-text">
                    <h1 style={{ marginTop: "80px", textAlign: "center" }}>
                        FEEL FREE TO REACH US!
                    </h1>
                </Box>
                <Box className="bottom-text-divider"></Box>
            </Box>
        </Box>
    );
};

export default Contact;
