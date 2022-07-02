// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../utils/resources.json';

type ErrorResponse = { message: string }
type Data = ReturnType<() => typeof db.projects>

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorResponse>
) {

  switch (req.method) {
    case "GET":
      return res.status(200).json(db.projects);
    default:
      return res.status(404).json({ message: "Bad Request" });
  }
}
