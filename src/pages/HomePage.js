import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Pages.css';

function HomePage(props){
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
                        <img class="mx-auto d-block home-image " src="avatar-walking-cropped.png" alt=""/>
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
                        <p class="welcome-paragraph">HTML, CSS, JS, Angular, React, NodeJS, mySQL</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg="2" md="3">
                    <img class="mx-auto dev-des-image d-none d-md-block" src="design-logo.png" alt=""/>
                    </Col>
                    <Col lg="7" md="6">
                        <p class="dev-des-header">Design</p>
                        <p class="welcome-paragraph">Axure, AdobeXD, Figma, Photoshop</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg="2" md="3">
                    <img class="mx-auto dev-des-image d-none d-md-block" src="3D-modeling-logo.png" alt=""/>
                    </Col>
                    <Col lg="7" md="6">
                        <p class="dev-des-header">3D Modeling</p>
                        <p class="welcome-paragraph">Solidworks</p>
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
                    <p class="about-paragraph">I am a candidate for Bachelor of Science in Biomedical Engineering at the University of Waterloo. I am interested in combining technology, creative thinking and design to improve the future of healthcare. I am always up for a challenge and love to embrace the uncomfortable. Currently seeking an internship co-op position starting January 2021, feel free to reach out and connect!</p>
                 </Col>
            </Row>
        </Container>
        <br/>
        </>
    );
}

export default HomePage;