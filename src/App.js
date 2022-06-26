import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import bg from './images/motif.jpg'
import { Badge, Container } from 'react-bootstrap';
import { useState } from 'react';
import Company from './pages/Company';
import Zones from './pages/Zones';
import AddingZone from './components/AddingZone';
import { ZonesProvider } from './contexts/ZonesContext';
import Areas from './pages/Areas';

function App() {
  const [activeNav, setActiveNav] = useState('مرحبا')
  return (
                  <ZonesProvider>
    <div className="App">
      <header>
        <NavBar setActiveNav={setActiveNav} />
      </header>
      <main style={{width: '100%'}}>
        <Container className='d-flex ' fluid>
          <Container className='m-auto border border-dark rounded  position-relative h-100'>
            <Badge className = 'active-nav position-absolute'>{activeNav}</Badge>
                <Routes>
                  <Route path='/company' element={<Company/>}/>

                  <Route path='/zones' element={<Zones />}/>
                  <Route path='/zones/add' element={<AddingZone />}/>
                  <Route path='/areas' element={<Areas />}/>
                  <Route element={<h1>SOON!!!!!!!!!!!!!!!!</h1>}/>
                </Routes>
          </Container>
          
        </Container>
      </main>
      <footer >
       <Footer />
      </footer>
    </div>
                  </ZonesProvider>
  );
}

export default App;
