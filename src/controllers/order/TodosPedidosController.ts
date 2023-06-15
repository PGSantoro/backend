import { Request, Response } from "express";
import { PedidosService } from "../../services/order/TodosPedidosService";

class PedidosController {
    async getPedidos(req: Request, res: Response) {
        const pedidosService = new PedidosService();
        const pedidos = await pedidosService.getPedidos();
        res.json(pedidos);
    }
}

export { PedidosController };