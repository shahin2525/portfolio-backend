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
exports.MessageServices = exports.getAllMessagesFromDB = void 0;
const http_status_1 = __importDefault(require("http-status"));
const appError_1 = __importDefault(require("../../error/appError"));
const message_model_1 = require("./message.model");
const createMessageIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield message_model_1.Message.create(payload);
    return result;
});
const getAllMessagesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield message_model_1.Message.find();
    return result;
});
exports.getAllMessagesFromDB = getAllMessagesFromDB;
const getSingleMessageFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const messageId = yield message_model_1.Message.findById(id);
    if (!messageId) {
        throw new appError_1.default(http_status_1.default.NOT_FOUND, 'message id not found');
    }
    const result = yield message_model_1.Message.findById(id);
    return result;
});
const updateMessageFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const messageId = yield message_model_1.Message.findById(id);
    if (!messageId) {
        throw new appError_1.default(http_status_1.default.NOT_FOUND, 'message id not found');
    }
    const result = yield message_model_1.Message.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteMessageFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const messageId = yield message_model_1.Message.findById(id);
    if (!messageId) {
        throw new appError_1.default(http_status_1.default.NOT_FOUND, 'message id not found');
    }
    const result = yield message_model_1.Message.findByIdAndDelete(id);
    return result;
});
exports.MessageServices = {
    createMessageIntoDB,
    getAllMessagesFromDB: exports.getAllMessagesFromDB,
    getSingleMessageFromDB,
    updateMessageFromDB,
    deleteMessageFromDB,
};
