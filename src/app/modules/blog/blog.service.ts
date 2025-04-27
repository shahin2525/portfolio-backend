import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createListingIntoDB = async (payload: TBlog) => {
  const result = await Blog.create(payload);

  return result;
};

export const getAllBlogsFromDB = async () => {
  const result = await Blog.find();
  return result;
};

const getSingleBlogFromDB = async (id: string) => {
  const result = await Blog.findById(id);
  return result;
};
const updateBlogFromDB = async (id: string, payload: Partial<TBlog>) => {
  const result = await Blog.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};
const deleteBlogFromDB = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id);
  return result;
};

export const ListingServices = {
  createListingIntoDB,
  getAllBlogsFromDB,
  getSingleBlogFromDB,
  updateBlogFromDB,
  deleteBlogFromDB,
};
