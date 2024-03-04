import { useEffect, useState } from "react"

export function useCatImage ({ fact }) {
    const [imageUrl, setImageUrl] = useState()
  
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
  
    return { imageUrl }
}