import { RequestHandler } from 'express';

import StatusCodes from 'http-status-codes';
import { ProjectServices } from './project.service';
import {
  createProjectValidationSchema,
  updateProjectValidationSchema,
} from './project.validation';
const createProject: RequestHandler = async (req, res, next) => {
  try {
    const data = req.body;
    const validatedData = createProjectValidationSchema.parse({ body: data });

    // console.log(userData);
    const result = await ProjectServices.createProjectIntoDB(
      validatedData.body,
    );
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'Project created successfully',
      statusCode: StatusCodes.CREATED,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// single landlord
const getAllProjects: RequestHandler = async (req, res, next) => {
  try {
    // console.log(userData);
    const result = await ProjectServices.getAllProjectsFromDB();
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'get all projects data successfully',
      statusCode: StatusCodes.OK,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
// project update
const updateProject: RequestHandler = async (req, res, next) => {
  try {
    const data = req.body;

    const id = req.params.id;
    // console.log(userData);
    const validatedData = updateProjectValidationSchema.parse({ body: data });
    const result = await ProjectServices.updateProjectFromDB(
      id,
      validatedData.body,
    );
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'Project updated successfully',
      statusCode: StatusCodes.OK,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
// delete user

const deleteProject: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    // console.log(userData);
    await ProjectServices.deleteProjectFromDB(id);
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'project deleted successfully',
      statusCode: StatusCodes.OK,
    });
  } catch (error) {
    next(error);
  }
};
const getSingleProject: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;

    const result = await ProjectServices.getSingleProjectFromDB(id);
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'single project retrieve successfully',
      statusCode: StatusCodes.OK,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const ProjectController = {
  createProject,
  updateProject,
  deleteProject,
  getAllProjects,
  getSingleProject,
};
