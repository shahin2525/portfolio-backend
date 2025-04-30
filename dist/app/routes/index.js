"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blog_routes_1 = require("../modules/blog/blog.routes");
const project_routes_1 = require("../modules/project/project.routes");
const message_routes_1 = require("../modules/message/message.routes");
const router = (0, express_1.Router)();
const routesModule = [
    {
        path: '/',
        route: blog_routes_1.BlogRoutes,
    },
    {
        path: '/',
        route: project_routes_1.ProjectRoutes,
    },
    {
        path: '/',
        route: message_routes_1.MessageRoutes,
    },
];
routesModule.forEach((route) => router.use(route.path, route.route));
exports.default = router;
