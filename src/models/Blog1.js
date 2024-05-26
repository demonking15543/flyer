// models/Blog.js
import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ['Technology', 'Finance', 'Politics'],  // Restrict values to the predefined categories

  },
  description: {
    type: String,
  },

});


const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  category:{
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }

});

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
