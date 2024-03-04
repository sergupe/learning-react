import { useCatImage } from './customHooks/useCatImage'
import { useCatFact } from './customHooks/useCatFact'
import './App.css'

function App() {
  const { fact, getFactAndUpdateState } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = () => {
    getFactAndUpdateState()
  }

  return (
    <main>
      <h1>Cats App</h1>
      <button onClick={handleClick}>Get new fact</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={`${imageUrl}`} alt={`Image extracted from ${fact}`} />}
      </section>
    </main>
  )
}

export default App
