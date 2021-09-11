import { styled } from '@stitchesConfig'
import { UserAvatar } from './Avatar'
import { Idata } from 'src/types/Idata'

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
      <UserAvatar imageSrc={user.avatarUrl} />
      <InnerFlex>
        <h2>{user.name}</h2>
        <p>@{user.login}</p>
        <p>Joined {date ? date : 'not found'}</p>
      </InnerFlex>
    </Flex>
  )
}

export default User
