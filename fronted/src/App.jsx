import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage.js';
import BarForm from './components/barForm.js';
import BarDetail from './components/BarDetails.js';
import BeerForm from './components/BeerForm.js';
import BeerDetail from './components/BeerDetail.js';
import Footer from './components/Footer'; // Importer le composant Footer
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Image } from 'react-bootstrap';

const App = () => (
  <Router>
    <div className="d-flex flex-column min-vh-100">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">My Bar App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Accueil</Nav.Link>
                <Nav.Link href="/add-bar">Ajouter un Bar</Nav.Link>
                <Nav.Link href="/add-beer">Ajouter une Bière</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* <Image 
          src="https://cdn.pixabay.com/photo/2016/11/29/15/05/drink-1870139_1280.jpg" 
          fluid 
          className="mt-4 d-block mx-auto w-100" 
          style={{ height: '50vh' }} 
          alt="Bar Image" 
        /> */}
      </header>
      <main className="flex-grow-1">
        <Container className="mt-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-bar" element={<BarForm />} />
            <Route path="/bars/:id" element={<BarDetail />} />
            <Route path="/add-beer" element={<BeerForm />} />
            <Route path="/beers/:id" element={<BeerDetail />} />
          </Routes>
        </Container>
      </main>
      <Footer /> {/* Ajouter le composant Footer ici */}
    </div>
  </Router>
);

export default App;
