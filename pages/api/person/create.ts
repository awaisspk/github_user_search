import { NextApiRequest, NextApiResponse } from 'next'
import { IPerson } from '@interface/IPerson'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IPerson>
) {
  const data: IPerson = JSON.parse(req.body)
  res.status(200).json(data)
}
