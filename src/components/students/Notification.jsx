// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";

// const NotificationDashboard = () => {
//     const [notifications, setNotifications] = useState([]);

//     useEffect(() => {
//         const fetchNotifications = async () => {
//             try {
//                 const response = await axios.get(
//                     "http://localhost:8080/api/recruiters/getadminaccept"
//                 );
//                 setNotifications(response.data);
//             } catch (error) {
//                 console.error(error);
//             }
//         };

//         fetchNotifications();
//     }, []);

//     return (
//         <Container>
//             <h1>Notification Dashboard</h1>
//             {notifications.map((notification) => (
//                 <Card key={notification._id} className="mb-4">
//                     <Card.Body>
//                         <Row className="align-items-center">
//                             <Col xs={12} md={8}>
//                                 <Card.Subtitle className="mb-2 text-muted">
//                                     {notification.companyName}
//                                 </Card.Subtitle>
//                                 <Card.Text>
//                                     Nature of Business:{" "}
//                                     {notification.natureOfBusiness}
//                                 </Card.Text>
//                                 {/* <p>
//                                     Pay Package:{" "}
//                                     {notification.payPackage.grossSalary}
//                                 </p>
//                                 <p>Bond: {notification.payPackage.bond}</p>
//                                 <p>
//                                     Bond Years:{" "}
//                                     {notification.payPackage.bondYears}
//                                 </p> */}
//                             </Col>
//                             <Col
//                                 xs={12}
//                                 md={4}
//                                 className="text-md-right mt-3 mt-md-0"
//                             >
//                                 <Button variant="success">Apply</Button>
//                             </Col>
//                         </Row>
//                     </Card.Body>
//                 </Card>
//             ))}
//         </Container>
//     );
// };

// export default NotificationDashboard;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const NotificationDashboard = () => {
    const [notifications, setNotifications] = useState([]);
    const studentData = JSON.parse(localStorage.getItem("user"));

    const studentId=studentData._id;

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8080/api/recruiters/getadminaccept"
                );
                setNotifications(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchNotifications();
    }, []);

    const handleApply = async (recruiterId) => {
        try {
            console.log(recruiterId);
            await axios.put(
                `http://localhost:8080/api/recruiters/getstudentaccept/${recruiterId}`,
                {studentId} // Pass studentId in the request body
            );
    
            // Refresh notifications or handle application success as needed
        } catch (error) {
            console.error("Error applying:", error);
        }
    };
    

    return (
        <Container>
            <h1>Notification Dashboard</h1>
            {notifications.map((notification) => (
                <Card key={notification._id} className="mb-4">
                    <Card.Body>
                        <Row className="align-items-center">
                            <Col xs={12} md={8}>
                                <Card.Subtitle className="mb-2 text-muted">
                                    {notification.companyName}
                                </Card.Subtitle>
                                <Card.Text>
                                    Nature of Business:{" "}
                                    {notification.natureOfBusiness}
                                </Card.Text>
                                <Card.Text>
                                    Package:{" "}
                                    {notification.payPackage.grossSalary}
                                </Card.Text>
                                <Card.Text>
                                    CGPA:{" "}
                                    {notification.eligibilityCriteria.btechCutoff}
                                </Card.Text>
                                <Card.Text>
                                    Active Backlogs:{" "}
                                    {notification.eligibilityCriteria.maxNonClearedBacklogs}
                                </Card.Text>
                                <Card.Text>
                                    Cleared Backlogs:{" "}
                                    {notification.eligibilityCriteria.maxClearedBacklogs}
                                </Card.Text>
                            </Col>
                            <Col
                                xs={12}
                                md={4}
                                className="text-md-right mt-3 mt-md-0"
                            >
                                <Button
                                    variant="success"
                                    onClick={() =>
                                        handleApply(notification._id)
                                    }
                                >
                                    Apply
                                </Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
};

export default NotificationDashboard;
