import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Pages.css';

function PortfolioPage(props){
    
    return(
        <>
        <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'/>
        <link href="//fonts.googleapis.com/css?family=Open+Sans"  rel='stylesheet'/>

        <Container>
                <Row className="justify-content-md-center">
                    <Col sm={12}>
                        <p class="portfolio-subheading mx-auto d-block">The Home Depot</p>
                    </Col>
                </Row>
        </Container>
        <Container >
                <Row className="justify-content-md-center">
                    <Col lg="4" >
                    <img class="mx-auto d-block portfolio-image" src="canada_tech.png"/>
                    </Col>
                    <Col lg="6" >
                        <p class="portfolio-header">Canada Technology Website | The Home Depot</p>
                        <p class="portfolio-paragraph">Designed and developed a map of the head office for Home Depot’s Information technology internal employee website. Designed with Axure, developped with Angular 9 framework. </p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg="4" md="4">
                    <img class="mx-auto d-block portfolio-image" src="prostorewalk.png"/>
                    </Col>
                    <Col lg="6" md="5">
                        <p class="portfolio-header">Pro Store Walk Portal | The Home Depot</p>
                        <p class="portfolio-paragraph">Worked alongside a team to develop a heatmap of the Home Depot store departments to visualize trends in sales and pinpoint opportunities for company growth. </p>
                    </Col>
                </Row>
        </Container>

        <Container>
                <Row className="justify-content-md-center">
                    <Col sm={12}>
                        <p class="portfolio-subheading mx-auto d-block">Personal Projects</p>
                    </Col>
                </Row>
        </Container>
        <Container >
                <Row className="justify-content-md-center">
                    <Col lg="4" >
                    <img class="mx-auto d-block portfolio-image" src="canada_tech.png"/>
                    </Col>
                    <Col lg="6" >
                        <p class="portfolio-header">Canada Technology Website | The Home Depot</p>
                        <p class="portfolio-paragraph">Designed and developed a map of the head office for Home Depot’s Information technology internal employee website. Designed with Axure, developped with Angular 9 framework. </p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg="4" md="4">
                    <img class="mx-auto d-block portfolio-image" src="prostorewalk.png"/>
                    </Col>
                    <Col lg="6" md="5">
                        <p class="portfolio-header">Pro Store Walk Portal | The Home Depot</p>
                        <p class="portfolio-paragraph">Worked alongside a team to develop a heatmap of the Home Depot store departments to visualize trends in sales and pinpoint opportunities for company growth. </p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg="4" md="4">
                    <img class="mx-auto portfolio-image d-none d-md-block" src="3D-modeling-logo.png"/>
                    </Col>
                    <Col lg="6" md="5">
                        <p class="portfolio-header">3D Modeling</p>
                        <p class="portfolio-paragraph">Solidworks</p>
                    </Col>
                </Row>
        </Container>
        </>
    );
}

export default PortfolioPage;