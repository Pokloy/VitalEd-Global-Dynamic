import { Container, Row, Col, Image } from 'react-bootstrap';
import PagesCss from './PagesCss.module.css';
import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { useState, useEffect } from 'react';
import ForSchoolsAdmin from '../components/ForSchoolsAdmin'


export default function ForSchools(){
	const token = localStorage.getItem('token')
	const [subHead, setSubHead]= useState("");

	const defaultString = <p className={`${PagesCss.missionfontn} p-5 text-justify`}>Our agency presents a highly advantageous solution to teacher recruitment. <b>We provide top-tier educators</b> who can significantly impact students' learning experiences. What's more, there's <b>no financial obligation on the part of the school district</b> when availing our services, ensuring cost-effectiveness in securing talented teaching staff. Our unwavering <b>commitment to delivering exemplary service</b> ensures that the recruitment process is seamless and consistently exceeds expectations. Partner with us to enhance your school's teaching staff and educational programs.</p>;


	const showSubHeadings = () => {
		fetch(`${process.env.REACT_APP_API_URL}/forschools/`,{
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
					<p className={`${PagesCss.missionfontn} p-5 text-justify`}>
					{ <div dangerouslySetInnerHTML={{ __html: result.fsSubHead}} />}
					</p>
					) ;
			})
			setSubHead(subhead);
		})
	}


	useEffect(() => {
		showSubHeadings();
	},[])

	return (
		<>
		{
		(token !== null)?
		<ForSchoolsAdmin/>
		:
		<>
			<section className={`${PagesCss.landingforschools}`}>
				<Container className="p-lg-5">
					<Row>
				      <Col lg={8} xs={12} className="d-flex flex-column justify-content-center mt-lg-4 pt-3 align-items-lg-start align-items-center">
	    			  	 <h1 className={`${PagesCss.aboutusfont1} mt-5 text-center`}>For Schools</h1>
	    			  </Col>
					</Row>
				</Container>
			</section>
			<section className={`${PagesCss.mission}`}>
				<Container>
						{(subHead !== '') ? subHead : defaultString}
				</Container>
			</section>

			<section className={`${PagesCss.schoolbenefits} pb-5`}>
				<Container className="p-5">
		    		<div  className={`${PagesCss.aligns} mb-4`}><h2 className={`${PagesCss.about2header1} mt-5 mb-3`}>Schools Benefits</h2></div>
		    		<Row className="pt-1">
		    		    <Col lg={2} className="d-none d-lg-block d-print-block pr-lg-0 pl-lg-5">
    						<Image fluid src="./images/Exception.png" className={`${PagesCss.Exception}`} height="auto" width="120px" loading="lazy" />
    						<Image fluid src="./images/Service.png" className={`${PagesCss.Service}`}  height="auto" width="120px" loading="lazy" />
    						<Image fluid src="./images/Zero.png" className={`${PagesCss.Zero}`} height="auto" width="120px" loading="lazy" />
    					</Col>


    					<Col lg={10} className="text-lg-left d-inline justify-content-center text-center my-auto">
    						<Image fluid src="./images/Exception.png" height="auto" width="150px" className="d-lg-none d-block mx-auto pt-sm-3" />
    						<p className={`${PagesCss.teachersbenefitsn} ${PagesCss.aligns} mt-4`}>
    						<b>Exceptional Educators:</b> We pride ourselves on providing highly qualified and skilled teachers who can make a significant impact on your students' learning experiences.
    						</p>

    						<Image fluid src="./images/Service.png" height="auto" width="150px" className="d-lg-none d-block mx-auto pt-sm-3" />
    						<p className={`${PagesCss.teachersbenefitsn} ${PagesCss.aligns} mt-lg-5 pt-lg-3`}>
    						<b>Zero Financial Obligation:</b> By partnering with us, school districts can acquire top-tier teaching staff without any additional financial burdens. We ensure that the recruitment process is not only hassle-free but also cost-effective.
    						</p>


    						<Image fluid src="./images/Zero.png" height="auto" width="150px" className="d-lg-none d-block mx-auto pt-sm-3" />
    						<p className={`${PagesCss.teachersbenefitsn} ${PagesCss.aligns} mt-4`}>
    						<b>Service Excellence:</b> Our commitment to delivering top-notch service ensures that your experience with our agency is not only seamless but consistently exceeds expectations. Join us to enhance your school's teaching staff and educational programs.</p>
	                    	<Nav.Link target="_blank" as={NavLink} to="https://docs.google.com/forms/d/e/1FAIpQLSePbc4mHuyirpSCRdCWbU7AI1c_R7gCJm2zOkHDz1ANwk8pZQ/viewform?usp=sf_link" exact>
                    		<button className={`${PagesCss.servicesButton} mt-3 mt-lg-0`}  type="button" >Request for Information</button>
                    		</Nav.Link >
                    		<Nav.Link target="_blank" as={NavLink} to="">
                    		<p className={`${PagesCss.serviceFont} text-center`}>Learn about our Services for Schools</p>
                    		</Nav.Link >

    					</Col>
		    		</Row>


				</Container>
			</section>
			</>
			}
		</>
	)
}