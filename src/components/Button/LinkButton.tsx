import { motion } from 'framer-motion'
import { styled } from '@stitchesConfig'

const LinkButton = styled(motion.button, {
  borderRadius: '$medium',
  width: '40px',
  height: '40px',
  cursor: 'pointer',
  border: 'none',
  backgroundColor: 'transparent',
  transition: '0.4s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0px',
  color: '$gray8',

  '& *': {
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  '&:focus:not(:focus-visible)': {
    outline: '0',
  },
  '&:focus-visible': {
    outline: '2px solid $blue5',
    backgroundColor: '$gray3',
    boxShadow: '0 0px 10px -6px rgba(0, 24, 40, 0.3)',
  },
  '&:hover': {
    backgroundColor: '$gray4',
    boxShadow: '0 0px 15px -6px rgba(0, 24, 40, 0.4)',
  },
})

export { LinkButton }
