
import './App.css'
import Counter from './counter'
import Friends from './friends'
import Team from './team'
import Users from './users'

function App() {

  function handleClick() {
    alert('button clicked')
  }
  const handleClick2 = () => {
    alert('Clicked')
  }

  const addToFive = (num) => {
    alert(num + 2);
  }

  return (
    <>

      <h1>React Core Concepts 2</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick} >Click Me</button>
      <button onClick={handleClick2} >Click Me</button>
      <button onClick={() => { alert('third Clicked') }} >Click Me</button>
      <button onClick={() => addToFive(3)} >Click Me</button>
    </>
  )
}

export default App
