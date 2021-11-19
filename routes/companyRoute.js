import express from 'express';
const router = express.Router();
import {getCompanys,getCompany,createCompany} from '../controllers/company.js'

router.get('/', getCompanys);
router.get('/:id', getCompany);
router.post('/', createCompany);





export default router;