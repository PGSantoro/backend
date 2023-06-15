import { Request, Response } from "express";
import { PedidosService } from "../../services/order/PedidoMesaService";

class PedidosMesaController {
    async getPedidoPorMesa(req: Request, res: Response) {
        const { mesa } = req.params;

        const pedidosService = new PedidosService();
        const pedido = await pedidosService.getPedidoPorMesa(Number(mesa));

        res.json(pedido);
    }
}

export { PedidosMesaController };