import express from "express";

import {
    registerStudentController,
    loginStudentController,
    getProfileStudentController,
    updateProfileStudentController,
    getStudentByIdController,
    changePasswordStudentController,
    addProfileDetailsStudentController,
    getallStudentsController
} from "../controllers/studentController.js";

const router = express.Router();

// Create a router instance

// Student registration route
router.post("/studentRegister", registerStudentController);

// Student login route
router.post("/studentLogin", loginStudentController);
router.get("/acceptedstudents/:ids",getStudentByIdController);

// Student profile route
router.get("/StudentProfile/:id", getProfileStudentController);
router.put("/StudentProfile/:id", updateProfileStudentController);
// Route for changing password
router.put("/StudentPassword/:id", changePasswordStudentController);
router.get("/get-all-students",getallStudentsController);

// Route for adding other profile details
router.put("/StudentProfile/details/:id", addProfileDetailsStudentController);

export default router;
