import React, {useState, useEffect, useRef} from "react";

//Считает количество рендеров задача
// Задача 1
let renderCount2 = 1

function App() {
  // ! Задача 1
  // const [renderCount, setRenderCount] = useState(1)
  const [value1, setValue1] = useState('initial')
  // ! Задача 2
  const [value2, setValue2] = useState('initial')
  // ! Задача 3 Ми хочемо дізнатися значення минулого елемента через useState це зробити неможливо
  const prevValue = useRef('')
  // Це обєкт і ми задали початкове значення 1
  const renderCount1 = useRef(1)
  // ! Задача 2
  const inputRef = useRef(null)

  useEffect(() => {
    // ! Задача 1
    renderCount1.current++
    renderCount2++
    // ! Задача 2
    console.log(inputRef.current.value)
  })

  // ! Задача 3
  useEffect(() => {
    prevValue.current = value2
  }, [value2])


  // ! Краще всього користвуватися useRef і current, томущо коли ми використоввуємо useRef
  // ! всф дані зберігаються після кожного рендера, а коли ми використовуємо
  // ! useState ми визиваємо ще один рендер

  // ! Задача 2
  const focus = () => inputRef.current.focus()

  return (
    <div>
      {/* Задача 1 */}
      <h1>Количество рендеров: {renderCount1.current}</h1>
      <h1>Количество рендеров: {renderCount2}</h1>
      {/* Задача 3 */}
      <h2>Прошлое состояние: {prevValue.current}</h2>

      <input type="text" onChange={e => setValue1(e.target.value)} value={value1}/>
      {/* Задача 2 */}
      <input ref={inputRef} type="text" onChange={e => setValue2(e.target.value)} value={value2}/>
      <button className="btn btn-success" onClick={focus}>Фокус</button>
    </div>
  )
}

export default App