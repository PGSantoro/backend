import prismaClient from "../../prisma";

interface OrderRequest {
    id: string;
    prato: string;
    mesa: string;
}

class CreateOrderService {
    async execute({ id, prato, mesa }: OrderRequest) {
        // Create a new order using Prisma client
        const order = await prismaClient.order.create({
            data: {
                id: IdleDeadline,
                prato: prato,
                mesa: mesa
            }
        });

        return order
    }
}

export { CreateOrderService }
