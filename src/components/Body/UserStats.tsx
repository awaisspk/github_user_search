import { styled } from '@stitchesConfig'

interface IStats {
  repo: number
  follower: number
  following: number
}

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

const UserStats = ({ repo, follower, following }: IStats) => {
  return (
    <Flex>
      <Column>
        <p>Repos</p>
        <p>{repo}</p>
      </Column>

      <Column>
        <p>Followers</p>
        <p>{follower}</p>
      </Column>

      <Column>
        <p>Following</p>
        <p>{following}</p>
      </Column>
    </Flex>
  )
}

export default UserStats
