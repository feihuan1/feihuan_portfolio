import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'


const App = () => {
  return (
  <main className='bg-slate-300/20'>
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={'Home'} />
            <Route path='/about' element={'About'} />
            <Route path='/projects' element={'projects'} />
            <Route path='/contact' element={'contact'} />
        </Routes>
    </BrowserRouter>
  </main>
  )
}

export default App
