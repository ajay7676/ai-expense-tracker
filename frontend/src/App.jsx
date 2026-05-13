import './App.css'
import {Routes, Route} from 'react-router'
import LandingPage from './components/pages/landing/LandingPage'
import Dashboard from './components/pages/dashboard/Dashboard'
import Header from './components/elements/Header'

function App() {

  return (
    <>
     <Header />
     <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/dashboard' element={<Dashboard/>} />
     </Routes>
    </>
  )
}

export default App
