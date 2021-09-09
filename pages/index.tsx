import { styled } from '@stitchesConfig'
import SearchBox from '@components/SearchBox'
import { Header } from '@components/Header'
import DisplayResults from '@components/Body/DisplayResults'
import { ChangeEvent, useEffect, useState } from 'react'
import { useFetchUser } from '@lib/useFetchUser'

const initialData = {
  name: 'Nerd',
  bio: '@nerd',
  login: 'nerd',
  createdAt: 'Thu Sep 09 2021',
  avatarUrl: '',
  location: 'Neverland',
  twitterUsername: 'not found',
  websiteUrl: 'not found',
  followers: {
    totalCount: 10,
  },
  following: {
    totalCount: 1,
  },
  repositories: {
    totalCount: 10,
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
