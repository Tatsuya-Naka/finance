import {z} from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const ReceiptRouter = createTRPCRouter({
    create: protectedProcedure
    .mutation(async({ctx}) => {
        const userId = ctx.session.user.id;
        return ctx.db.receipt.create({
            data: {
                userId: userId
            }
        });
    }),
    
});