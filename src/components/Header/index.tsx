import { LightDarkSwitcher } from '@components/Button/ThemeToggle'
import { SiteLogo } from '@components/SiteLogo'
import { styled } from '@stitchesConfig'

const Flex = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1em',
})

const Header = () => {
  return (
    <Flex>
      <SiteLogo />
      <LightDarkSwitcher />
    </Flex>
  )
}

export { Header }
