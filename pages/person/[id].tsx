import React, { FC, useImperativeHandle } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useQuery } from 'react-query'
import { IPerson } from '@interface/IPerson'

const getPersonById = async (
  id: string | string[] | undefined
): Promise<IPerson> => {
  if (typeof id === 'string') {
    const res = await fetch(`/api/person/${id}`)
    if (res.ok) {
      return res.json()
    }
    throw new Error('erorr fetching user with id')
  }
  throw new Error('invalid id')
}

const PersonPage: FC = () => {
  const {
    query: { id },
  } = useRouter()

  const { isLoading, isError, error, data } = useQuery<IPerson, Error>(
    ['person', id],
    () => getPersonById(id),
    {
      enabled: !!id, //dependent queries
    }
  )

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

export default PersonPage
