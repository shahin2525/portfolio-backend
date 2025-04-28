import { z } from 'zod';

// Base Zod schema matching TBlog interface
export const blogSchema = z.object({
  title: z.string().min(1, 'Title cannot be empty').trim(),

  content: z.string().min(1, 'Content cannot be empty'),

  image: z
    .string()
    .url('Must be a valid URL')
    .trim()
    .refine((val) => val.startsWith('http://') || val.startsWith('https://'), {
      message: 'Image must be a web URL',
    }),

  category: z.string().min(1, 'Category cannot be empty').trim(),
});

// Type equivalent to TBlog (inferred from Zod)
export type TBlogZod = z.infer<typeof blogSchema>;

// Extended schemas for different use cases:

// For creation (all fields required)
export const createBlogValidationSchema = z.object({
  body: blogSchema.strict(),
});

// For updates (all fields optional)
export const updateBlogValidationSchema = z.object({
  body: blogSchema.partial().strict(),
});

// For fixed categories (optional enhancement)
const categories = ['technology', 'lifestyle', 'education'] as const;
export const blogWithCategoriesSchema = blogSchema.extend({
  category: z.enum(categories),
});
