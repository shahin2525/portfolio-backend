import { Router } from 'express';
import { BlogRoutes } from '../modules/blog/blog.routes';

const router = Router();

const routesModule = [
  {
    path: '/',
    route: BlogRoutes,
  },

  //   {
  //     path: '/tenants',
  //     route: RequestRoutes,
  //   },
];

routesModule.forEach((route) => router.use(route.path, route.route));
export default router;
