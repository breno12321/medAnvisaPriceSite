import { NextApiRequest, NextApiResponse } from 'next';
import medAnvisaPrice from '../../services/medAnvisaPrice';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { filter, value } = req.query;

  const data = await medAnvisaPrice(filter as string, value as string);

  res.status(200).send({ data });
};
