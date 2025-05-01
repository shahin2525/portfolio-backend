import { Schema, model } from 'mongoose';
import { IProject } from './project.interface';

// Mongoose Schema
const ProjectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      minlength: [3, 'Title must be at least 3 characters'],
      maxlength: [100, 'Title cannot exceed 100 characters'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      minlength: [50, 'Description must be at least 50 characters'],
    },
    shortDescription: {
      type: String,
      maxlength: [160, 'Short description cannot exceed 160 characters'],
    },
    images: {
      type: [String],
      required: [true, 'Image URL is required'],
      validate: {
        validator: (v: string) => /\.(jpe?g|png|webp|gif|svg)$/i.test(v),
        message:
          'Image must be a URL ending with .jpg, .png, .webp, .gif, or .svg',
      },
    },
    liveLink: {
      type: String,
      required: [true, 'Live link is required'],
      validate: {
        validator: (v: string) => /^https?:\/\/.+/i.test(v),
        message: 'Live link must start with http:// or https://',
      },
    },
    technologies: {
      type: [String],
      required: [true, 'At least one technology is required'],
      validate: {
        validator: (arr: string[]) => arr.length > 0,
        message: 'Technologies array cannot be empty',
      },
    },
    features: {
      type: [String],
      default: undefined, // Better handling for empty arrays
    },
    githubRepo: {
      type: String,
      validate: {
        validator: (v: string) =>
          v ? /^https?:\/\/github\.com\/.+/i.test(v) : true,
        message: 'GitHub repo must be a valid GitHub URL',
      },
    },
    my_role: {
      type: String,
      enum: {
        values: [
          'full stack developer',
          'frontend developer',
          'backend developer',
        ],
        message: 'Status must be either active, archived, or in-progress',
      },
      default: 'frontend developer',
    },
    status: {
      type: String,
      enum: {
        values: ['active', 'archived', 'in-progress'],
        message: 'Status must be either active, archived, or in-progress',
      },
      default: 'active',
    },
  },
  {
    timestamps: true, // Auto-add createdAt and updatedAt
    versionKey: false, // Disable __v field
  },
);

// Indexes for better query performance
ProjectSchema.index({ title: 'text', status: 1 });

// Model
export const Project = model<IProject>('Project', ProjectSchema);
