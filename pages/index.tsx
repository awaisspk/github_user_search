import { styled } from '@stitchesConfig'
import SearchBox from '@components/SearchBox'
import { Header } from '@components/Header'
import DisplayResults from '@components/Body/DisplayResults'

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
  return (
    <Container>
      <Header />
      <SearchBox />
      <DisplayResults />
    </Container>
  )
}

export default Index
