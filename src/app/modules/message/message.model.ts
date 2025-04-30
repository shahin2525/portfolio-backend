import { model, Schema } from 'mongoose';
import { TMessage } from './message.interface';

// Create the schema
const ContactFormSchema = new Schema<TMessage>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [
        /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/,
        'Please fill a valid email address',
      ],
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      maxlength: [1000, 'Message cannot exceed 1000 characters'],
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt automatically
  },
);

// Create and export the model
export const Message = model<TMessage>('Message', ContactFormSchema);
