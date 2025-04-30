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
exports.BlogController = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const blog_service_1 = require("./blog.service");
const blog_validation_1 = require("./blog.validation");
const createBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const validatedData = blog_validation_1.createBlogValidationSchema.parse({ body: data });
        // console.log(userData);
        const result = yield blog_service_1.BlogServices.createBlogIntoDB(validatedData.body);
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: 'Blog created successfully',
            statusCode: http_status_codes_1.default.CREATED,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// single landlord
const getAllBlogs = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log(userData);
        const result = yield blog_service_1.BlogServices.getAllBlogsFromDB();
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: 'get all blogs data successfully',
            statusCode: http_status_codes_1.default.OK,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// blog update
const updateBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const id = req.params.id;
        // console.log(userData);
        const validatedData = blog_validation_1.updateBlogValidationSchema.parse({ body: data });
        const result = yield blog_service_1.BlogServices.updateBlogFromDB(id, validatedData.body);
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: 'Blog updated successfully',
            statusCode: http_status_codes_1.default.OK,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// delete user
const deleteBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        // console.log(userData);
        yield blog_service_1.BlogServices.deleteBlogFromDB(id);
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: 'blog deleted successfully',
            statusCode: http_status_codes_1.default.OK,
        });
    }
    catch (error) {
        next(error);
    }
});
const getSingleBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield blog_service_1.BlogServices.getSingleBlogFromDB(id);
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: 'single blog retrieve successfully',
            statusCode: http_status_codes_1.default.OK,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.BlogController = {
    createBlog,
    updateBlog,
    deleteBlog,
    getAllBlogs,
    getSingleBlog,
};
