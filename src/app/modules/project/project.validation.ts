import { z } from 'zod';

// Base schema with all fields (strict for creation)
// const baseProjectSchema = z
//   .object({
//     title: z.string().min(3, 'Title must be at least 3 characters').max(100),
//     description: z
//       .string()
//       .min(50, 'Description must be at least 50 characters'),
//     shortDescription: z.string().max(160).optional(),
//     images: z.array(z.string().min(1)).url('Must be a valid URL')
//       .regex(
//         /\.(jpg|jpeg|png|webp|gif|svg)$/i,
//         'Must be an image URL (jpg, png, webp, gif, svg)',
//       ),
//     liveLink: z.string().url('Must be a valid URL'),
//     technologies: z
//       .array(z.string().min(1))
//       .nonempty('At least one technology is required'),
//     features: z.array(z.string()).optional(),
//     githubRepo: z.string().url('Must be a valid GitHub URL').optional(),
//     status: z.enum(['active', 'archived', 'in-progress']).optional(),
//   })
//   .strict();

export const baseProjectSchema = z
  .object({
    title: z
      .string()
      .min(3, 'Title must be at least 3 characters')
      .max(100, 'Title cannot exceed 100 characters'),

    description: z
      .string()
      .min(50, 'Description must be at least 50 characters'),

    shortDescription: z
      .string()
      .max(160, 'Short description cannot exceed 160 characters')
      .optional(),

    images: z
      .array(
        z
          .string()
          .url('Must be a valid URL')
          .regex(
            /\.(jpg|jpeg|png|webp|gif|svg)$/i,
            'Only image URLs are allowed (jpg, png, webp, gif, svg)',
          ),
      )
      .min(1, 'At least one image is required'),

    liveLink: z.string().url('Must be a valid URL'),

    technologies: z
      .array(z.string().min(1, 'Technology name cannot be empty'))
      .min(1, 'At least one technology is required'),

    features: z
      .array(z.string().min(1, 'Feature description cannot be empty'))
      .optional(),

    githubRepo: z
      .string()
      .url('Must be a valid GitHub URL')
      .refine((url) => url.includes('github.com'), {
        message: 'Must be a GitHub repository URL',
      }),

    my_role: z.enum([
      'full stack developer',
      'frontend developer',
      'backend developer',
    ]),

    status: z.enum(['active', 'archived', 'in-progress']).optional(),
    challengesFaced: z
      .string()
      .max(1000, 'Challenges section cannot exceed 1000 characters')
      .optional(),

    futurePlan: z
      .string()
      .max(1000, 'Future plan cannot exceed 1000 characters')
      .optional(),

    createdAt: z.coerce.date().optional(),

    updatedAt: z.coerce.date().optional(),
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
