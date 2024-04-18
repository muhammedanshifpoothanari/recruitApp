import Recruiter from "../models/recruiterModel.js";

import students from "../models/studentModel.js";

export const registerRecruiterController = async (req, res, next) => {
    console.log(req.body);
    try {
        const {
            companyName,
            password,
            natureOfBusiness,
            homePage,
            contactPerson,
            designation,
            fax,
            telephoneNo,
            email,
            jobDescription,
            address,
            eligibilityCriteria,
            branchesEligible,
            payPackage,
            recruitmentSchedule,
            selectionProcedure,
        } = req.body;

        // Create a new recruiter instance
        const recruiter = new Recruiter({
            companyName,
            password,
            natureOfBusiness,
            homePage,
            contactPerson,
            designation,
            fax,
            telephoneNo,
            email,
            jobDescription,
            address,
            eligibilityCriteria,
            branchesEligible,
            payPackage,
            recruitmentSchedule,
            selectionProcedure,
        });

        // Save the recruiter to the database
        await recruiter.save();

        res.status(201).json({ message: "Recruiter registered successfully" });
    } catch (error) {
        next(error);
    }
};

export const loginRecruiterController = async (req, res) => {
    try {
        const recruiter = await Recruiter.findOne({ email: req.body.email });
        if (!recruiter) {
            return next(createError(404, "no recruiter with this email"));
        }
        if (req.body.password !== recruiter.password) {
            return res.status(401).json({ error: "Invalid password" });
        }

        res.status(200).json({ message: "Login successful", recruiter });
    } catch (error) {}
};

export const changePasswordStudentController = async (req, res, next) => {
    try {
        const recruiterID = req.params.id;
        const { newPassword } = req.body;

        await Recruiter.findByIdAndUpdate(recruiterID, {
            password: newPassword,
        });

        res.status(200).json({ message: "Password changed successfully" });
    } catch (err) {
        console.log(err);
        next(err);
        // res.status(500).json({ error: "An error occurred" });
    }
};

export const getProfileRecruiterController = async (req, res) => {
    try {
        const recruiterID = req.params.id;

        // Find the student with the provided student ID
        const recruiter = await Recruiter.findById(recruiterID);
        if (!recruiter) {
            return res.status(404).json({ error: "Student not found" });
        }

        res.status(200).json(recruiter);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
    }
};

export const updateProfileRecruiterController = async (req, res) => {
    try {
        const recruiterID = req.params.id;
        const {
            companyName,
            natureOfBusiness,
            homePage,
            contactPerson,
            designation,
            fax,
            telephoneNo,
            email,
            jobDescription,
            address,
            eligibilityCriteria,
            branchesEligible,
            payPackage,
            recruitmentSchedule,
            selectionProcedure,
        } = req.body;
        console.log(recruiterID, req.body);

        // Find the student with the provided student ID
        await Recruiter.findByIdAndUpdate(recruiterID, {
            companyName: companyName,
            natureOfBusiness: natureOfBusiness,
            homePage: homePage,
            contactPerson: contactPerson,
            designation: designation,
            email: email,
            telephoneNo: telephoneNo,
            fax: fax,
            jobDescription: jobDescription,
            address: address,
            eligibilityCriteria: eligibilityCriteria,
            branchesEligible: branchesEligible,
            payPackage: payPackage,
            recruitmentSchedule: recruitmentSchedule,
            selectionProcedure: selectionProcedure,
        });

        // Update the student profile

        // Save the updated student profile

        res.status(200).json({
            message: "Profile updated successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
    }
};
export const updateRecruitRequest = async (req, res) => {
    const recruiterID = req.params.id;
    const { action } = req.body;
    console.log(action);
    try {
        // Find the recruiter by ID
        const recruiter = await Recruiter.findByIdAndUpdate(recruiterID, {
            recruitRequest: action,
        });

        if (!recruiter) {
            return res.status(404).json({ error: "Recruiter not found" });
        }

        // Update the recruitRequest field based on the action
        // recruiter.recruitRequest = action;

        // Save the updated recruiter
        // await recruiter.save();

        return res.json({ message: "Recruit request updated successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server error" });
    }
};
export const updateAdminAcceptRequest = async (req, res) => {
    const recruiterID = req.params.id;
    const { action1, action2 } = req.body;

    try {
        // Find the recruiter by ID
        const recruiter = await Recruiter.findByIdAndUpdate(recruiterID, {
            recruitRequest: action1,
            adminAccept: action2,
        });

        if (!recruiter) {
            return res.status(404).json({ error: "Recruiter not found" });
        }

        // Update the recruitRequest field based on the action

        return res.json({ message: "Recruit request updated successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server error" });
    }
};

export const getAllRecruiters = async (req, res) => {
    try {
        const recruiters = await Recruiter.find({ recruitRequest: true });
        res.json(recruiters);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};
export const getAllAcceptedrecruiters = async (req, res) => {
    try {
        const recruiters = await Recruiter.find({ adminAccept: true });
        res.json(recruiters);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};

// Get a specific student by ID
export const getStudentById = async (req, res) => {
    const studentId = req.params.id;
    try {
        const student = await students.findById(studentId);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json(student);
    } catch (error) {
        console.error(`Failed to fetch student with ID ${studentId}:`, error);
        res.status(500).json({ message: "Failed to fetch student" });
    }
};

export const applyToRecruiter = async (req, res) => {
    const studentId = req.body.studentId;
    const recruiterId = req.params.id;
    console.log(studentId, recruiterId);

    try {
        const recruiter = await Recruiter.findByIdAndUpdate(
            recruiterId,
            { $addToSet: { appliedStudents: studentId } },
            { new: true }
        );

        if (!recruiter) {
            return res.status(404).json({ message: "Recruiter not found" });
        }

        return res.json({ message: "Student applied successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};

// Controller function to get student IDs who applied to a specific company
export const getStudentIdsByCompany = async (req, res) => {
    const companyId = req.params.id;

    try {
        // Find the recruiter by ID
        const recruiter = await Recruiter.findById(companyId);

        if (!recruiter) {
            return res.status(404).json({ error: "Recruiter not found" });
        }

        // Fetch the applied student IDs
        const appliedStudentIds = recruiter.appliedStudents;
        console.log(appliedStudentIds);

        res.json(appliedStudentIds);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};
