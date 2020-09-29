import React, {useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactGa from 'react-ga';

import './Pages.css';

function HomePage(props){
    useEffect(() => {
        ReactGa.initialize('UA-157274032-2');
  
        //pageview
        ReactGa.pageview(window.location.pathname + window.location.search)
      }, [])
    return(
        <>
        <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'/>
        <link href="//fonts.googleapis.com/css?family=Open+Sans"  rel='stylesheet'/>

        {/* Header */}
        <div className="header-background">
            <Container>
                <Row className="justify-content-md-center">
                    <Col lg="5" md="5">
                        <p class="welcome-message d-none d-md-block">Hi, I'm Juliet.</p>
                        <p class="welcome-paragraph d-none d-md-block">I’m a Biomedical Engineering Student with a passion for design and technology.</p>
                    </Col>
                    <Col lg="2" md="4" >
                        <img class="mx-auto d-block home-image " src="med-tech-shadows.png" alt=""/>
                    </Col>
                </Row>
            </Container>
        </div>
        {/* Mobile Caption */}
        <Container >
                <Row>
                    <Col >
                    <p class="welcome-message-mobile d-md-none">Hi I'm Juliet</p>
                        <p class="welcome-paragraph d-md-none">I’m a Biomedical Engineering Student with a passion for design and technology.</p>
                    </Col>
                </Row>
        </Container>
        {/* How can I help? */}
        <Container >
                <Row className="justify-content-md-center">
                    <Col sm={9}>
                    <p class="subheading " > How can I Help?</p>
                    </Col>
                </Row>
        </Container>
        <Container >
                <Row className="justify-content-md-center">
                    <Col lg="2" md="3">
                    <img class="mx-auto dev-des-image d-none d-md-block" src="development-logo.png" alt=""/>
                    </Col>
                    <Col lg="7" md="6">
                        <p class="dev-des-header">Development</p>
                        <p class="welcome-paragraph">React, Angular, NodeJS, Bootstrap, HTML, CSS, JavaScript, C#, C++, Matlab, Google Analytics</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg="2" md="3">
                    <img class="mx-auto dev-des-image d-none d-md-block" src="design-logo.png" alt=""/>
                    </Col>
                    <Col lg="7" md="6">
                        <p class="dev-des-header">UI/UX Design</p>
                        <p class="welcome-paragraph">Photoshop, AdobeXD, Axure, Figma, User Research and Testing</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg="2" md="3">
                    <img class="mx-auto dev-des-image d-none d-md-block" src="3D-modeling-logo.png" alt=""/>
                    </Col>
                    <Col lg="7" md="6">
                        <p class="dev-des-header">3D Modeling</p>
                        <p class="welcome-paragraph">Solidworks, Rapid Prototyping, 3D Printing</p>
                    </Col>
                </Row>
        </Container>
        {/* A little more about me */}
        <Container >
            <Row className="justify-content-md-center">
                <Col sm={9}>
                    <p class="subheading" >A Little More About Me</p>
                </Col>
            </Row>
        </Container>
        <Container >
            <Row className="justify-content-md-center">
                <Col sm={9}>
                    <p class="about-paragraph">I am a candidate for Bachelor of Science in Biomedical Engineering at the University of Waterloo. I am interested in combining technology, creative thinking and design to improve the future of healthcare. I am always up for a challenge and love to embrace the uncomfortable. Currently seeking an internship co-op position starting January 2021, feel free to reach out and connect!</p>
                </Col>
            </Row>
        </Container>
        {/* Contact Me */}
        <Container >
            <Row className="justify-content-md-center">
                <Col sm={9}>
                    <p class="subheading" >Contact</p>
                </Col>
            </Row>
        </Container>
        <Container >
            <Row className="justify-content-md-center">
                <Col sm={9}>
                    <a href="mailto:j2kern@uwaterloo.ca"><i class="fa fa-envelope contact"></i></a>
                    <a href="https://github.com/j2kern"><i class="fa fa-github contact"></i></a>
                    <a href="https://www.linkedin.com/in/julietkern"><i class="fa fa-linkedin contact"></i></a>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                </Col>
            </Row>
        </Container>
        <br/>
        </>
    );
}

export default HomePage;