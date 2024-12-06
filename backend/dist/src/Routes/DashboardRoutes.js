"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DashboardControllers_1 = require("../controllers/DashboardControllers");
const router = (0, express_1.Router)();
router.get('/', DashboardControllers_1.getDashboardMetrics);
exports.default = router;
