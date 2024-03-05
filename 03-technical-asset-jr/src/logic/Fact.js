const CAT_FACT_ENDPOINT = 'https://catfact.ninja/fact'

export const getRandomFact = () => {
    return fetch(CAT_FACT_ENDPOINT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        return fact
      })
}