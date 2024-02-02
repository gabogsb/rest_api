import { Request, Response } from 'express';

import { Category } from '../../models/Category.model';

export async function createCategory(req: Request, res: Response) {

  try {
    const { icon, name } = req.body;

    const category = await Category.create({
      name,
      icon
    });

    res.status(201).json(category);
  } catch (err) {
    console.log(err);
    res.sendStatus(401);
  }
}
