import { useState } from 'react'
import './App.css'

function App() {
  const [isShow, setIsShow] = useState(false)
  const [active, setActive] = useState(1)
  const [buttons, setButtons] = useState([1, 1, 1])

  const handleClick = (index) => {
    setActive(index + 1)
    const newButtons = [1, 1, 1]
    newButtons[index] = Number(!newButtons[index])
    setButtons(newButtons)
  }
  return (
    <div className="App">
      <button onClick={() => setIsShow(true)}>{active}</button>
      <br />
      {isShow && (
        <>
          {buttons.map((visible, index) => {
            return visible ? (
              <button key={index} onClick={() => handleClick(index)}>
                {index + 1}
              </button>
            ) : null
          })}
        </>
      )}
    </div>
  )
}

export default App
