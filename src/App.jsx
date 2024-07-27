import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Header from './components/Header'
import { BrowserRouter as Router } from 'react-router-dom';
import Section1 from './components/Section1';
import Section2 from './components/Section2';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>  

      <div id='root' className='w-full h-full scroll-smooth'>
      <Header />
      <Hero />
      <Section1/>
      {/* <Section2 /> */}
      </div>
      </Router>


    </>
  )
}

export default App
