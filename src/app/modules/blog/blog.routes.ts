import { Router } from 'express';
import { BlogController } from './blog.controller';

const router = Router();

router.put(
  '/blogs/:id',

  BlogController.updateBlog,
);

router.delete(
  '/blogs/:id',

  BlogController.deleteBlog,
);
router.post('/blogs/', BlogController.createBlog);
router.get(
  '/blogs',

  BlogController.getAllBlogs,
);

router.get(
  '/blogs/:id',

  BlogController.getSingleBlog,
);

export const BlogRoutes = router;
