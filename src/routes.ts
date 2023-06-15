import { Router, Request, Response } from "express";
import { AuthUserController } from "./Controllers/user/AuthUserController";
import { CreateUserController } from "./Controllers/user/CreateUserController";
import { CardapioController } from "./Controllers/cardapio/CardapioController";
import { PedidosController } from "./Controllers/pedidos/TodosPedidosController";
import { NewPedidoController } from "./Controllers/pedidos/NovoPedidoController";
import { PedidosMesaController } from "./Controllers/pedidos/PedidoMesaController";
import { PagamentoComandaController } from "./Controllers/comanda/EfetuarPagamentoController";
import { ComandaController } from "./Controllers/comanda/ComandasPagasController";
import { ReservaController } from "./Controllers/reserva/ReservaController";


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