import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  background: '$base700',
  padding: '$4',
  height: '$16',
})

export function App() {
  return <Button>Hello</Button>
}
