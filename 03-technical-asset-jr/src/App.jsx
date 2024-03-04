import { useState, useEffect } from 'react'
import { getRandomFact } from './logic/Fact'
import './App.css'

function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    // One way to do it
    getRandomFact().then(setFact)
  }, [])

  useEffect(() => {
    if(!fact) return

    const firstThreeWords = fact.split(' ', 3).join(' ')
    console.log(firstThreeWords)

    fetch(`https://cataas.com/cat/says/${firstThreeWords}?fontSize=50&fontColor=red`)
      .then(res => {
        console.log(res)
        const { url } = res
        setImageUrl(url)
    })
  }, [fact])

  const handleClick = () => {
    // Another way to do it. RECOMENDED!
    getRandomFact().then(newFact => {
      setFact(newFact)
    })
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
