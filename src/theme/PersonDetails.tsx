import { useQuery, UseQueryResult } from 'react-query'
import { fetchPerson } from '../../pages/person'
import { IPerson } from '@interface/IPerson'

const PersonDetails = () => {
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
    </>
  )
}

export default PersonDetails
