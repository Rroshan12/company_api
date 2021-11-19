import express from 'express';
const router = express.Router();
import {getCompanys} from '../controllers/company.js'

router.get('/', getCompanys);




export default router;