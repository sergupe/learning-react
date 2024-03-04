import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURNS } from './utils/GlobalConst'
import { checkWinner, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import { saveGame, resetGameStorage } from './utils/Storage'
import './App.css'

function App() {
  const [board, setBoard] = useState(() => {
    const savedBoard = window.localStorage.getItem('board')
    return savedBoard ? JSON.parse(savedBoard) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const savedTurn = window.localStorage.getItem('turn')
    return savedTurn ?? TURNS.X
  })

  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    // Remove stored game data
    resetGameStorage()
  }

  const updateBoard = (index) => {
    // Check if position already filled or there is already a winner
    if(board[index] || winner) return
    // Update the board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // Change the turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // save game
    saveGame({
      board: newBoard,
      turn: newTurn
    })
    // Check if there is a winner
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Restart Game</button>

      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
               {board[index]} 
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame}/>
    </main>
  )
}

export default App
