
import { Request, Response } from 'express';
import { Order } from '../../models/Order.model';

export async function changeOrderStatus(req: Request, res: Response) {
  try {

    const { orderId } = req.params;
    const { status } = req.body;


    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
      res.status(400).json({
        error: 'Status should be one of these: WAITING, IN_PRODUCTION, DONE'
      });
    }

    await Order.findByIdAndUpdate(orderId, { status });

    res.sendStatus(204);

  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
