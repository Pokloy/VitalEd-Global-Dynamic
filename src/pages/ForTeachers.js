import { Container, Row, Col, Image } from 'react-bootstrap';
import PagesCss from './PagesCss.module.css';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import ForTeachersAdmin from '../components/ForTeachersAdmin'
import { useState, useEffect } from 'react';


export default function ForTeachers() {
	const token = localStorage.getItem('token')
	const [subHead, setSubHead]= useState("");

	const defaultString = <p className={`${PagesCss.missionfontn} p-5 text-justify`}>Our mission is to be your <b>trusted partner</b> in navigating the complex and often challenging process of obtaining a J-1 visa and pursuing your teaching career in the United States. Founded by Filipino teachers who have personally experienced the unique struggles and triumphs of this journey, <b>we understand the aspirations and concerns of educators like you.</b> Our agency was born out of a <b>genuine desire to make the path to teaching in the U.S. more accessible and enjoyable</b> for those who share our passion for education. With a deep commitment to empathy, personalization, and unwavering support, <b>we offer a comprehensive range of services tailored to your specific needs.</b> From visa sponsorship and program matching to orientation and ongoing guidance, we are here to ensure that your American teaching experience is not only successful but also deeply fulfilling. We're more than a service provider; we're a <b>community of caring professionals who are dedicated to your well-being and success.</b> Welcome to a supportive and understanding network that can help you achieve your teaching dreams in the United States.</p>;


	const showSubHeadings = () => {
		fetch(`${process.env.REACT_APP_API_URL}/forteachers/`,{
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
					{ <div dangerouslySetInnerHTML={{ __html: result.ftSubHead }} />}
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
			<ForTeachersAdmin/>
			:
		<>
		<section className={PagesCss.landingforteachers}>
			<Container className="p-lg-5">
				<Row>
				   <Col lg={8} sm={12} className="d-flex flex-column justify-content-center mt-4 pt-3 align-items-lg-start align-items-center">
				   		<p className={`${PagesCss.aboutusfont1} mt-5 text-center`}>For Teachers</p>
				   </Col>
				</Row>
			</Container>
		</section>

		<section className={PagesCss.mission}>
			<Container className="p-lg-5">
					{(subHead !== '') ?   subHead : defaultString}
			</Container>
		</section>


		<section className={PagesCss.hiring1}>
			<Container className="px-5">
				<Row>
				   <Col lg={6}>
				   	  <Image fluid src="./images/waivingteacherTransparent.png" className="pt-4 px-4" height="auto" width="700px" loading="lazy" />
				   </Col>

				   <Col lg={6} className={`${PagesCss.hiring2font} ${PagesCss.aligns} d-block p-4 mt-lg-5`}>
			   		   <p className={`mt-lg-5`}>We are actively seeking K-12 educators specializing in the fields of Science, Mathematics and Special Education (SPED).</p>
			   		   <p>Applications for School Year 2023-2024 is ongoing</p>
			   		   <Nav.Link as={NavLink} to="https://docs.google.com/forms/d/e/1FAIpQLSeZWWi_qj2qDnhAXv_nyEXPGMPJXGfD1pUW_RRU4t6LsiSfTQ/viewform?usp=sf_link" exact target="_blank">
		   		   		<button type="button" className={`${PagesCss.servicesButton}`}>Apply to Teach in the US</button>
			   		   </Nav.Link>
			   		   <p>You may send your resume to vitaledglobal@gmail.com</p>
				   </Col>
				</Row>
			</Container>
		</section>


		<section className={`${PagesCss.teachersbenefits} pb-5`}>
			<Container className="p-5">
				<div className="mb-4">
					<h2 className={`${PagesCss.about2header1} ${PagesCss.aligns} pt-5 mb-3`}>
					Teachers Benefits</h2>
				</div>
				{/*Logos*/}
				<Row  className="pt-1">
					<Col lg={2} className="d-none d-lg-block d-print-block pr-lg-0 pl-lg-5">
						<Col sm={12} className="p-5 pt-0 pb-0 mb-0">
    					<Image fluid src="./images/Job.png" height="auto" width="90px" loading="lazy" />

    					<Image fluid src="./images/SalaryTrans.png" className={`${PagesCss.salary}`}  height="auto" width="90px" loading="lazy" />

    					<Image fluid src="./images/VisaTrans.png" className={`${PagesCss.visa}`} height="auto" width="90px" />

    					<Image fluid src="./images/Logistics.png" className={`${PagesCss.logistics}`} height="auto" width="90px" loading="lazy" />
    					</Col>

    					<Col sm={12} className="p-5 pt-0 mt-0">
    					<Image fluid src="./images/House.png" className={`${PagesCss.house}`} height="auto" width="90px" loading="lazy" />

    					<Image fluid src="./images/Financial.png" className={`${PagesCss.financial} `} height="auto" width="90px" loading="lazy" />

    					<Image fluid src="./images/OrientationTrans.png" className={`${PagesCss.orientation}`} height="auto" width="90px" loading="lazy" />

    					<Image fluid src="./images/OngoingTrans.png" className={`${PagesCss.ongoing} pt-lg-5`} height="auto" width="90px" loading="lazy" />

    					<Image fluid src="./images/Family.png" className={`${PagesCss.family} pt-lg-3`} height="auto" width="90px" loading="lazy" />
    					</Col>
					</Col>



					<Col lg={10} className="text-lg-left d-inline justify-content-center text-center">
						<Image fluid src="./images/Job.png" height="auto" width="90px" loading="lazy" className={`${PagesCss.disappearinglogo} d-lg-none d-block mx-auto pt-sm-3`} />
    					<p className={`${PagesCss.teachersbenefitsn} ${PagesCss.aligns}`}>
    					 <b>Job matching:</b> Find a perfect teaching match with schools based on your qualification and preferences
    					</p>

    					<Image fluid src="./images/SalaryTrans.png" height="auto" width="90px" loading="lazy" className={`${PagesCss.disappearinglogo} d-lg-none d-block mx-auto pt-sm-5`} />
    					<p className={`${PagesCss.teachersbenefitsn} ${PagesCss.aligns} mt-lg-5 `}>
    					 <b>Salary:</b> You will receive a compensation based on the salary scales for US teachers.</p>

    					 <Image fluid src="./images/VisaTrans.png" height="auto" width="90px" loading="lazy" className={`${PagesCss.disappearinglogo} d-lg-none d-block mx-auto pt-sm-3`} />
    					 <p className={`${PagesCss.teachersbenefitsn} ${PagesCss.aligns} mt-lg-5`}>
    					 <b>Visa Guidance:</b> Guide you through the meticulous process of gathering all necessary documents for your visa application.</p>	

    					 <Image fluid src="./images/Logistics.png" height="auto" width="90px" loading="lazy" className={`${PagesCss.disappearinglogo} d-lg-none d-block mx-auto pt-sm-3`} />
    					 <p className={`${PagesCss.teachersbenefitsn} ${PagesCss.aligns} mt-lg-4`}>
    					 <b>Logistics Support:</b> Offer support for travel logistics which includes booking flights, securing transportation from the airport, and ensuring that the teachers have essential travel information.</p>


    					 <Image fluid src="./images/House.png" height="auto" width="90px" loading="lazy" className={`${PagesCss.disappearinglogo} d-lg-none d-block mx-auto pt-sm-3`} />
    					 <p className={`${PagesCss.teachersbenefitsn} ${PagesCss.aligns} mt-lg-5 `}>
    					 <b>Housing:</b> Provide guidance to find a safe and comfortable place to live during the teaching assignment in the US.</p>

    					 <Image fluid src="./images/Financial.png" height="auto" width="90px" loading="lazy" className={`${PagesCss.disappearinglogo} d-lg-none d-block mx-auto pt-sm-3`} />
    					 <p className={`${PagesCss.teachersbenefitsn} ${PagesCss.aligns} mt-lg-5 pt-lg-3`}>
    					 <b>Financial Advice:</b> Provide guidance on opening bank accounts and filing for taxes</p>

    					 <Image fluid src="./images/OrientationTrans.png" height="auto" width="90px" loading="lazy" className={`${PagesCss.disappearinglogo} d-lg-none d-block mx-auto pt-sm-3`} />
    					 <p className={`${PagesCss.teachersbenefitsn} ${PagesCss.aligns} mt-lg-5 pt-lg-2`}>
    					 <b>Orientation and Training:</b> Provide pre-arrival and on-site orientation sessions to help acclimate to American culture, education system, and new community.</p>

    					 <Image fluid src="./images/OngoingTrans.png" height="auto" width="90px" loading="lazy" className={`${PagesCss.disappearinglogo} d-lg-none d-block mx-auto pt-sm-3`} />
    					 <p className={`${PagesCss.teachersbenefitsn} ${PagesCss.aligns} pt-lg-2 mt-lg-5`}>
    					 <b>Ongoing Support:</b> Offer continuous support throughout the teacher's assignment. Address concerns that may arise during the teaching experience.</p>

    					 <Image fluid src="./images/Family.png" height="auto" width="90px" loading="lazy" className={`${PagesCss.disappearinglogo} d-lg-none d-block mx-auto pt-sm-3`} />
    					 <p className={`${PagesCss.teachersbenefitsn} ${PagesCss.aligns} pt-lg-3 mt-lg-4`}>
    					 <b>Family Visa Application:</b> Facilitate the visa application of family members who plan to join with the teacher in the US.</p>
					</Col>
				</Row>


			</Container>
		</section>


		<section className={`${PagesCss.qualification}`}>
			<Container className={`d-lg-flex justify-content-center text-left`}>
				<Row className={`m-5`}>
					<Col lg={6} className={`${PagesCss.about2placeholder1} p-lg-5 p-2`}>
						<h2 className={`${PagesCss.about2header1} text-lg-left p-lg-3 p-1`}>Qualifications:</h2>

                        <p className={`${PagesCss.about2font1} text-lg-left`}><span className={`${PagesCss.facustom} fa fa-check-square-o`}></span> Currently teaching.</p>
                        <p className={`${PagesCss.about2font1} text-lg-left`}><span className={`${PagesCss.facustom} fa fa-check-square-o`}></span> At least Bachelor’s Degree or US Equivalent</p>    
                        <p className={`${PagesCss.about2font1} text-lg-left`}><span className={`${PagesCss.facustom} fa fa-check-square-o`}></span> Advanced proficiency in English</p>
					</Col>


					<Col lg={6} className={`${PagesCss.about2placeholder1} p-lg-5 p-2`}>
						<h2 className={`${PagesCss.about2header1} text-lg-left p-lg-3 p-1`}>Requirements:</h2>

						<p className={`${PagesCss.about2font1} text-lg-left`}><span className={`${PagesCss.facustom} fa fa-check-square-o`}></span> Transcript of Records.</p>

						<p className={`${PagesCss.about2font1} text-lg-left`}><span className={`${PagesCss.facustom} fa fa-check-square-o`}></span> Philippine Teaching License Certificate.</p>

						<p className={`${PagesCss.about2font1} text-lg-left`}><span className={`${PagesCss.facustom} fa fa-check-square-o`}></span> Employment Certificate/Verification of Employment. </p>

						<p className={`${PagesCss.about2font1} text-lg-left`}><span className={`${PagesCss.facustom} fa fa-check-square-o`}></span> Criminal Record Check. </p>

						<p className={`${PagesCss.about2font1} text-lg-left`}><span className={`${PagesCss.facustom} fa fa-check-square-o`}></span> Three Letters of recommendation. </p>

						<p className={`${PagesCss.about2font1} text-lg-left`}><span className={`${PagesCss.facustom} fa fa-check-square-o`}></span> Certificate of Good Moral Character. </p>
					</Col>
				</Row>

			</Container>
		</section>
		</>
		}
		</>
	)
}