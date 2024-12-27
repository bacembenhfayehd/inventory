import { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getExpensesByCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const expenses = await prisma.expenseByCategory.findMany({
      orderBy: {
        date: "desc",
      },
    });

    const expensesCategory = expenses.map((item) => ({
      ...item,
      amount: item.amount.toString(),
    }));

    res.status(200).json(expensesCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "error on retrivieng expenses from db" });
  }
};
