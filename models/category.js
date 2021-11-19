import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({

  title: String,
  createdAt: {
    type: Date,
    default: new Date(),
},
updatedAt: {
    type: Date,
    default: new Date(),
},





})

var Category  = mongoose.model('Category', categorySchema);

export default Category ;