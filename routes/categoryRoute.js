import express from 'express';
const router = express.Router();
import {getCategories,getCategory} from '../controllers/category.js'

router.get('/', getCategories);
router.get('/:id', getCategory);




export default router;