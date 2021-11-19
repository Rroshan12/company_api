import mongoose from 'mongoose';

const companySchema = mongoose.Schema({
    category_id:[
        {type: mongoose.Schema.Types.ObjectId, ref: 'Category'}
      ],
  title: String,
  image: String,
  descrpition: String,
  status: Boolean,
  createdAt: {
    type: Date,
    default: new Date(),
},
updatedAt: {
    type: Date,
    default: new Date(),
},





})

var Company = mongoose.model('Company', companySchema);

export default Company;