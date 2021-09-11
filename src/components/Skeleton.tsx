import { styled, keyframes } from '@stitchesConfig'

const pulse = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 100 },
})

export const Skeleton = styled('div', {
  backgroundColor: 'SlateGrey',
  position: 'relative',
  overflow: 'hidden',

  '&::after': {
    animationName: `${pulse}`,
    animationDuration: '900ms',
    animationDirection: 'alternate',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
    backgroundColor: 'LightSlateGray',
    borderRadius: 'inherit',
    bottom: 0,
    content: '""',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },

  variants: {
    variant: {
      text: {
        height: '10px',
      },
      title: {
        height: '15px',
      },
      heading: {
        height: '20px',
      },
    },
  },
  defaultVariants: {
    variant: 'text',
  },
})
