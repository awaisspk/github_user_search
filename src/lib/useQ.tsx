import { useQueries } from 'react-query'

type Iuser = {
  users: string[]
}
const useQ = ({ users }: Iuser) => {
  const userQueries = useQueries(
    users.map((user) => {
      return {
        queryKey: ['user', user],
        queryFn: () => fetch(user),
      }
    })
  )
}

export default useQ
