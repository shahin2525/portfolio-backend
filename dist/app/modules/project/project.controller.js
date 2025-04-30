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
exports.ProjectController = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const project_service_1 = require("./project.service");
const project_validation_1 = require("./project.validation");
const createProject = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const validatedData = project_validation_1.createProjectValidationSchema.parse({ body: data });
        // console.log(userData);
        const result = yield project_service_1.ProjectServices.createProjectIntoDB(validatedData.body);
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: 'Project created successfully',
            statusCode: http_status_codes_1.default.CREATED,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// single landlord
const getAllProjects = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log(userData);
        const result = yield project_service_1.ProjectServices.getAllProjectsFromDB();
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: 'get all projects data successfully',
            statusCode: http_status_codes_1.default.OK,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// project update
const updateProject = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const id = req.params.id;
        // console.log(userData);
        const validatedData = project_validation_1.updateProjectValidationSchema.parse({ body: data });
        const result = yield project_service_1.ProjectServices.updateProjectFromDB(id, validatedData.body);
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: 'Project updated successfully',
            statusCode: http_status_codes_1.default.OK,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// delete user
const deleteProject = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        // console.log(userData);
        yield project_service_1.ProjectServices.deleteProjectFromDB(id);
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: 'project deleted successfully',
            statusCode: http_status_codes_1.default.OK,
        });
    }
    catch (error) {
        next(error);
    }
});
const getSingleProject = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield project_service_1.ProjectServices.getSingleProjectFromDB(id);
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: 'single project retrieve successfully',
            statusCode: http_status_codes_1.default.OK,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.ProjectController = {
    createProject,
    updateProject,
    deleteProject,
    getAllProjects,
    getSingleProject,
};
