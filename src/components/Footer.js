import { Container, Row, Col, Image } from 'react-bootstrap';
import PagesCss from './Components.module.css';
import Nav from 'react-bootstrap/Nav';
import {  NavLink } from 'react-router-dom';


export default function Footer(){
	const scrollToTop = () => {
  	window.scrollTo({ top: 0, behavior: 'smooth' });
	};


	return(
		<>
		<section className={`${PagesCss.footer1} pt-4 mt-1`}>
		  <Container fluid>
		    <Row className="d-lg-flex justify-content-center">
		      <Col xs="12" lg="auto" className="text-center text-lg-left">
		        <Image fluid src="./CompanyLogo-transparen.png" width="190" height="auto" alt="VitalEd Global" className="mx-lg-5 mt-3 mb-4"/>
		      </Col>

		      <Col xs="12" lg="auto" className={`${PagesCss.aligns} p-1 m-1`}>
		        <p className={`${PagesCss.footer1contact} mb-0`}>Contact</p>
		        <p className={`${PagesCss.footercontactfont} mb-0`}>
		          <span className={`${PagesCss.modifygicons} material-symbols-outlined mr-2`}>mail</span>
		          vitaledglobal@gmail.com
		        </p>


		        <p className={`${PagesCss.footercontactfont} mb-0`}>
		          <span className={`${PagesCss.modifygicons} material-symbols-outlined mr-2`}>call</span>
		          443-934-8452 or 443-310-5408
		        </p>
		        <p className={`${PagesCss.footercontactfont} mb-0`}>
		          <span className={`${PagesCss.modifygicons} material-symbols-outlined mr-2`}>location_on</span>
		          998 Harting Farm Dr, Arnold, MD 21012
		        </p>
		      </Col>
		      <Col xs="12" lg="auto" className={`d-none d-lg-block ${PagesCss.verticalhr} mx-4`}></Col>

		       <Col xs="12" lg="auto" className={`${PagesCss.aligns} p-1 m-1 mt-4 mt-lg-0`}>
		       	 <p className={`${PagesCss.footer1contact} mb-0 pt-lg-0`}>Navigation</p>
		       	  <Nav.Link onClick={scrollToTop} as={NavLink} to="/" className={`${PagesCss.footercontactfont} d-block`}>
	       	  		Home
		       	  </Nav.Link>
  		       	  <Nav.Link onClick={scrollToTop} as={NavLink} to="/AboutUs" className={`${PagesCss.footercontactfont} d-block`}>
	       	  		About us
		       	  </Nav.Link>
  		       	  <Nav.Link onClick={scrollToTop} as={NavLink} to="/login" className={`${PagesCss.footercontactfont} d-block`}>
	       	  		Login
		       	  </Nav.Link>
		       </Col>

   		      <Col xs="12" lg="auto" className={`d-none d-lg-block ${PagesCss.verticalhr} mx-4`}></Col>

   		       <Col xs="12" lg="auto" className={`${PagesCss.aligns} ml-sm-5`}>
	   		       	<p className={`${PagesCss.footer1contact} mb-0 pt-lg-0 text-center`}>Social</p>
	   		       	<p className={`${PagesCss.footercontactfont} mb-0 d-inline`}>
	   		       	<span className={`${PagesCss.modifyfaicons} fa fa-facebook-official mx-2`}></span>
	   		       	</p>
	   		       	<p className={`${PagesCss.footercontactfont} mb-0 d-inline`}>
	   		       	<span className={`${PagesCss.modifyfaicons} fa fa-twitter-square mx-2`}></span> 
	   		       	</p>
	   		       	<p className={`${PagesCss.footercontactfont} mb-0 d-inline`}>
	   		       	<span className={`${PagesCss.modifyfaicons} fa fa-instagram mx-2`}></span>
	   		       	</p>
   		        </Col>
		    </Row>
		  </Container>
		</section>
		<footer className={`${PagesCss.footer2}`}>
		<p className={`${PagesCss.footer2font} m-0 p-2 text-center`}>
		<span className={`${PagesCss.modifyfaicons} ${PagesCss.modifyfaiconsfooter2} fa fa-copyright mr-2`} ></span>
   		        			2023 • VitalEd Global • All Rights Reserved.
		</p>
    	</footer>
		</>

			

	)
}