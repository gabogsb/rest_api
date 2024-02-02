// import { Product } from './../../models/Product.model';
import { Request, Response } from 'express';

export async function createProduct(req: Request, res: Response) {

  try {
    console.log(req.body);

  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
