import express from 'express';

import {saveContact,allContacts,deleteContact,paginationContact} from "../controllers/contactController.js"
const router = express.Router();
router.post('/saveContact', saveContact);
router.get('/allContacts', allContacts);
router.post('/deleteContact', deleteContact);
router.get('/paginationContact', paginationContact);

export default router;
