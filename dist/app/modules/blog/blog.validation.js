"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogWithCategoriesSchema = exports.updateBlogValidationSchema = exports.createBlogValidationSchema = exports.blogSchema = void 0;
const zod_1 = require("zod");
// Base Zod schema matching TBlog interface
exports.blogSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, 'Title cannot be empty').trim(),
    content: zod_1.z.string().min(1, 'Content cannot be empty'),
    image: zod_1.z
        .string()
        .url('Must be a valid URL')
        .trim()
        .refine((val) => val.startsWith('http://') || val.startsWith('https://'), {
        message: 'Image must be a web URL',
    }),
    category: zod_1.z.string().min(1, 'Category cannot be empty').trim(),
});
// Extended schemas for different use cases:
// For creation (all fields required)
exports.createBlogValidationSchema = zod_1.z.object({
    body: exports.blogSchema.strict(),
});
// For updates (all fields optional)
exports.updateBlogValidationSchema = zod_1.z.object({
    body: exports.blogSchema.partial().strict(),
});
// For fixed categories (optional enhancement)
const categories = ['technology', 'lifestyle', 'education'];
exports.blogWithCategoriesSchema = exports.blogSchema.extend({
    category: zod_1.z.enum(categories),
});
