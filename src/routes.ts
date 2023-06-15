import { Router, Request, Response } from "express";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { CardapioController } from "./controllers/menu/CardapioController";
import { PedidosController } from "./controllers/order/TodosPedidosController";
import { NewPedidoController } from "./controllers/order/NovoPedidoController";
import { PedidosMesaController } from "./controllers/order/PedidoMesaController";
import { PagamentoComandaController } from "./controllers/comanda/EfetuarPagamentoController";
import { ComandaController } from "./controllers/comanda/ComandasPagasController";
import { ReservaController } from "./controllers/wait/ReservaController";


const router = Router();
const cardapioController = new CardapioController();
const pedidosController = new PedidosController();
const newPedidoController = new NewPedidoController();
const pedidosMesaController = new PedidosMesaController();
const pagamentoComandaController = new PagamentoComandaController();
const comandaController = new ComandaController();
const reservaController = new ReservaController();




//Rotas User ------------
router.post('/appetito/userinsert', new CreateUserController().handle);
router.post('/appetito/login', new AuthUserController().handle);

//Rotas Cardapio ------------
router.get('/appetito/cardapio', cardapioController.getCardapio);

//Rotas Pedidos ------------
router.get('/appetito/pedidos', pedidosController.getPedidos);
router.post("/appetito/pedidos", newPedidoController.createPedido);
router.get("/appetito/pedidos/:mesa", pedidosMesaController.getPedidoPorMesa);

//Rotas Comanda ------------
router.put("/appetito/comandas/:id/efetuarPagamento", pagamentoComandaController.efetuarPagamento);
router.get("/appetito/comandas/pagas", comandaController.getComandasPagas);

//Rotas Reservas ------------
router.post("/appetito/reserva", reservaController.criarReserva);
router.delete("/appetito/reserva/:id", reservaController.deletarReserva);
router.get("/appetito/reserva/cpf", reservaController.consultarReservaPorCPF);
router.get("/appetito/reserva", reservaController.consultarReservas);

export { router };