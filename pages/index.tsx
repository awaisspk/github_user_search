import { styled } from '@stitchesConfig'
import SearchBox from '@components/SearchBox'
import { Header } from '@components/Header'
import DisplayResults from '@components/Body/DisplayResults'
import { ChangeEvent, useEffect, useState } from 'react'
import { useFetchUser } from '@lib/useFetchUser'

const initialData = {
  name: '',
  bio: '',
  login: '',
  createdAt: '',
  avatarUrl: '',
  location: '',
  twitterUsername: '',
  websiteUrl: '',
  followers: {
    totalCount: 0,
  },
  following: {
    totalCount: 0,
  },
  repositories: {
    totalCount: 0,
  },
}

const Container = styled('section', {
  maxWidth: 'calc(600px + 2em)',
  margin: 'auto',
  padding: '0 1em',
  '@md': {
    marginTop: '3em',
  },

  display: 'flex',
  flexDirection: 'column',
})

const Index = () => {
  const [username, setUsername] = useState('awaisspk')
  const [searchQuery, setSearchQuery] = useState(username)
  const { isLoading, isError, error, data } = useFetchUser(searchQuery)
  useEffect(() => console.log(data))

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearchQuery(username)
  }

  return (
    <Container>
      <Header />
      <SearchBox
        username={username}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        loadingStatus={isLoading}
      />
      {typeof data === 'undefined' ? (
        <DisplayResults user={initialData} />
      ) : (
        <DisplayResults user={data} />
      )}
    </Container>
  )
}

export default Index
