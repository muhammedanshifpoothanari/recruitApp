import express from "express";

import {
    registerRecruiterController,
    loginRecruiterController,
    changePasswordStudentController,
    updateRecruitRequest,
    updateAdminAcceptRequest,
    updateProfileRecruiterController,
    getProfileRecruiterController,
    getAllRecruiters,
    getStudentIdsByCompany,
    applyToRecruiter,
    getAllAcceptedrecruiters,
    getStudentById,
} from "../controllers/recruiterController.js";

const router = express.Router();

router.post("/recruiterRegister", registerRecruiterController);
router.post("/recruiterLogin", loginRecruiterController);
router.get("/recruiterProfile/:id", getProfileRecruiterController);
router.put("/recruiterProfile/:id", updateProfileRecruiterController);
router.patch("/recruiterRequest/:id", updateRecruitRequest);
router.patch("/adminAcceptRequest/:id", updateAdminAcceptRequest);
// router.post("/students/:studentId/notifications",requestController)
router.get("/getall", getAllRecruiters);
router.get("/getadminaccept", getAllAcceptedrecruiters);
router.put("/getstudentaccept/:id", applyToRecruiter);
router.get("/getstudentsaccept/:id", getStudentIdsByCompany);
router.get("/students/:id", getStudentById);
router.put("/recruiterPassword/:id", changePasswordStudentController);

export default router;
