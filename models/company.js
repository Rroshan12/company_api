import mongoose from 'mongoose';

const companySchema = mongoose.Schema({
    category_id:
        { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
    ,
    title: {type: String,trim:true, required: true },
    image: String,
    description: {type: String},
    status: {type: Boolean, required: true, },
    createdAt: {
        type: Date,
        required: true,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        required: true,
        default: new Date(),
    },
    category_detail: {
        type: Object,

    }







})

var Company = mongoose.model('Company', companySchema);

export default Company;