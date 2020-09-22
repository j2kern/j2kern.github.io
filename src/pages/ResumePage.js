import React, {useEffect} from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactGa from 'react-ga';
import Pdf from '../documents/julietkern-resume.pdf';
import './Pages.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ResumePage(props){
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
                        <p class="portfolio-subheading mx-auto d-block">Resume</p>
                    </Col>
                    <Col sm={12}>
                        <div className = "App">
                            <a href = {Pdf} target = "_blank">Download PDF</a>
                        </div>
                    </Col>
                </Row>
        </Container>
        <Container >
                <Row className="justify-content-md-center">
                    <Col sm={7}>
                        <div class="resume-pdf">
                            <Document file="julietkern-resume.pdf" class="mx-auto d-block"><Page pageNumber={1}/></Document>
                        </div>
                    </Col>
                </Row>
        </Container>
        </>
    );
}

export default ResumePage;