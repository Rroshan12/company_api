import express from 'express';
import mongoose from 'mongoose';

import Company from '../models/company.js'

const router = express.Router();


//get list of companies

export const getCompanys = async(req, res) =>
{
    try{
        const company = await Company.find();
        res.status(200).json(company);

    }
    catch(error)
    {
        res.status(404).json({ message: error.message });

    }
}

//get singel companies

export const getCompany = async(req,res)=>
{
    const {id} =req.params;

    try{
        const company = await Company.findById(id);
        res.status(200).json(company);



    }
    catch(error)
    {
        res.status(404).json({ message: error.message });

    }
}

//create the company

export const createCompany = async(req,res) =>
{
    const company = req.body;
    const newCompany = new Company({...company, createdAt: new Date().toISOString() });

    try{
        await newCompany.save();
        res.status(201).json(newCompany);
    }
    catch(error)
    {
        res.status(409).json({ message: error.message });
    }
}


//update company
export const updateCompany = async( req, res) =>
{
 const {id} = req.params;
 const{title,category_id,description, image, status} = req.body;
 if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Company with this id: ${id}`);

 const updateCompany = {title,category_id,description, image, status, _id:id};
 await Company.findByIdAndUpdate(id, updateCompany, {new: true});

 res.json(updateCompany);

}

//delete Company

export const deleteCompany = async(req, res) =>
{
    const{id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Company with this id: ${id}`);
    await Company.findByIdAndRemove(id);
    res.json({message:"Company deleted successfully."});

}

