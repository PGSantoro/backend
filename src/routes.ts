import { Router, Request, Response } from 'express';
import { CreateUserController } from "./controllers/user/CreateUserController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { MenuController } from "./controllers/menu/MenuController";
import { CreateReservationController } from "./controllers/reservation/CreateReservationController";

const router = Router();

router.get('/teste', (req: Request, res: Response) => {
    return res.json({ ok: "Fechou" });
});

// Rota da página Home
router.get('/', (req: Request, res: Response) => {
    // Lógica para retornar as informações da página Home
    return res.json('Bem-vindo à pizzaria!');
});

// Rota para criar um novo usuário
router.post('/users', new CreateUserController().handle);

// Rota para criar um novo pedido
router.post('/order', new CreateOrderController().handle);

// Rota para obter o cardápio
router.get('/menu', new MenuController().handle);

// Rota para criar uma nova reserva
router.post('/reservas', new CreateReservationController().handle);

export { router };
