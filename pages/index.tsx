import { FC, useEffect } from 'react'
import { getUser } from '../src/lib/utils/github'

const PersonPage: FC = () => {
  useEffect(() => {
    getUser().then((res) => console.log(res))
  })

  return (
    <div>
      <h1>query results</h1>
    </div>
  )
}

export default PersonPage
