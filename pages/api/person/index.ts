import { NextApiRequest, NextApiResponse } from 'next'
import { IPerson } from '@interface/IPerson'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<IPerson>
) {
  console.log('getting person')
  res.status(200).send({ id: '12', name: 'awais', age: 22 })
}
