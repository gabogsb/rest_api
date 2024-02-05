
import { Request, Response } from 'express';
import { Order } from '../../models/Order.model';

export async function cancelOrder(req: Request, res: Response) {

  try {

    const { orderId } = req.params;

    await Order.findByIdAndDelete(orderId);

    res.sendStatus(204);

  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}