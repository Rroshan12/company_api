import express from 'express';
import mongoose from 'mongoose';

import Company from '../models/company.js'

const router = express.Router();

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