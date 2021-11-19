import express from 'express';
const router = express.Router();
import {getCategories} from '../controllers/category.js'

router.get('/', getCategories);




export default router;