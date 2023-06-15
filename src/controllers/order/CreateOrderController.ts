import { Request, response, Response } from "express";
import { CreateOrderService } from "../../services/order/CreateOrderService";

class CreateOrderController {
    async handle(req: Request, res: Response) {
        const { id, prato, mesa } = req.body

        const createOrderService = new CreateOrderService();
        const order = await createOrderService.execute({
            id, prato, mesa
        });
        return res.json(order);
    }
}
export { CreateOrderController }