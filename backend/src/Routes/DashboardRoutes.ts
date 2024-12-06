import { Router } from "express";

import { getDashboardMetrics } from "../controllers/DashboardControllers";


const router = Router();

router.get('/',getDashboardMetrics)



export default router;