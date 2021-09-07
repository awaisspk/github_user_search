import React, { FC, FormEventHandler } from 'react'
import { useMutation, UseMutationResult } from 'react-query'
import { IPerson } from '@interface/IPerson'

const createPerson = async (
  id: string,
  name: string,
  age: number
): Promise<IPerson> => {
  const res: Response = await fetch('/api/person/create', {
    method: 'POST',
    body: JSON.stringify({
      id,
      name,
      age,
    }),
  })
  if (res.ok) {
    return res.json()
  }
  throw new Error('Error create person')
}

interface IcreatePersonParams {
  id: string
  name: string
  age: number
}

const CreatePerson: FC = () => {
  const mutation: UseMutationResult<IPerson, Error, IcreatePersonParams> =
    useMutation<IPerson, Error, IcreatePersonParams>(
      async ({ id, name, age }) => createPerson(id, name, age)
    )

  const onSubmit: FormEventHandler<HTMLFormElement> = async (
    event: React.SyntheticEvent
  ) => {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      name: { value: string }
      age: { value: number }
    }
    const id = '1'
    const name = target.name.value
    const age = target.age.value
    mutation.mutate({ id, age, name })
  }

  return (
    <>
      {mutation.isLoading ? (
        <p>Adding todo</p>
      ) : (
        <>
          {mutation.isError ? (
            <div>An error has occured {mutation.error?.message}</div>
          ) : null}
          {mutation.isSuccess ? (
            <div>
              Todo added person name is {mutation?.data?.name} and he is{' '}
              {mutation.data?.age} year old
            </div>
          ) : null}
        </>
      )}
      <form onSubmit={onSubmit}>
        <label htmlFor="name">name : </label>
        <br />
        <input type="text" id="name" name="name" />
        <br />
        <label htmlFor="age">age : </label>
        <br />
        <input type="number" id="age" name="age" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default CreatePerson
