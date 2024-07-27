import { Suspense, useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Header from './components/Header'
import { BrowserRouter as Router } from 'react-router-dom';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import ScreenLoader from './components/ScreenLoader';
import { useProgress } from '@react-three/drei';

function App() {
  const [count, setCount] = useState(0)
  const { progress } = useProgress();

  return (
    <>
    <Router>  
    

      <div id='root' className='w-full h-full scroll-smooth'>
      <ScreenLoader progress={progress}/>
      <Header />
      <Hero />
      <Section1/>
      <Section2 />
      </div>
      
      </Router>


    </>
  )
}

export default App
