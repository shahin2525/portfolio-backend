import { RequestHandler } from 'express';

import StatusCodes from 'http-status-codes';
import { BlogServices } from './blog.service';
const createBlog: RequestHandler = async (req, res, next) => {
  try {
    const data = req.body;

    // console.log(userData);
    const result = await BlogServices.createBlogIntoDB(data);
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'Blog created successfully',
      statusCode: StatusCodes.CREATED,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// single landlord
const getAllBlogs: RequestHandler = async (req, res, next) => {
  try {
    // console.log(userData);
    const result = await BlogServices.getAllBlogsFromDB();
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'get all blogs data successfully',
      statusCode: StatusCodes.OK,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
// blog update
const updateBlog: RequestHandler = async (req, res, next) => {
  try {
    const data = req.body;

    const id = req.params.id;
    // console.log(userData);
    const result = await BlogServices.updateBlogFromDB(id, data);
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'Blog updated successfully',
      statusCode: StatusCodes.OK,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
// delete user

const deleteBlog: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    // console.log(userData);
    await BlogServices.deleteBlogFromDB(id);
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'blog deleted successfully',
      statusCode: StatusCodes.OK,
    });
  } catch (error) {
    next(error);
  }
};
const getSingleBlog: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;

    const result = await BlogServices.getSingleBlogFromDB(id);
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'single blog retrieve successfully',
      statusCode: StatusCodes.OK,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const ListingController = {
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
  getSingleBlog,
};
