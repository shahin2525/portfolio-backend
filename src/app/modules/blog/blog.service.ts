import status from 'http-status';
import AppError from '../../error/appError';
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogIntoDB = async (payload: TBlog) => {
  const result = await Blog.create(payload);

  return result;
};

export const getAllBlogsFromDB = async () => {
  const result = await Blog.find();
  return result;
};

const getSingleBlogFromDB = async (id: string) => {
  const blogId = await Blog.findById(id);
  if (!blogId) {
    throw new AppError(status.NOT_FOUND, 'blog id not found');
  }
  const result = await Blog.findById(id);
  return result;
};
const updateBlogFromDB = async (id: string, payload: Partial<TBlog>) => {
  const blogId = await Blog.findById(id);
  if (!blogId) {
    throw new AppError(status.NOT_FOUND, 'blog id not found');
  }
  const result = await Blog.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};
const deleteBlogFromDB = async (id: string) => {
  const blogId = await Blog.findById(id);
  if (!blogId) {
    throw new AppError(status.NOT_FOUND, 'blog id not found');
  }
  const result = await Blog.findByIdAndDelete(id);
  return result;
};

export const BlogServices = {
  createBlogIntoDB,
  getAllBlogsFromDB,
  getSingleBlogFromDB,
  updateBlogFromDB,
  deleteBlogFromDB,
};
