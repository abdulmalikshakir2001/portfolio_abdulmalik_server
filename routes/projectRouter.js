import express from 'express';

import {uploadProject,allProjects} from "../controllers/projectController.js"

const router = express.Router();

router.post('/uploadProject', uploadProject);
router.get('/allProjects', allProjects);

export default router;
