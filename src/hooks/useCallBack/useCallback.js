import React, {useCallback, useState} from "react";
import ItemsList from "./ItemsList";

function App() {
  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(1)

  const styles = {
    color: colored ? 'darkred' : 'black'
  }

  // ! variant 1
  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill('').map((_, i) => `Елемент ${i + 1}`)
  }, [count])

  // ! variant 2
  // const generateItemsFromAPI = useCallback((indexNumber) => {
  //   return new Array(count).fill('').map((_, i) => `Елемент ${i + indexNumber}`)
  // }, [count])

  return (
    <>
      <h1 style={styles}>Количество елементов: {count}</h1>
      <button className="btn btn-success" onClick={() => setCount(prev => prev + 1)}>Добавить</button>
      <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Изменить</button>
    
      <ItemsList getItems={generateItemsFromAPI}/>
    </>
  )
}

export default App