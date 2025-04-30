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
exports.MessageController = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const message_service_1 = require("./message.service");
const message_validation_1 = require("./message.validation");
const createMessage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const validatedData = message_validation_1.createMessageValidationSchema.parse(data);
        // console.log(userData);
        const result = yield message_service_1.MessageServices.createMessageIntoDB(validatedData);
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: 'Message created successfully',
            statusCode: http_status_codes_1.default.CREATED,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// single landlord
const getAllMessages = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log(userData);
        const result = yield message_service_1.MessageServices.getAllMessagesFromDB();
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: 'get all messages data successfully',
            statusCode: http_status_codes_1.default.OK,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// message update
const updateMessage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const id = req.params.id;
        // console.log(userData);
        const validatedData = message_validation_1.updateMessageValidationSchema.parse(data);
        const result = yield message_service_1.MessageServices.updateMessageFromDB(id, validatedData);
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: 'Message updated successfully',
            statusCode: http_status_codes_1.default.OK,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// delete user
const deleteMessage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        // console.log(userData);
        yield message_service_1.MessageServices.deleteMessageFromDB(id);
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: 'message deleted successfully',
            statusCode: http_status_codes_1.default.OK,
        });
    }
    catch (error) {
        next(error);
    }
});
const getSingleMessage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield message_service_1.MessageServices.getSingleMessageFromDB(id);
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: 'single message retrieve successfully',
            statusCode: http_status_codes_1.default.OK,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.MessageController = {
    createMessage,
    updateMessage,
    deleteMessage,
    getAllMessages,
    getSingleMessage,
};
