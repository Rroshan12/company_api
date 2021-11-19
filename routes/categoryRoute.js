import express from 'express';
const router = express.Router();
import {getCategories,getCategory,createCategory} from '../controllers/category.js'

router.get('/', getCategories);
router.get('/:id', getCategory);
router.post('/', createCategory);




export default router;