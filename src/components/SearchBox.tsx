import { DarkTheme, styled } from '@stitchesConfig'
import { SearchLogo } from 'src/Logo/SearchLogo'
import { Button } from '@components/Button/Button'
import { ChangeEvent, SetStateAction } from 'react'

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.3em 0.5em 0.3em 1.5em',
  borderRadius: '$lg',
  marginBottom: '1em',

  backgroundColor: '$content',
  boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',

  [`.${DarkTheme} &`]: {
    boxShadow: 'rgba(17, 12, 46, 0.15) 0px 8px 10px 0px',
  },
})

const StyledForm = styled('form', {
  display: 'flex',
  justifyContent: 'space-between',
  flex: '2 1 auto',
})

const StyledInput = styled('input', {
  border: '0',
  backgroundColor: 'transparent',
  outline: 'none',
  padding: '0 2em 0 1em',
  flex: '2 1 stretch',
  width: '100%',
})

type IUser = {
  username: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void
  loadingStatus: boolean
}

const SearchBox = ({
  username,
  handleChange,
  handleSubmit,
  loadingStatus,
}: IUser) => {
  return (
    <Container>
      <SearchLogo />
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput type="text" value={username} onChange={handleChange} />
        <Button type="submit" loading={loadingStatus}>
          Search
        </Button>
      </StyledForm>
    </Container>
  )
}

export default SearchBox
