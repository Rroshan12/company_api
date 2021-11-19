import express from 'express';
import mongoose from 'mongoose';
import Category from '../models/category.js';



const router = express.Router();


//get list of categories
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

//get singel categories
export const getCategory = async(req,res)=>
{
    const {id} =req.params;

    try{
        const category = await Category.findById(id);
        res.status(200).json(category);



    }
    catch(error)
    {
        res.status(404).json({ message: error.message });

    }
}




