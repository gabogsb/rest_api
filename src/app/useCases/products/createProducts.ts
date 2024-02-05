import { Product } from './../../models/Product.model';
import { Request, Response } from 'express';

export async function createProduct(req: Request, res: Response) {

  try {
    const imagePath = req.file?.filename;
    const { name, description, price, category, ingredients } = req.body;

    const product = await Product.create({
      name,
      description,
      imagePath,
      price: Number(price),
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : []
    });

    res.status(201).send(product);

  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
