import status from 'http-status';
import AppError from '../../error/appError';
import { IProject } from './project.interface';
import { Project } from './project.model';

const createProjectIntoDB = async (payload: IProject) => {
  const result = await Project.create(payload);

  return result;
};

export const getAllProjectsFromDB = async () => {
  const result = await Project.find();
  return result;
};

const getSingleProjectFromDB = async (id: string) => {
  const projectId = await Project.findById(id);
  if (!projectId) {
    throw new AppError(status.NOT_FOUND, 'project id not found');
  }
  const result = await Project.findById(id);
  return result;
};
const updateProjectFromDB = async (id: string, payload: Partial<IProject>) => {
  const projectId = await Project.findById(id);
  if (!projectId) {
    throw new AppError(status.NOT_FOUND, 'project id not found');
  }
  const result = await Project.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};
const deleteProjectFromDB = async (id: string) => {
  const projectId = await Project.findById(id);
  if (!projectId) {
    throw new AppError(status.NOT_FOUND, 'project id not found');
  }
  const result = await Project.findByIdAndDelete(id);
  return result;
};

export const ProjectServices = {
  createProjectIntoDB,
  getAllProjectsFromDB,
  getSingleProjectFromDB,
  updateProjectFromDB,
  deleteProjectFromDB,
};
