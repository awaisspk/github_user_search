import React from 'react'
import { styled } from '@stitchesConfig'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { Idata } from 'src/types/Idata'

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 55,
  height: 55,
  borderRadius: '100%',
  backgroundColor: 'rgba(0,0,0,0.3)',

  '@md': {
    width: 90,
    height: 90,
  },
})

const StyledImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '--colors-content',
  color: '--colors-body',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
})

// Exports
export const Avatar = StyledAvatar
export const AvatarImage = StyledImage
export const AvatarFallback = StyledFallback

// Your app...
const Flex = styled('div', { display: 'flex' })

const UserAvatar = ({ user }: Idata) => (
  <Flex css={{ gap: 20 }}>
    <Avatar>
      <AvatarImage src={user.avatarUrl} alt={user.name} />
      <AvatarFallback delayMs={600}>Dev</AvatarFallback>
    </Avatar>
  </Flex>
)

export { UserAvatar }
