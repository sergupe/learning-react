/* eslint-disable react/prop-types */
import './Square.css'

export function Square({ children, isSelected, updateBoard, index }) {
    // Highlight the selected turn
    const className = `square ${isSelected ? 'is-selected' : ''}`
    // Handle the click in the cell
    const handleClick = () => {
      updateBoard(index)
    }
  
    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
}