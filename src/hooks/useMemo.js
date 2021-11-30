import React, {useState, useMemo, useEffect} from "react";

function complexCompute(num) {
  console.log('hello')
  let i = 0
  while (i < 10000000) i++
  return num * 2
}

function App() {
  const [number, setNumber] = useState(42)
  const [colored, setColored] = useState(false)

  // ! Task 1
  // const styles = {
  // ? если colored is true, тоді нехай буде darkred, а інакше буде black
  //   color: colored ? 'darkred' : 'black'
  // }

  // ! Task 2 через useMemo чтоби производительность била бистрее
  // variant 1 how to write or ...
  // const styles = useMemo(() => {
  //   return {
  //     color: colored ? 'darkred' : 'black'
  //   }
  // })

  // variant 2 how to write is shorter
  const styles = useMemo(() => ({
    color: colored ? 'darkred' : 'black'
  }), [colored])



  // ! variant 1 the worst
  // const computed = complexCompute(number)

  // ! variant 2 THE BEST
  const computed = useMemo(() => {
    return complexCompute(number)
  }, [number])

  // Task 2
  useEffect(() => {
    console.log('Styles changed')
  }, [styles])

  return (
    <>
      <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
      <button className="btn btn-success" onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
      <button className="btn btn-danger" onClick={() => setNumber(prev => prev - 1)}>Убрать</button>
      <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Изменить</button>
    </>
  )
}

export default App