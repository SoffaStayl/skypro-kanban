import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      function App() {
  // Задаем имя пользователя, которое будет передано в компонент WelcomeMessage
  const userName = 'Алексей';

  // Рендерим компонент WelcomeMessage и передаем в него проп name со значением переменной userName
  // Если userName не было бы определено, то можно было бы не передавать проп name, и в сообщении по умолчанию использовалось бы "пользователь"
  return (
    <>
      <WelcomeMessage name={userName} />
    </>
  );
}

export default App;
      <h1>Vite + React</h1>
     
   
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
