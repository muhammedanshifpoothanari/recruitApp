import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const MatchedStudents = () => {
    const [companies, setCompanies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8080/api/recruiters/getadminaccept"
                );
                setCompanies(response.data);
            } catch (error) {
                console.error("Failed to fetch companies:", error);
            }
        };

        fetchCompanies();
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="container">
            <div className="row mb-4">
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by company name"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
            </div>
            <div className="row">
                {companies.map((company) => (
                    <div className="col-md-12 mb-4" key={company._id}>
                        <CompanyRow company={company} />
                    </div>
                ))}
            </div>
            <Toaster position="top-center" />
        </div>
    );
};

const CompanyRow = ({ company }) => {
    const [showStudents, setShowStudents] = useState(false);
    const [appliedStudentIds, setAppliedStudentIds] = useState([]);
    const [appliedStudents, setAppliedStudents] = useState([]);

    const handleViewStudents = async () => {
        try {
            const response = await axios.get(
                `http://localhost:8080/api/recruiters/getstudentsaccept/${company._id}`
            );
            setAppliedStudentIds(response.data);
            setShowStudents(true);
        } catch (error) {
            console.error("Failed to fetch applied student IDs:", error);
        }
    };

    useEffect(() => {
        const fetchAppliedStudents = async () => {
            try {
                if (appliedStudentIds.length > 0) {
                    const response = await axios.get(
                        `http://localhost:8080/api/students/acceptedstudents/${appliedStudentIds.join(
                            ","
                        )}`
                    );
                    setAppliedStudents(response.data);
                    console.log(response.data);
                }
            } catch (error) {
                console.error("Failed to fetch applied students:", error);
            }
        };

        fetchAppliedStudents();
    }, [appliedStudentIds]);

    const handleClose = () => {
        setShowStudents(false);
        setAppliedStudentIds([]);
    };

    return (
        <div className="card custom-card-width" style={{ maxWidth: "100%" }}>
            <div className="card-body">
                <h3 className="card-title">{company.companyName}</h3>
                <p className="card-text">{company.natureOfBusiness}</p>
                {company.payPackage && (
                    <p className="card-text">
                        Package: {company.payPackage.grossSalary}
                    </p>
                )}
                {!showStudents && (
                    <button
                        className="btn btn-primary"
                        onClick={handleViewStudents}
                    >
                        View Applications
                    </button>
                )}
                {showStudents && (
                    <div>
                        {appliedStudents && appliedStudents.length > 0 ? (
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Username</th>
                                            <th>Email</th>
                                            <th>CGPA</th>
                                            <th>Backlogs</th>
                                            <th>Department</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {appliedStudents.map((student) => (
                                            <tr key={student._id}>
                                                <td>{student.username}</td>
                                                <td>{student.email}</td>
                                                <td>{student.cgpa}</td>
                                                <td>{student.backlogs}</td>
                                                <td>{student.department}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <p>No applied students to display.</p>
                        )}
                        <div className="d-flex justify-content-between">
                            <button
                                className="btn btn-secondary"
                                onClick={handleClose}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <Toaster position="top-center" />
        </div>
    );
};

export default MatchedStudents;
