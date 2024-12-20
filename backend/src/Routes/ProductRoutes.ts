import { Router } from "express";
import { addProduct, getProducts } from "../controllers/ProductController";



const router = Router();

router.get('/',getProducts);
router.post('/',addProduct);

export default router;