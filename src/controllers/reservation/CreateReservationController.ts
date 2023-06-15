import { Request, response, Response } from 'express';
import { CreateReservationService } from '../../services/reservation/CreateReservationService';

class CreateReservationController {
  async handle(req: Request, res: Response) {
    try {
      // Extract the necessary data from the request body
      const { name, date, time } = req.body;

      // Create an instance of the CreateReservationService
      const createReservationService = new CreateReservationService();

      // Call the execute method of the service to create the reservation
      const reservation = await createReservationService.execute({ name, date, time });

      // Return the created reservation as a response
      return res.json(reservation);
    } catch (error) {
      // Handle any errors that occur during reservation creation
      console.error('Error creating reservation:', error);
      return res.status(500).json({ error: 'Failed to create reservation.' });
    }
  }
}

export { CreateReservationController };
