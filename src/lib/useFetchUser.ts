import { GraphQLClient, gql } from 'graphql-request'
import { useQuery } from 'react-query'
import { Idata } from '../types/Idata'

const endpoint = 'https://api.github.com/graphql'

function useFetchUser(dev: string) {
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
  })

  const query = gql`
    query ($username: String!) {
      user(login: $username) {
        name
        bio
        avatarUrl
        createdAt
        location
        twitterUsername
        websiteUrl
        login

        followers {
          totalCount
        }
        following {
          totalCount
        }
        repositories {
          totalCount
        }
      }
    }
  `

  const variables = {
    username: dev,
  }

  return useQuery(
    ['dev', dev],
    async () => {
      const { user }: Idata = await client.request(query, variables)
      return user
    },
    {
      enabled: !!dev,
    }
  )
}

export { useFetchUser }
