import './App.scss'
import './utils/reset.scss'
import './utils/fonts.scss'
import { Week } from './components/Week/Week'
import { Days } from './components/Days/Days'
import { Times } from './components/Times/Times'

function App() {
  return (
    <div className='App'>
      <Week week={1} />
      <Days />
      <Times />
    </div>
  )
}

export default App
