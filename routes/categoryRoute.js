import express from 'express';
const router = express.Router();
import {getCategories,getCategory,createCategory, updateCategory, deleteCategory} from '../controllers/category.js'
import auth from "../middleware/auth.js";

router.get('/', auth, getCategories);
router.get('/:id',auth, getCategory);
router.post('/',auth, createCategory);
router.put('/:id',auth, updateCategory);
router.delete('/:id',auth, deleteCategory);



export default router;