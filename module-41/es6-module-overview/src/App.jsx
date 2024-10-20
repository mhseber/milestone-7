
import './App.css'
import Watch from './components/Watch/Watch'

function App() {
  const watches = [
    { id: 1, name: 'Apple Watch', price: 30000 },
    { id: 2, name: 'Google Watch', price: 40000 },
    { id: 3, name: 'Mi Watch', price: 20000 },
    { id: 4, name: 'Black Shark ', price: 10000 }
  ]
  return (
    <>

      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
