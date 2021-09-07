import axios from 'axios'

const END_POINT = 'https://api.github.com/graphql'
const TOKEN = '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'

const api = axios.create({
  baseURL: END_POINT,
})

const Query = `query {
  viewer {
  name
  url
  }
}`

export const getUser = () => {
  return api.get(Query, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  })
}
