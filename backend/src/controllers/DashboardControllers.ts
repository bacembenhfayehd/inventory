import { Response, Request } from "express";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getDashboardMetrics = async (req:Request,res:Response):Promise<void> => {
    try {

        const popularProducts = await prisma.products.findMany({
            take:15,
            orderBy:{
                stockQuantity:"desc"
            }
        });

        const salesSummary = await prisma.salesSummary.findMany({
            take:5,
            orderBy:{
                date:'desc'
            }
        })

        const purchaseSummary = await prisma.purchaseSummary.findMany({
            take:5,
            orderBy:{
                date:"desc"
            }
        });

        const expenseSummary = await prisma.expenseSummary.findMany({
            take:5,
            orderBy:{
                date:'desc'
            }
        })

        const expenseByCategorySummaryRaw = await prisma.expenseByCategory.findMany({
            take:5,
            orderBy:{
                date:'desc'
            }
        })

        const expenseByCategorySummary = expenseByCategorySummaryRaw.map(
            (item) => ({
                ...item,
                amount:item?.amount.toString() || "0"}))


                res.json({
                    popularProducts,
                    purchaseSummary,
                    salesSummary,
                    expenseSummary,
                    expenseByCategorySummary,
                    
                })


        
    } catch (error:any) {
        console.error(error)
        res.status(500).json({error:'Error on getting dashboard data'})
        
    }
}