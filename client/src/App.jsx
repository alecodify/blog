import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { Home, Login, SignUp } from './screens';
import { Footer, Header } from './components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>

      <Header />
      
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/sign-up' element={ <SignUp /> } />
        <Route path='/sign-in' element={ <Login /> } />
      </Routes>

      <Footer />

   </Router>
  )
}

export default App
