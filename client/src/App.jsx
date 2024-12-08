import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { About, Home, Login, Projects, SignUp } from './screens';
import { Footer, Header, ScrollToTop } from './components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>

      <Header />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/projects' element={ <Projects /> } />
        <Route path='/sign-up' element={ <SignUp /> } />
        <Route path='/sign-in' element={ <Login /> } />
      </Routes>

      <Footer />

   </Router>
  )
}

export default App
