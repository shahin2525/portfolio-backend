import { Router } from 'express';
import { BlogRoutes } from '../modules/blog/blog.routes';
import { ProjectRoutes } from '../modules/project/project.routes';

const router = Router();

const routesModule = [
  {
    path: '/',
    route: BlogRoutes,
  },

  {
    path: '/',
    route: ProjectRoutes,
  },
];

routesModule.forEach((route) => router.use(route.path, route.route));
export default router;
