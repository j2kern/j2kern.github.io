import React from 'react';
import{BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ResumePage from './pages/ResumePage';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: 'Juliet Kern',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'Portfolio', path: '/portfolio'},
        {title: 'Resume', path: '/resume'},
      ],
      home: {
        title: "Hi, I'm Juliet",
        subTitle: 'a Biomedical Engineering Student',
        text: "Here's a little about me"
      },
      Portfolio: {
        title: 'Here are some of my projects'
      },
      Resume: {
        title: 'this is my resumememe'
      },
    }
  }

  render(){
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Container>
            <Navbar bg="transparent header-background" expand="lg" >
              <Navbar.Brand className="juliet-kern">Juliet Kern</Navbar.Brand>
              <Navbar.Toggle className="border-0" aria-control="navbar-toggle" />
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/portfolio">Portfolio</Link>
                  <Link className="nav-link" to="/resume">Resume</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
            <Route path="/portfolio" render={() => <PortfolioPage title={this.state.home.title} />} />
            <Route path="/resume" render={() => <ResumePage title={this.state.home.title} />} />
            <Footer/>
         </Container>
        </Container>
      </Router>
    );
  }
}

export default App;
