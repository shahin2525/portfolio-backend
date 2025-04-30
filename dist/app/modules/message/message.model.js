"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const mongoose_1 = require("mongoose");
// Create the schema
const ContactFormSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true, // Adds createdAt and updatedAt automatically
});
// Create and export the model
exports.Message = (0, mongoose_1.model)('Message', ContactFormSchema);
