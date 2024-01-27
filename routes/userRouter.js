import express from 'express';

import {authorizeUser,saveContact} from "../controllers/userController.js"

const router = express.Router();

router.post('/authUser', authorizeUser);
router.post('/saveContact', saveContact);

export default router;
