import { useEffect, useState } from "react"
import { getRandomFact } from '../logic/Fact'

export function useCatFact() {
    const [fact, setFact] = useState()
    
    const getFactAndUpdateState = () => {
      getRandomFact().then(newFact => { setFact(newFact) })
    }
    
    useEffect((getFactAndUpdateState), [])
  
    return { fact, getFactAndUpdateState }
  }