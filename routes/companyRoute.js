import express from 'express';
const router = express.Router();
import {getCompanys,getCompany,createCompany,updateCompany,deleteCompany} from '../controllers/company.js';
import auth from "../middleware/auth.js";


router.get('/', auth, getCompanys);
router.get('/:id',auth, getCompany);
router.post('/', auth, createCompany);
router.put('/:id', auth, updateCompany);
router.delete('/:id',auth, deleteCompany);






export default router;