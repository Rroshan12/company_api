import express from 'express';
const router = express.Router();
import {getCompanys,getCompany,createCompany,updateCompany,deleteCompany} from '../controllers/company.js'

router.get('/', getCompanys);
router.get('/:id', getCompany);
router.post('/', createCompany);
router.put('/:id', updateCompany);
router.delete('/:id', deleteCompany);






export default router;