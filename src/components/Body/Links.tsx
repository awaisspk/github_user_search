import { styled } from '@stitchesConfig'
import GithubLogo from 'src/Logo/GithubLogo'
import LocationLogo from 'src/Logo/LocationLogo'
import TwitterLogo from 'src/Logo/TwitterLogo'
import WebsiteLogo from 'src/Logo/WebsiteLogo'

interface ILink {
  location: string
  website: string
  twitter: string
  github: string
}
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

const Links = ({ location, website, twitter, github }: ILink) => {
  return (
    <Grid>
      <Item>
        <LocationLogo />
        <p>{location}</p>
      </Item>

      <Item>
        <WebsiteLogo />
        <a href={website} target="_blank" rel="noreferrer">
          {website}
        </a>
      </Item>

      <Item>
        <TwitterLogo />
        <a href={twitter} target="_blank" rel="noreferrer">
          {twitter}
        </a>
      </Item>

      <Item>
        <GithubLogo />
        <a href={github} target="_blank" rel="noreferrer">
          @github
        </a>
      </Item>
    </Grid>
  )
}

export default Links
