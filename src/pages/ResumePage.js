import React from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Pages.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ResumePage(props){
    
    return(
        <>
        <p>ResumePage DOC Works!</p>
        <Document file="2A_Resume.pdf"><Page pageNumber={1}/></Document>
        <Container >
                <Row className="justify-content-md-center">
                    <Col sm={9}>
                        <img class="mx-auto d-block" src="jkern-resume.png" alt=""/>
                    </Col>
                </Row>
        </Container>
        </>
    );
}

export default ResumePage;