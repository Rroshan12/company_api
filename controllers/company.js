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