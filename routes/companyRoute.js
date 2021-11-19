import express from 'express';
const router = express.Router();
import {getCompanys,getCompany,createCompany,updateCompany} from '../controllers/company.js'

router.get('/', getCompanys);
router.get('/:id', getCompany);
router.post('/', createCompany);
router.put('/:id', updateCompany);






export default router;