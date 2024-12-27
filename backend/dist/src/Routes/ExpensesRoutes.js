"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ExpensesController_1 = require("../controllers/ExpensesController");
const router = (0, express_1.Router)();
router.get('/', ExpensesController_1.getExpensesByCategory);
exports.default = router;
