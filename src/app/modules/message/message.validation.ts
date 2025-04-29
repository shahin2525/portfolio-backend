import { z } from 'zod';

export const createContactFormValidationSchema = z.object({
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

// Infer TypeScript type from Zod schema (matches IContactForm)
export type ContactForm = z.infer<typeof createContactFormValidationSchema>;
