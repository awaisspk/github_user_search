import { styled } from '@stitchesConfig'
import { Idata } from 'src/types/Idata'

const Flex = styled('div', {
  backgroundColor: '$body',
  display: 'flex',
  justifyContent: 'space-around',
  borderRadius: '$lg',
})
const Column = styled('div', {
  textAlign: 'center',
  fontSize: 'medium',
})

const UserStats = ({ user }: Idata) => {
  return (
    <Flex>
      <Column>
        <p>Repos</p>
        <p>{user.repositories.totalCount}</p>
      </Column>

      <Column>
        <p>Followers</p>
        <p>{user.followers.totalCount}</p>
      </Column>

      <Column>
        <p>Following</p>
        <p>{user.following.totalCount}</p>
      </Column>
    </Flex>
  )
}

export default UserStats
