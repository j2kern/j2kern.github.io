import React, {useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactGa from 'react-ga';
import './Pages.css';

function PortfolioPage(props){
    useEffect(() => {
        ReactGa.initialize('UA-157274032-2');
  
        //pageview
        ReactGa.pageview(window.location.pathname + window.location.search)
      }, [])
    
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
                    <img class="mx-auto d-block portfolio-image" src="canada_tech_dropshadow.png"/>
                    </Col>
                    <Col lg="6" >
                        <p class="portfolio-header">Canada Technology Website | The Home Depot</p>
                        <p class="portfolio-paragraph">Designed and developed a webpage for Home Depot's internal employee website for the IT department. The page displayed an informational map of the head office, prototyped with Axure and Photoshop, and developed in Angular with an integrated Google Maps API. </p>
                        <p class="portfolio-paragraph">May 2020 - Aug. 2020</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg="4">
                    <img class="mx-auto d-block portfolio-image" src="prostorewalk_dropshadow.png"/>
                    </Col>
                    <Col lg="6">
                        <p class="portfolio-header">Pro Store Walk Portal | The Home Depot</p>
                        <p class="portfolio-paragraph">Worked alongside a team to develop a heat map of the Home Depot store departments in Angular to visualize trends in sales and pinpoint opportunities for company growth. Deployed across all of the 182 Canadian Home Depot stores.</p>
                        <p class="portfolio-paragraph">May 2020 - Aug. 2020</p>
                    </Col>
                </Row>
        </Container>

        <Container>
                <Row className="justify-content-md-center">
                    <Col sm={12}>
                        <p class="portfolio-subheading mx-auto d-block">Relevant Projects</p>
                    </Col>
                </Row>
        </Container>
        <Container >
                <Row className="justify-content-md-center">
                    <Col lg="4" >
                    <img class="mx-auto d-block portfolio-image" src="memorymaps_dropshadow.png"/>
                    </Col>
                    <Col lg="6" >
                        <p class="portfolio-header">Memory Maps | Waterloo Hackathon</p>
                        <p class="portfolio-paragraph">Successfully developed the front-end of a website using HTML, CSS, and Google Cloud’s Geolocation API that focuses on preventing people with neurological disorders such as Dementia or Alzheimer’s from getting lost. Collaborated with team members under high-pressure and short time constraint to complete the project efficiently. </p>
                        <p class="portfolio-paragraph">Jan. 2020</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg="4">
                    <img class="mx-auto d-block portfolio-image" src="miway_bus.png"/>
                    </Col>
                    <Col lg="6" >
                        <p class="portfolio-header">Mi Way City Bus | CAD Assignment</p>
                        <p class="portfolio-paragraph">Built a 3D scale model of a Mississauga city bus on Solidworks using multiple parts in assembly. </p>
                        <p class="portfolio-paragraph">Oct. 2019</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg="4">
                    <img class="mx-auto d-block portfolio-image" src="biotron_logo.png"/>
                    </Col>
                    <Col lg="6" >
                        <p class="portfolio-header">Biomechatronics Design Team | CAD Assignment</p>
                        <p class="portfolio-paragraph">Team Lead of Daniel's Arm project. The prosthetic is for a
        double amputee in El Salvador in need of a device. It is made of 3D
        printed material and the grip is mechanized to add an additional degree
        of freedom. The prosthetic is powered by rechargeable batteries,
        controlled by a programmed Arduino and connected to a linear actuator to
        allow for the gripping and extension of the fingers. As the Team Lead,
        the responsibilities include organizing club members and timelines to
        maximize productivity and ensure group stays focused to complete the
        project by the desired deadline.</p>
                        <p class="portfolio-paragraph">Jan. 2020 - Apr. 2020</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg="10">
                    <img class="mx-auto d-block portfolio-image-wide" src="biotron_armpieces.png"/>
                    </Col>
                </Row>
        </Container>
        </>
    );
}

export default PortfolioPage;