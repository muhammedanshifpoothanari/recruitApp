import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { tokens } from "../../theme";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./index.css";

const Home = () => {
  const colors = tokens();
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Box margin="10px" width="auto">
      <Box>
        <Box
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
          <Box className="carousel-inner">
            <Box className="carousel-item active">
              <img
                className="d-block w-100"
                src={`../../../assets/vjcet.jpeg`}
                style={{
                  background: "cover",
                  width: "100%",
                  maxHeight: "650px",
                }}
                alt="First slide"
              />
            </Box>
            <Box className="carousel-item">
              <img
                className="d-block w-100"
                src={`../../../assets/vjcet1.jpeg`}
                style={{
                  background: "cover",
                  width: "100%",
                  maxHeight: "650px",
                }}
                alt="Second slide"
              />
            </Box>
            {/* <Box className="carousel-item">
              <img
                className="d-block w-100"
                src={`../../../assets/cet_sideview.jpg`}
                style={{
                  background: "cover",
                  width: "100%",
                  maxHeight: "650px",
                }}
                alt="Third slide"
              />
            </Box>
            <Box className="carousel-item">
              <img
                className="d-block w-100"
                src={`../../../assets/cet_plaque.jpg`}
                style={{
                  background: "cover",
                  width: "100%",
                  maxHeight: "650px",
                }}
                alt="Fourth slide"
              />
            </Box> */}
          </Box>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </Box>
      </Box>

      <Container fluid>
        <div className="section1">
          {isMobile ? (
            <Typography>
              <h4 className="main-heading" style={{ fontSize: "48px" }}>
                Overview of Our Institution
              </h4>
            </Typography>
          ) : (
            <Typography>
              <h2 className="main-heading" style={{ fontSize: "78px" }}>
                Overview of Our Institution
              </h2>
            </Typography>
          )}
          <hr
            style={{
              border: "1px groove",
              width: isMobile ? "50%" : "25%",
            }}
          />
          <br />
          <Card
            className="overview-card mx-auto "
            style={{ maxWidth: "70rem" }}
          >
            <Card.Body>
              <Card.Text>
              Established in 2001, VJCET - Viswajyothi College of Engineering and Technology is a leading institute in higher education, located in Ernakulum, Kerala. Students can pursue their education from the institute in Degree courses including PG and UG programs. These programs are offered in full-time mode. The institute has a good reputation for courses such as B.E. / B.Tech, BHMCT, M.E./M.Tech, MBA/PGDM. VJCET - Viswajyothi College of Engineering and Technology provides the opportunity to gain expertise through its trained and experienced faculty in the fields of Computer Science Engineering, Computer Science Engineering, Industrial Engineering, VLSI Design, Biotechnology Engineering, Artificial Intelligence and Machine Learning, Civil Engineering, Computer Science Engineering, Computer Science Engineering, Electrical Engineering, Electronics and Communication Engineering, Information Technology, Mechanical Engineering. The courses provided are in the stream of Business and Management Studies, Engineering, Hospitality and Travel and are approved by the AICTE. The institute provides quality education and the fee for the courses ranges between INR 100,000-314,200. VJCET - Viswajyothi College of Engineering and Technology have 891 seats, and offers excellent infrastructure facilities.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="section">
          {isMobile ? (
            <Typography>
              <h4 className="main-heading" style={{ fontSize: "48px" }}>
                About Placement Cell
              </h4>
            </Typography>
          ) : (
            <Typography>
              <h2 className="main-heading" style={{ fontSize: "78px" }}>
                About Placement Cell
              </h2>
            </Typography>
          )}
          <hr
            style={{
              border: "1px groove",
              width: isMobile ? "50%" : "25%",
            }}
          />
          <br />

          <Card className="overview-card mx-auto" style={{ maxWidth: "70rem" }}>
            <Card.Body>
              <Card.Text>
              Placement is a very important activity at VISWAJYOTHI College of Engineering and Technology .VJCET has an independent placement cell focused to cater to the needs of leading organizations in conducting campus interviews for the final year. The placement officer is assisted by student representatives. The committee evolves a broad policy framework every year. Students are closely co-opted in implementing these policy decisions. The cell keeps close liaison with various industrial establishments (both private and public sectors), which conduct campus interviews and select the student from all disciplines. Most of them visit the Campus for holding campus interviews. VISWAJYOTHI School of Management (VSMS) have a department representative who co ordinates the placement activities synchronizing with placement department.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        

        <div className="section">
          {isMobile ? (
            <Typography>
              <h4 className="main-heading" style={{ fontSize: "48px" }}>
                Recruiter's Speak
              </h4>
            </Typography>
          ) : (
            <Typography>
              <h2 className="main-heading" style={{ fontSize: "78px" }}>
                Recruiter's Speak
              </h2>
            </Typography>
          )}
          <hr
            style={{
              border: "1px groove",
              width: isMobile ? "50%" : "25%",
            }}
          />
          <br />

          <div>
          <div className="carousel-container carousel-container-2 col-md-10 ">
            <div
              id="carouselTestimonial"
              className="carousel carousel-testimonial slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselTestimonial"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#carouselTestimonial" data-slide-to="1"></li>
                <li data-target="#carouselTestimonial" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item text-center active">
                  <div className="carousel-testimonial-img p-1 border  m-auto">
                    <img
                      className="d-block w-100 rounded-circle"
                      src="../../../assets/Cognizant-Logo.png"
                      alt="First slide"
                    />
                  </div>
                  <h5 className="mt-4 mb-0">
                    <p2>
                      " Cognizant shares a fantastic relationship with VJCET. We
                      have been visiting the institute for the past several
                      years and every year the students seem to be getting
                      better - a tribute to the grooming and development of the
                      students, to the faculty and the management team of the
                      college. The students whom we have hired from the college
                      in the past are today in leading positions within
                      Cognizant, working across different technology platforms
                      and domains. "
                    </p2>
                  </h5>
                </div>
                <div className="carousel-item text-center">
                  <div className="carousel-testimonial-img p-1 border m-auto">
                    <img
                      className="d-block w-100 "
                      src="../../../assets/Microsoft-logo.jpg"
                      alt="Second slide"
                    />
                  </div>
                  <h5 className="mt-4 mb-0">
                    <p2>
                      " We are very happy with the way the students have fared
                      in the selection processes and in their general behavior
                      and attitude. Thanks to the hospitality extended to us by
                      your team. "
                    </p2>
                  </h5>
                </div>
                <div className="carousel-item text-center">
                  <div className="carousel-testimonial-img p-1 border m-auto">
                    <img
                      className="d-block w-100 "
                      src="./../../assets/symphony-logo.png"
                      alt="Third slide"
                    />
                  </div>
                  <h5 className="mt-4 mb-0">
                    <p2>
                      " Thank you for the overall arrangement made for the
                      campus placements. The quality of the students is very
                      good, and we would definitely consider visiting again next
                      year. "
                    </p2>
                  </h5>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselTestimonial"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselTestimonial"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
        </div>
      </Container>

      <div className="section">
        {isMobile ? (
          <Typography>
            <h4 className="main-heading" style={{ fontSize: "48px" }}>
              Our Recruiters
            </h4>
          </Typography>
        ) : (
          <Typography>
            <h2 className="main-heading" style={{ fontSize: "78px" }}>
              Our Recruiters
            </h2>
          </Typography>
        )}
        <hr
          style={{
            border: "1px groove",
            width: isMobile ? "50%" : "25%",
          }}
        />
        <br />
        <div className="recruiters-container">
          <div className="recruiter-logo">
            <img src="../../../assets/Accenture-logo.png" alt="Recruiter 1" />
          </div>
          <div className="recruiter-logo">
            <img src="../../../assets/Amazon-Logo.png" alt="Recruiter 2" />
          </div>
          <div className="recruiter-logo">
            <img
              src="../../../assets/Ashok-Leyland-logo.png"
              alt="Recruiter 3"
            />
          </div>
          <div className="recruiter-logo">
            <img src="../../../assets/Cisco-logo.png" alt="Recruiter 4" />
          </div>
          <div className="recruiter-logo">
            <img src="../../../assets/Cognizant-Logo.png" alt="Recruiter 5" />
          </div>
          <div className="recruiter-logo">
            <img src="../../../assets/Deloitte-logo.png" alt="Recruiter 6" />
          </div>
          <div className="recruiter-logo">
            <img src="../../../assets/Google-Logo.png" alt="Recruiter 7" />
          </div>

          <div className="recruiter-logo">
            <img src="../../../assets/Infosys_logo.svg.png" alt="Recruiter 9" />
          </div>
          <div className="recruiter-logo">
            <img src="../../../assets/Microsoft-logo.jpg" alt="Recruiter 10" />
          </div>
          <div className="recruiter-logo">
            <img
              src="../../../assets/Saint-Gobain-Logo.png"
              alt="Recruiter 11"
            />
          </div>
          <div className="recruiter-logo">
            <img
              src="../../../assets/Tata_Consultancy_Services-Logo.svg.png"
              alt="Recruiter 12"
            />
          </div>
          <div className="recruiter-logo">
            <img src="../../../assets/Wipro-logo.png" alt="Recruiter 13" />
          </div>
          <div className="recruiter-logo">
            <img src="../../../assets/ibm_logo.png" alt="Recruiter 8" />
          </div>
        </div>
      </div>
      <br />
    </Box>
  );
};

export default Home;
