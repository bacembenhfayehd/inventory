import { Request,Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const getProducts = async (req:Request,res:Response):Promise<void> => {
    try {

        const search = req.query.search?.toString();
        const products = await prisma.products.findMany({
            where:{
                name:{
                    contains:search
                }
            }
        })

        res.json(products);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({error:'error retrieving products'})
        
    }
}

export const addProduct = async (req:Request,res:Response):Promise<void> => {
    try {

        const {productId, rating,name,price,stockQuantity} = req.body;
        const newProduct = await prisma.products.create({
            data:{
                productId,
                name,
                price,
                rating,
                stockQuantity

            }
        })
        res.status(201).json(newProduct)
    } catch (error) {

        console.error(error);
        res.status(500).json({error:'error to add a new product'})
        
    }
}