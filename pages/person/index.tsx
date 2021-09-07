import { FC } from 'react'
import { useQuery, UseQueryResult } from 'react-query'
import { IPerson } from '@interface/IPerson'
import PersonDetails from '@components/PersonDetails'

export const fetchPerson = async (): Promise<IPerson> => {
  const res = await fetch('/api/person')
  if (res.ok) {
    return res.json()
  }
  throw new Error('Network response not ok')
}

const PersonPage: FC = () => {
  const { isLoading, isError, error, data }: UseQueryResult<IPerson, Error> =
    useQuery<IPerson, Error, IPerson, string>('person', fetchPerson)

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  if (isError) return <p>Error is --- {error?.message}</p>

  return (
    <>
      <p>{data?.id}</p>
      <p>{data?.name}</p>
      <p>{data?.age}</p>
      <h1>Person Component</h1>
      <PersonDetails />
    </>
  )
}

export default PersonPage
