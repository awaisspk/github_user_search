import { styled } from '@stitchesConfig'
import GithubLogo from 'src/Logo/GithubLogo'
import LocationLogo from 'src/Logo/LocationLogo'
import TwitterLogo from 'src/Logo/TwitterLogo'
import WebsiteLogo from 'src/Logo/WebsiteLogo'
import { Idata } from 'src/types/Idata'

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'repeat(4,50px)',
  marginTop: '1em',

  '@md': {
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'repeat(2,1fr)',
  },
})

const Item = styled('div', {
  display: 'flex',
  alignItems: 'center',

  '& p': {
    marginLeft: '1em',
  },

  '& a': {
    marginLeft: '1em',
    textDecoration: 'none',
  },
})

const Links = ({ user }: Idata) => {
  return (
    <Grid>
      <Item>
        <LocationLogo />
        <p>{user.location ? user.location : 'Mars'}</p>
      </Item>

      <Item>
        <WebsiteLogo />
        <a href={user.websiteUrl} target="_blank" rel="noreferrer">
          {user.websiteUrl ? user.websiteUrl : 'not Found'}
        </a>
      </Item>

      <Item>
        <TwitterLogo />
        <a href={user.twitterUsername} target="_blank" rel="noreferrer">
          {user.twitterUsername ? user.twitterUsername : 'not Found'}
        </a>
      </Item>

      <Item>
        <GithubLogo />
        <a
          href={`https://github.com/${user.login}`}
          target="_blank"
          rel="noreferrer"
        >
          @github
        </a>
      </Item>
    </Grid>
  )
}

export default Links
