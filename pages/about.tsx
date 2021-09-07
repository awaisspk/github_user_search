import { GetServerSideProps } from 'next'

const About = ({ message }) => {
  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}

export const getStaticProps = () => {
  return {
    props: {
      message: 'supppppppppppppp',
    },
  }
}

export default About
