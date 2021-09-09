import { GraphQLClient, gql } from 'graphql-request'
import { useQuery } from 'react-query'

interface Idata {
  user: {
    name: string
    login: string
    bio: string
  }
}

const endpoint = 'https://api.github.com/graphql'

function useFetchUser(user: string) {
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
  })

  const QUser = gql`
    query ($username: String!) {
      user(login: $username) {
        name
        login
        bio
      }
    }
  `

  const variables = {
    username: user,
  }

  return useQuery(
    ['post', user],
    async () => {
      const { user }: Idata = await graphQLClient.request(QUser, variables)
      return user
    },
    {
      enabled: !!user,
    }
  )
}

export { useFetchUser }
