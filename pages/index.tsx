import { GraphQLClient, gql } from 'graphql-request'
import { useQuery, UseQueryResult } from 'react-query'

interface Idata {
  viewer: {
    name: string
    bio: string
  }
}
const endpoint = 'https://api.github.com/graphql'

async function main() {
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: 'Bearer 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',
    },
  })

  const query = gql`
    {
      viewer {
        name
        bio
      }
    }
  `

  const data: Idata = await graphQLClient.request(query)
  if (data) {
    return data
  }
  throw new Error('Could not fetch resource')
}

const Indexpage = () => {
  const { isLoading, isError, error, data }: UseQueryResult<Idata, Error> =
    useQuery<Idata, Error>('github_user', main)

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>An Erorr has occured {error?.message}</div>
  }
  return (
    <div>
      <h1>{data?.viewer.name}</h1>
      <h2>{data?.viewer.bio}</h2>
    </div>
  )
}

export default Indexpage
