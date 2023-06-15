import prismaClient from "../../prisma";

interface ReservationRequest {
    name: string;
    date: string;
    time: string;
}

class CreateReservationService {
    async execute({ name, date, time }: ReservationRequest) {
        try {
            // Perform any necessary validation or business logic
            // Create a new reservation in the database using the provided data
            const reservation = await prismaClient.reservation.create({
                data: {
                    name,
                    date,
                    time,
                },
            });

            return reservation;
        } catch (error) {
            // Handle any errors that occur during reservation creation
            console.error('Error creating reservation:', error);
            throw new Error('Failed to create reservation.');
        }
    }
}

export { CreateReservationService };
