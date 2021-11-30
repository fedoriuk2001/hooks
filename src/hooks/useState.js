import React, { useState } from "react";

function computeInitialCounter() {
  console.log('Some calculations...')
  return Math.trunc(Math.random() * 20)
}


function useStateApp() {
  // ! варіант 1 
  // Значення = 0, воно може бути 0 або 1
  // const [counter, setCounter] = useState(0)

  // ! варіант 2 
  // Значення дорівнює тому яке виводить функція computeInitialCounter
  // const [counter, setCounter] = useState(computeInitialCounter())

  // ! варіант 3 
  // Для того щоб функція computeInitialCounter виводилась тільки 1 раз
  const [counter, setCounter] = useState(() => {
    return computeInitialCounter()
  })


  // Приклад з обєктами
  const [state, setState] = useState({
    title: 'Счетчик',
    date: Date.now()
  })


  function increment() {
    // Добавляєм + 1 до значення першого
    setCounter(counter + 1)
    // ця штучка робить так, щоб до минулого стану ще ми могли добавити якесь значення 
    // або щось зробити

    // Ці дві

    // ! варіант 1
    // приймає значення першої змінної
    setCounter((prevCounter) => {
      return prevCounter + 1
    })

    // ! варіант 2
    // приймає значення останьої змінної
    // setCounter(prev => prev + 1)
  }

  function decrement() {
    setCounter(counter - 1)
  }
  
  // ! Варіант 1 міняється повністю все на title
  function updateTitle1() {
    setState({title: 'Новое название'})
  }

  // ! Варіант 2 міняється тільки певний елемент
  function updateTitle2() {
    // Зсилаємося на минулий обєкт
    setState(prev => {
      return {
        // Беремо останнє значення
        ...prev,
        // і міняємо тільки те що нам потрібно
        title: 'Новое название'
      }
    })
  }

  return (
    <div> 
      <h1>Счетчик: {counter}</h1>
      <button onClick={increment} className="btn btn-success">Добавить</button>
      <button onClick={decrement} className="btn btn-danger">Удалить</button>
      
      {/* Варіант 1 Прямо в обєкті */}
      {/* Обєкт повністю міняється на те що ми передали */}
      <button onClick={() => setState({title: 'Новое название'})} className="btn btn-default">Изменить названые</button>

      {/* Варіант 2 Через функцію */}
      {/* Обєкт повністю міняється на те що ми передали */}
      <button onClick={updateTitle1} className="btn btn-default">Изменить названые</button>

      {/* Варіант 3 Через функцію але щоб тільки title мінявся */}
      {/* Обєкт повністю міняється на те що ми передали */}
      <button onClick={updateTitle2} className="btn btn-default">Изменить названые</button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default useStateApp;