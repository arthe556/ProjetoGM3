import './App.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, Link } from 'react-router-dom'
import Page1 from './Page/Page1'
import Page2 from './Page/Page2'
import Page3 from './Page/Page3'
import Page4 from './Page/Page4';

function App() {

  return (
    <>
    <div className="App">
      <header>
        <div className='bt'><Link to="/"><Button variant="dark">GET</Button>{'    '}</Link></div>
        <div className='bt'><Link to="/post"><Button variant="dark">POST</Button>{' '}</Link></div>
        <div className='bt'><Link to="/put"><Button variant="dark">PUT</Button>{' '}</Link></div>
        <div className='bt'><Link to="/delete"><Button variant="dark">DELETE</Button>{' '}</Link></div>
      </header>
      
      <Routes>
        <Route path='/' element={<Page1/>}></Route>
        <Route path='/post' element={<Page2/>}></Route>
        <Route path='/put' element={<Page3/>}></Route>
        <Route path='/delete' element={<Page4/>}></Route>
     </Routes>

    </div>
    </>
  )
}

export default App
