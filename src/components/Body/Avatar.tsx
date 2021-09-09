import React from 'react'
import { styled } from '@stitchesConfig'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

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
  backgroundColor: 'white',
  color: 'Violet',
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

const UserAvatar = () => (
  <Flex css={{ gap: 20 }}>
    <Avatar>
      <AvatarImage
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
        alt="Pedro Duarte"
      />
      <AvatarFallback delayMs={600}>JD</AvatarFallback>
    </Avatar>
  </Flex>
)

export { UserAvatar }
