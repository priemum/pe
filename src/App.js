import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import bg from './images/motif.jpg'
import { Badge, Container } from 'react-bootstrap';
import { useState } from 'react';
import Company from './pages/Company';
import Zones from './pages/Zones';

function App() {
  const [activeNav, setActiveNav] = useState('مرحبا')
  return (
  <Router>
    <div className="App">
      <header>
        <NavBar setActiveNav={setActiveNav} />
      </header>
      <main style={{width: '100%'}}>
        <Container className='d-flex h-100 ' fluid>
          <Container className='m-auto border border-dark rounded py-5 position-relative'>
            <Badge className = 'active-nav position-absolute'>{activeNav}</Badge>
                <Routes>
                  <Route path='/company' element={<Company/>}/>
                  <Route path='/zones' element={<Zones />}/>
                  <Route element={<h1>SOON!!!!!!!!!!!!!!!!</h1>}/>
                </Routes>
          </Container>
          
        </Container>
      </main>
      <footer >
       <Footer />
      </footer>
    </div>
  </Router>
  );
}

export default App;
