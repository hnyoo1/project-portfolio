import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar   from './components/Navbar'
import Home     from './pages/Home'
import Projects from './pages/Projects'
import Skills   from './pages/Skills'
import Contact  from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/"         element={<Home />}     />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills"   element={<Skills />}   />
        <Route path="/contact"  element={<Contact />}  />
      </Routes>
    </BrowserRouter>
  )
}

export default App