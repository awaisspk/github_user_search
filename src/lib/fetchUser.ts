import { GraphQLClient, gql } from 'graphql-request'

export interface Idata {
  user: {
    name: string
    login: string
    bio: string
  }
}

const ENDPOINT = 'https://api.github.com/graphql'

async function fetchUser(name: string) {
  const graphQLClient = new GraphQLClient(ENDPOINT, {
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
    username: name,
  }

  const data: Idata = await graphQLClient.request(QUser, variables)

  if (data) {
    return data
  }
  throw new Error('Could not fetch resource')
}
export { fetchUser }
