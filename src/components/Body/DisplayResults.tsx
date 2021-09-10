import User from './User'
import { DarkTheme, styled } from '@stitchesConfig'
import UserStats from './UserStats'
import Links from './Links'
import { Idata } from '../../types/Idata'

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

const DisplayResults = ({ user }: Idata) => {
  return (
    <Container>
      <User user={user} />
      <UserStats user={user} />
      <Links user={user} />
    </Container>
  )
}

export default DisplayResults
