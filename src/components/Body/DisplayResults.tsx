import User from './User'
import { DarkTheme, styled } from '@stitchesConfig'
import UserStats from './UserStats'
import Links from './Links'

interface IUser {
  name: string
  login: string
  bio: string
}

const Container = styled('div', {
  gridArea: 'content',
  alignSelf: 'stretch',
  justifySelf: 'normal',

  backgroundColor: '$content',
  borderRadius: '$lg',
  padding: '1.3em 1em',

  boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
  [`.${DarkTheme} &`]: {
    boxShadow: 'rgba(17, 12, 46, 0.15) 0px 8px 10px 0px',
  },
})

const DisplayResults = () => {
  return (
    <Container>
      <User
        name="awais iqbal"
        bio="software engineer"
        login="awaisspk"
        joined="25 Jan 2020"
      />
      <UserStats follower={3000} following={8} repo={30} />
      <Links
        github="https://github.com/awaisspk"
        website="https://stitches-red.vercel.app/"
        location="Lahore"
        twitter="Not Available"
      />
    </Container>
  )
}

export default DisplayResults
