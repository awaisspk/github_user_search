import { styled } from '@stitchesConfig'
import { Idata } from 'src/types/Idata'
import { UserAvatar } from './Avatar'

const Flex = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
})

const InnerFlex = styled('div', {
  display: 'inline-block',
  marginLeft: '1em',

  '& p::nth-child(1)': {
    fontSize: '0.8em',
    marginTop: '0',
    color: 'LightSkyBlue',
  },

  '& h2': {
    margin: '0',
  },
})

const User = ({ user }: Idata) => {
  const date = new Date(user.createdAt).toDateString()

  return (
    <Flex>
      <UserAvatar user={user} />
      <InnerFlex>
        <h2>{user.name}</h2>
        <p>@{user.login}</p>
        <p>Joined {date ? date : 'not found'}</p>
      </InnerFlex>
    </Flex>
  )
}

export default User
