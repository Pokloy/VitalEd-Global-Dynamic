import { Container, Row, Col, Image } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import PagesCss from './PagesCss.module.css';
import { useState, useEffect } from 'react';

import AboutUsAdmin from '../components/AboutUsAdmin';


export default function AboutUs() {
	const token = localStorage.getItem('token')
	const [subHead, setSubHead]= useState("");

	const defaultString = <><p className={`${PagesCss.Aboutus1font} pt-3 px-lg-5`}>
							Empowered USA is a job placement agency that facilitates connections between international educators and US schools in search of teaching professionals. 
							</p>

							<p className={`${PagesCss.Aboutus1font} pt-3 px-lg-5`}>
							Empowered USA is a partner in educational transformation. Join us on this exciting journey, where the world of education knows no borders, and together, we'll shape a brighter future for teachers and students alike. 
							</p></>


	const showSubHeadings = () => {
		fetch(`${process.env.REACT_APP_API_URL}/aboutus/`,{
			 method: 'GET',
			 headers: {
	        'Content-Type': 'application/json',
	        'Authorization': `Bearer ${token}`
	      }
		})
		.then(res => res.json())
		.then(data => {
			const subhead = data.map((result) => {
				return(
					<p className={`${PagesCss.Aboutus1font} text-justify`}>
					{ <div dangerouslySetInnerHTML={{ __html: result.auSubHead }} />}
					</p>
					) 
			})
			setSubHead(subhead);
		})
	}


	useEffect(() => {
		showSubHeadings();
		console.log(process.env.REACT_APP_API_URL)
	},[])


	return(
		<>
		{
			(token !== null)?
			<AboutUsAdmin/>
			:
					<>
					<section className={`${PagesCss.landingaboutus}`}>
						<Container>
							<Row>
							   <Col lg={8} xs={12} className="d-flex flex-column justify-content-center mt-lg-4 pt-3 align-items-lg-start align-items-center">
							      	<p className={`${PagesCss.aboutusfont1} mt-5 text-center px-5`}>
							      		About Us
							      	</p>
							    </Col>
							</Row>
						</Container>
					</section>

					<section className={`${PagesCss.Aboutus1}`}>
						<Container>
							<div className="m-5 p-lg-5">
								{(subHead !== '') ? subHead : defaultString}
							</div>
						</Container>
					</section>

					<section className={`${PagesCss.Aboutus2} d-flex justify-content-center align-items-center p-5`}>
						<Container>
							<Row className="flex-lg-row p-2">
								<Col lg={6} className="d-flex justify-content-center align-items-center">
									<Image fluid src="./images/mathTeacherTransparent.png" />
								</Col>

								<Col lg={6} className={`${PagesCss.about2placeholder1} p-lg-5 p-2`}>
									<h2 className={`${PagesCss.about2header1} text-lg-left text-center p-lg-3 p-1`}>
										For Teachers
									</h2>

									<p className={`${PagesCss.about2font1} text-lg-left`}><span className={`${PagesCss.facustom} fa fa-check-square-o`}> 
									</span> Tailored support for teachers' J-1 visa application and teaching journey.
									</p>

									<p className={`${PagesCss.about2font1} text-lg-left`}><span className={`${PagesCss.facustom} fa fa-check-square-o`}> 
									</span> Comprehensive Assistance: Visa application process, pre-arrival.
									</p>

									<p className={`${PagesCss.about2font1} text-lg-left`}><span className={`${PagesCss.facustom} fa fa-check-square-o`}> 
									</span> Trust and Reliability: We're a trusted partner committed to your successful and fulfilling teaching career.
									</p>

									<Row className="flex-lg-row p-2 text-center">
				                    <Nav.Link target="_blank" as={NavLink} to="https://docs.google.com/forms/d/e/1FAIpQLSeZWWi_qj2qDnhAXv_nyEXPGMPJXGfD1pUW_RRU4t6LsiSfTQ/viewform?usp=sf_link" exact>
			                    	<button className={`${PagesCss.servicesButton} mt-3 mt-lg-0`}  type="button" >Apply to Teach in the US</button>
			                    	</Nav.Link >
			                    	<Nav.Link target="_blank" as={NavLink} to="">
			                    		<p className={`${PagesCss.serviceFont} text-center`}>Learn about our Services for Teachers</p>
			                    	</Nav.Link >
									</Row>
								</Col>
							</Row>
						</Container>
					</section>


					<section className={`${PagesCss.Aboutus3} d-flex justify-content-center align-items-center m-5`}>
						<Container>
							<Row className="flex-lg-row p-2">
									<Col lg={6} className="d-flex justify-content-center align-items-center order-lg-2">
										<Image fluid src="./images/spedTeacherTransparent.png" />
									</Col>


									<Col lg={6} className={`${PagesCss.about2placeholder1} p-lg-5 p-2`}>
										<h2 className={`${PagesCss.about2header1} text-lg-left text-center p-lg-3 p-1`}>
											For School Districts
										</h2>
										<p className={`${PagesCss.about2font1} text-lg-left`}> Why Should you avail our services?
										</p>

										<p className={`${PagesCss.about2font1} text-lg-left`}><span className={`${PagesCss.facustom} fa fa-check-square-o`}> 
										</span> Quality Educators: Top-tier, highly qualified teachers for school districts.
										</p>

										<p className={`${PagesCss.about2font1} text-lg-left`}><span className={`${PagesCss.facustom} fa fa-check-square-o`}> 
										</span> No Financial Obligation: Cost-effective recruitment without any financial burden on school districts.
										</p>

										<p className={`${PagesCss.about2font1} text-lg-left`}><span className={`${PagesCss.facustom} fa fa-check-square-o`}> 
										</span> Excellent Service: A commitment to seamless, exceptional service that exceeds expectations.
										</p>

										<Row className="flex-lg-row p-2 text-center">
					                    <Nav.Link target="_blank" as={NavLink} to="https://docs.google.com/forms/d/e/1FAIpQLSePbc4mHuyirpSCRdCWbU7AI1c_R7gCJm2zOkHDz1ANwk8pZQ/viewform?usp=sf_link" exact>
				                    	<button className={`${PagesCss.servicesButton} mt-3 mt-lg-0`}  type="button" >Request for Information</button>
				                    	</Nav.Link >
				                    	<Nav.Link target="_blank" as={NavLink} to="">
				                    		<p className={`${PagesCss.serviceFont} text-center`}>Learn about our Services for Schools</p>
				                    	</Nav.Link >
										</Row>
									</Col>


							</Row>
						</Container>
					</section>
					</> 
		}
		</>
	)
}