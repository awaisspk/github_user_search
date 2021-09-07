import { NextApiRequest, NextApiResponse } from 'next'
import { IPerson } from '@interface/IPerson'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IPerson | Error>
) {
  const {
    query: { id },
  } = req
  if (typeof id === 'string') {
    console.log(`getting a person with id ${id}`)
    res.status(200).send({ id: '12', name: 'awais', age: 22 })
  }
  res.status(404).send(new Error(`person of id ${id} not found`))
}
