import { z } from 'zod';

// Base schema with all fields (strict for creation)
const baseProjectSchema = z
  .object({
    title: z.string().min(3, 'Title must be at least 3 characters').max(100),
    description: z
      .string()
      .min(50, 'Description must be at least 50 characters'),
    shortDescription: z.string().max(160).optional(),
    image: z
      .string()
      .url('Must be a valid URL')
      .regex(
        /\.(jpg|jpeg|png|webp|gif|svg)$/i,
        'Must be an image URL (jpg, png, webp, gif, svg)',
      ),
    liveLink: z.string().url('Must be a valid URL'),
    technologies: z
      .array(z.string().min(1))
      .nonempty('At least one technology is required'),
    features: z.array(z.string()).optional(),
    githubRepo: z.string().url('Must be a valid GitHub URL').optional(),
    status: z.enum(['active', 'archived', 'in-progress']).optional(),
  })
  .strict();

// Schema for CREATE (all required fields except optional ones)
export const createProjectValidationSchema = z.object({
  body: baseProjectSchema,
});

// Schema for UPDATE (all fields optional, but with same validations when provided)
export const updateProjectValidationSchema = z.object({
  body: baseProjectSchema
    .partial()
    .strict()
    .refine((data) => Object.keys(data).length > 0, {
      message: 'At least one field must be provided for update',
    }),
});

// Type definitions
export type IProject = z.infer<typeof baseProjectSchema>;
export type CreateProjectInput = z.infer<typeof createProjectValidationSchema>;
export type UpdateProjectInput = z.infer<typeof updateProjectValidationSchema>;
