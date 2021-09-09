import { styled } from '@stitchesConfig'
import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

const StyledButton = styled(motion.button, {
  backgroundColor: '$btn',
  color: 'White',
  padding: '0.9em 1.5em',
  border: '0',
  borderRadius: '$lg',
  cursor: 'pointer',
  variants: {
    loading: {
      true: {
        backgroundColor: 'Blue',
      },
    },
  },
})

const buttonVarients = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
  },
  tap: {
    scale: 0.99,
  },
}

interface IButton {
  children: ReactNode
  type: 'button' | 'reset' | 'submit' | undefined
  loading: boolean
}

const Button = ({ children, type, loading }: IButton) => {
  return (
    <>
      <StyledButton
        variants={buttonVarients}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        type={type}
        loading={loading}
      >
        {children}
      </StyledButton>
    </>
  )
}

export { Button }
