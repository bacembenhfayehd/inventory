import { Router } from "express";
import { getExpensesByCategory } from "../controllers/ExpensesController";

const router = Router();

router.get('/',getExpensesByCategory)

export default router;