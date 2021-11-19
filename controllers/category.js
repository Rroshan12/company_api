import express from 'express';
import mongoose from 'mongoose';
import Category from '../models/category.js';



const router = express.Router();

export const getCategories = async(req, res) =>
{
    try{
        const category = await Category.find();
        res.status(200).json(category);

    }
    catch(error)
    {
        res.status(404).json({ message: error.message });

    }
}