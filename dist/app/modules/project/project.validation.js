"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProjectValidationSchema = exports.createProjectValidationSchema = void 0;
const zod_1 = require("zod");
// Base schema with all fields (strict for creation)
const baseProjectSchema = zod_1.z
    .object({
    title: zod_1.z.string().min(3, 'Title must be at least 3 characters').max(100),
    description: zod_1.z
        .string()
        .min(50, 'Description must be at least 50 characters'),
    shortDescription: zod_1.z.string().max(160).optional(),
    image: zod_1.z
        .string()
        .url('Must be a valid URL')
        .regex(/\.(jpg|jpeg|png|webp|gif|svg)$/i, 'Must be an image URL (jpg, png, webp, gif, svg)'),
    liveLink: zod_1.z.string().url('Must be a valid URL'),
    technologies: zod_1.z
        .array(zod_1.z.string().min(1))
        .nonempty('At least one technology is required'),
    features: zod_1.z.array(zod_1.z.string()).optional(),
    githubRepo: zod_1.z.string().url('Must be a valid GitHub URL').optional(),
    status: zod_1.z.enum(['active', 'archived', 'in-progress']).optional(),
})
    .strict();
// Schema for CREATE (all required fields except optional ones)
exports.createProjectValidationSchema = zod_1.z.object({
    body: baseProjectSchema,
});
// Schema for UPDATE (all fields optional, but with same validations when provided)
exports.updateProjectValidationSchema = zod_1.z.object({
    body: baseProjectSchema
        .partial()
        .strict()
        .refine((data) => Object.keys(data).length > 0, {
        message: 'At least one field must be provided for update',
    }),
});
