import express from 'express';
import mongoose from 'mongoose';
import Category from '../models/category.js';



const router = express.Router();


//get list of categories
export const getCategories = async (req, res) => {
    const page = req.query.page;
    const limit = req.query.limit;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    try {


        if (page && limit) {
            const category = await Category.find();
            res.status(200).json(category.slice(startIndex, endIndex));


        }
        else {
            const category = await Category.find();
            res.status(200).json(category);
        }

    }
    catch (error) {
        res.status(404).json({ message: error.message });

    }
}

//get singel categories
export const getCategory = async (req, res) => {
    const { id } = req.params;

    try {
        const category = await Category.findById(id);
        res.status(200).json(category);



    }
    catch (error) {
        res.status(404).json({ message: error.message });

    }
}

//create categories

export const createCategory = async (req, res) => {
    const category = req.body;
    const newCategory = new Category({ ...category, createdAt: new Date().toISOString() });

    try {
        await newCategory.save();
        res.status(201).json(newCategory);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}


//update category
export const updateCategory = async (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Category with this id: ${id}`);

    const updateCategory = { title, _id: id, updatedAt: new Date().toISOString()  };
    await Category.findByIdAndUpdate(id, updateCategory, { new: true });

    res.json(updateCategory);

}

//delete category

export const deleteCategory = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Category with this id: ${id}`);
    await Category.findByIdAndRemove(id);
    res.json({ message: "Category deleted successfully." });

}


