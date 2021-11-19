import express from 'express';
const router = express.Router();
import {getCategories,getCategory,createCategory, updateCategory} from '../controllers/category.js'

router.get('/', getCategories);
router.get('/:id', getCategory);
router.post('/', createCategory);
router.put('/:id', updateCategory);



export default router;