import { styled } from '@stitchesConfig'
import { UserAvatar } from './Avatar'
interface IUser {
  name: string
  login: string
  joined: string
  avatar?: string
  bio: string
}

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

const User = ({ name, login, joined, avatar, bio }: IUser) => {
  return (
    <Flex>
      <UserAvatar />
      <InnerFlex>
        <h2>{name}</h2>
        <p>@{login}</p>
        <p>Joined {joined}</p>
      </InnerFlex>
    </Flex>
  )
}

export default User
