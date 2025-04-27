import mongoose, { Schema } from 'mongoose';
import { TBlog } from './blog.interface';

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    image: {
      type: String,
      required: [true, 'Image URL is required'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  },
);

// Create and export the model
export const Blog = mongoose.model<TBlog>('Blog', PostSchema);
