"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogServices = exports.getAllBlogsFromDB = void 0;
const http_status_1 = __importDefault(require("http-status"));
const appError_1 = __importDefault(require("../../error/appError"));
const blog_model_1 = require("./blog.model");
const createBlogIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.Blog.create(payload);
    return result;
});
const getAllBlogsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.Blog.find();
    return result;
});
exports.getAllBlogsFromDB = getAllBlogsFromDB;
const getSingleBlogFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const blogId = yield blog_model_1.Blog.findById(id);
    if (!blogId) {
        throw new appError_1.default(http_status_1.default.NOT_FOUND, 'blog id not found');
    }
    const result = yield blog_model_1.Blog.findById(id);
    return result;
});
const updateBlogFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const blogId = yield blog_model_1.Blog.findById(id);
    if (!blogId) {
        throw new appError_1.default(http_status_1.default.NOT_FOUND, 'blog id not found');
    }
    const result = yield blog_model_1.Blog.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteBlogFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const blogId = yield blog_model_1.Blog.findById(id);
    if (!blogId) {
        throw new appError_1.default(http_status_1.default.NOT_FOUND, 'blog id not found');
    }
    const result = yield blog_model_1.Blog.findByIdAndDelete(id);
    return result;
});
exports.BlogServices = {
    createBlogIntoDB,
    getAllBlogsFromDB: exports.getAllBlogsFromDB,
    getSingleBlogFromDB,
    updateBlogFromDB,
    deleteBlogFromDB,
};
