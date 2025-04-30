"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const errorHandler = (err, req, res, next) => {
    res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
        success: false,
        message: (err === null || err === void 0 ? void 0 : err.message) ? err.message : 'validation error',
        statusCode: (err === null || err === void 0 ? void 0 : err.StatusCode) ? err === null || err === void 0 ? void 0 : err.StatusCode : http_status_codes_1.StatusCodes.BAD_REQUEST,
        error: err,
        stack: (err === null || err === void 0 ? void 0 : err.stack) ? err.stack : null,
    });
};
exports.default = errorHandler;
