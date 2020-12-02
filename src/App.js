import { Button } from './components/atoms'

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Button isSolid color='red'>Default</Button>
      <Button isSolid color='blue'>Blue BG</Button>
      <Button color='blue'>White and Blue</Button>
      <Button color='red'>White and Red</Button>
    </div>
  )
}

export default App
