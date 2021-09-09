import { DarkTheme, styled } from '@stitchesConfig'
import { SearchLogo } from 'src/Logo/SearchLogo'
import { Button } from '@components/Button/Button'

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

const SearchBox = () => {
  return (
    <Container>
      <SearchLogo />
      <StyledForm onSubmit={(e) => e.preventDefault()}>
        <StyledInput type="text" />
        <Button type="submit">Search</Button>
      </StyledForm>
    </Container>
  )
}

export default SearchBox
