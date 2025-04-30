import { z } from 'zod';

// Base schema with strict validation (for CREATE)
export const createMessageValidationSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' })
    .max(100, { message: 'Name cannot exceed 100 characters' })
    .trim(),

  email: z
    .string()
    .email({ message: 'Please enter a valid email address' })
    .trim()
    .toLowerCase()
    .max(100, { message: 'Email cannot exceed 100 characters' }),

  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters long' })
    .max(1000, { message: 'Message cannot exceed 1000 characters' })
    .trim(),
});

// Update schema (all fields optional, but validated if provided)
export const updateMessageValidationSchema = createMessageValidationSchema
  .partial()
  .refine(
    (data) => {
      // At least one field should be provided for updates
      return Object.keys(data).length > 0;
    },
    {
      message: 'At least one field must be provided for update',
      path: ['name', 'email', 'message'], // Shows error at root level
    },
  );

// Infer TypeScript types
export type CreateContactForm = z.infer<typeof createMessageValidationSchema>;
export type UpdateContactForm = z.infer<typeof updateMessageValidationSchema>;
