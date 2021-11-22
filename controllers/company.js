import express from 'express';
import mongoose from 'mongoose';

import Company from '../models/company.js'
import Category from '../models/category.js';

import dotenv from 'dotenv';

dotenv.config();


const router = express.Router();


//get list of companies

export const getCompanys = async (req, res) => {

    const page = req.query.page;
    const limit = req.query.limit;
    const category_id = req.query.category_id;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const company = await Company.find();
    const inserty = await Category.findById(category_id);

    try {
        if (!category_id) {

            if (page && limit) {
              
                res.status(200).json(company.slice(startIndex, endIndex));


            }
            else {
              
                res.status(200).json(company);

            }

        }
        //get companies with category detail
        else{
            if (!mongoose.Types.ObjectId.isValid(category_id)) return res.status(404).send(`No Category with this id: ${category_id}`);
          
        
            await Company.findOneAndUpdate({category_id:category_id},{category_detail:inserty},{new:true});
            const company = await Company.find();
            res.status(200).json(company.slice(startIndex, endIndex));
        
        }

        await Company.findOneAndUpdate({category_id:category_id},{category_detail:{}},{new:true});







    }
    catch (error) {
        res.status(404).json({ message: error.message });

    }
}

//get singel companies

export const getCompany = async (req, res) => {
    const { id } = req.params;
    const category_id = req.query.category_id;

    try {
        if(!category_id){
            const company = await Company.findById(id);
            res.status(200).json(company);

        }
        //get company with category_detail present
        else{
            if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Company with this id: ${id}`);
            if (!mongoose.Types.ObjectId.isValid(category_id)) return res.status(404).send(`No Category with this id: ${category_id}`);
            const inserty = await Category.findById(category_id);
            const company = await Company.findById(id);
            
            if(company.category_id ==category_id)
            {
                await Company.findOneAndUpdate({category_id:category_id},{category_detail:inserty},{new:true});
                const company = await Company.findById(id);
                res.status(200).json(company);

            }
            else{
                res.json({ message: "provide respetive company id with category id" });

            }
           
            
           
        
        }

        await Company.findOneAndUpdate({category_id:category_id},{category_detail:{}},{new:true});
        





    }
    catch (error) {
        res.status(404).json({ message: error.message });

    }
}

//create the company

export const createCompany = async (req, res) => {
    const company = req.body;
    const newCompany = new Company({ ...company, createdAt: new Date().toISOString() });

    try {
        await newCompany.save();
        res.status(201).json(newCompany);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}


//update company
export const updateCompany = async (req, res) => {
    const { id } = req.params;
    const { title, category_id, description, image, status } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Company with this id: ${id}`);

    const updateCompany = { title, category_id, description, image, status, _id: id, updatedAt: new Date().toISOString()  };
    await Company.findByIdAndUpdate(id, updateCompany, { new: true });

    res.json(updateCompany);

}

//delete Company

export const deleteCompany = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Company with this id: ${id}`);
    await Company.findByIdAndRemove(id);
    res.json({ message: "Company deleted successfully." });

}

