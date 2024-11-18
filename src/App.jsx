
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import TravelCard from './components/Card/TravelCard'
import ExploreNow from './components/Pages/ExploreNow'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<TravelCard></TravelCard>}></Route>
        <Route path='/explore-now' element={<ExploreNow></ExploreNow>}></Route>

      </Routes>
    </Router>
  )
}

export default App
