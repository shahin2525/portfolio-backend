"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes"));
const errorHandlers_1 = __importDefault(require("./app/middlewares/errorHandlers"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.use(cookieParser());
app.use((0, cors_1.default)({ origin: ['http://localhost:3000'], credentials: true }));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/api/', routes_1.default);
app.use(errorHandlers_1.default);
// not found route
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
app.use((req, res, next) => {
    res.status(404).render('404', { title: 'Page Not Found' });
});
exports.default = app;
