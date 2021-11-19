import express from 'express';
const router = express.Router();
import {getCompanys,getCompany} from '../controllers/company.js'

router.get('/', getCompanys);
router.get('/:id', getCompany);





export default router;