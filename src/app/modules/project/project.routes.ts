import { Router } from 'express';
import { ProjectController } from './project.controller';

const router = Router();

router.post(
  '/projects/:id',

  ProjectController.updateProject,
);

router.delete(
  '/projects/:id',

  ProjectController.deleteProject,
);
router.post('/projects/', ProjectController.createProject);
router.get(
  '/projects',

  ProjectController.getAllProjects,
);

router.get(
  '/projects/:id',

  ProjectController.getSingleProject,
);

export const ProjectRoutes = router;
