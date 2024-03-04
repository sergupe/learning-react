import { useState, useEffect } from 'react'
import './App.css'

const CAT_FACT_ENDPOINT = 'https://catfact.ninja/fact'

function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  const getRandomFact = () => {
    fetch(CAT_FACT_ENDPOINT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }

  useEffect(getRandomFact, [])

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
    getRandomFact()
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
