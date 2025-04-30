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
exports.ProjectServices = exports.getAllProjectsFromDB = void 0;
const http_status_1 = __importDefault(require("http-status"));
const appError_1 = __importDefault(require("../../error/appError"));
const project_model_1 = require("./project.model");
const createProjectIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.Project.create(payload);
    return result;
});
const getAllProjectsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.Project.find();
    return result;
});
exports.getAllProjectsFromDB = getAllProjectsFromDB;
const getSingleProjectFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const projectId = yield project_model_1.Project.findById(id);
    if (!projectId) {
        throw new appError_1.default(http_status_1.default.NOT_FOUND, 'project id not found');
    }
    const result = yield project_model_1.Project.findById(id);
    return result;
});
const updateProjectFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const projectId = yield project_model_1.Project.findById(id);
    if (!projectId) {
        throw new appError_1.default(http_status_1.default.NOT_FOUND, 'project id not found');
    }
    const result = yield project_model_1.Project.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteProjectFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const projectId = yield project_model_1.Project.findById(id);
    if (!projectId) {
        throw new appError_1.default(http_status_1.default.NOT_FOUND, 'project id not found');
    }
    const result = yield project_model_1.Project.findByIdAndDelete(id);
    return result;
});
exports.ProjectServices = {
    createProjectIntoDB,
    getAllProjectsFromDB: exports.getAllProjectsFromDB,
    getSingleProjectFromDB,
    updateProjectFromDB,
    deleteProjectFromDB,
};
