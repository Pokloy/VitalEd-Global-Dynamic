import Components2 from './PagesCss.module.css';
import { Container, Row, Image } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { useState, useEffect } from 'react';



import HomeAdmin from '../components/HomeAdmin';


export default function Home() {

	const token = localStorage.getItem('token')
	const [heading, setHeading] = useState("");
	const [subHeading, setSubHeading] = useState("");
	const defaultHeadString = <p className={`${Components2.landingfont} mt-5 text-center text-lg-left`}>Your Gateway to Global Teaching Adventures: Unlocking Potential, Embracing Culture.</p>
	const defaultSubHeadString = <p className={`${Components2.missionfontn} text-justify p-5`}>Our mission is to <b>unlock the full potential</b> of educators by providing them with <b>opportunities to teach and grow</b> on an international stage. We are committed to facilitating the exchange of knowledge and the <b>appreciation of diverse cultures.</b> Our journey is about more than just teaching; it's about embracing new horizons, cultures, and experiences. We believe that by <b>connecting educators with unique global teaching adventures</b>, we are not just shaping careers but fostering a broader understanding of the world. <b>Join us in this remarkable journey</b>, where teaching <b>transcends borders, and culture</b> becomes a classroom in itself.</p>



	const showSubHeadings = () => {
	const token = localStorage.getItem('token')
		fetch(`${process.env.REACT_APP_API_URL}/home/`,{
			 method: 'GET',
			 headers: {
	        'Content-Type': 'application/json',
	        'Authorization': `Bearer ${token}`
	      	}
		})
		.then(res => res.json())
		.then(data => {
            const datahead = (
					<p className={`${Components2.landingfont} mt-5 text-center text-lg-left`}>
					{ <div dangerouslySetInnerHTML={{ __html: data[0]?.homeHead || ""}} />}
					</p>
					) ;
            setHeading(datahead);

            const dataSubHead =  (
                <p className={`${Components2.missionfontn} text-justify p-5`}>{<div dangerouslySetInnerHTML={{ __html: data[0]?.missionSubHead || ""}} />}</p>
            	);
            setSubHeading(dataSubHead);
		})
	}




	useEffect(() => {
		showSubHeadings();
	},[])

	return(
		<>
		{
			(token !== null)?
			<HomeAdmin/>
			:
			<>
					<section className={`${Components2.landing}`}>
						<Container>
							<Row>
				                <div className="col-lg-8 col-12 d-flex flex-column justify-content-center mt-lg-4 pt-lg-3 align-items-lg-start align-items-center">
				                {(heading !== "") ? heading : defaultHeadString}
			                    </div>
							</Row>
						</Container>
					</section>

					<section className={`${Components2.mission}`}>
						<Container className="px-lg-5">
							<Row>
								{(subHeading !== "") ? subHeading : defaultSubHeadString}
							</Row>
						</Container>
					</section>

					<section className="apply d-flex justify-content-center align-items-center">
						<Container className="px-lg-5 mx-lg-5">
							<Row>
								<div className="col-lg-6 col-12 d-flex flex-column align-items-center p-5">
									<Image fluid src="./images/teacher.png" alt="Services for Teachers" width="250" height="225" />
				                    <Nav.Link target="_blank" as={NavLink} to="https://docs.google.com/forms/d/e/1FAIpQLSeZWWi_qj2qDnhAXv_nyEXPGMPJXGfD1pUW_RRU4t6LsiSfTQ/viewform?usp=sf_link" exact>
			                    	<button className={`${Components2.servicesButton} mt-3 mt-lg-0`}  type="button" >Apply to Teach in the US</button>
			                    	</Nav.Link >
			                    	<Nav.Link target="_blank" as={NavLink} to="">
			                    		<p className={`${Components2.serviceFont} text-center`}>Learn about our Services for Teachers</p>
			                    	</Nav.Link >
								</div>


								<div class="col-lg-6 col-12 d-flex flex-column align-items-center p-5 ">
									<Image fluid src="./images/school.png" alt="Services for Schools"  width="330" height="225" />
									<Nav.Link target="_blank" as={NavLink} to="https://docs.google.com/forms/d/e/1FAIpQLSePbc4mHuyirpSCRdCWbU7AI1c_R7gCJm2zOkHDz1ANwk8pZQ/viewform?usp=sf_link" exact>
									<button className={`${Components2.servicesButton} mt-3 mt-lg-0`}  type="button" >Request for Information</button>
									</Nav.Link >
			                    	<Nav.Link target="_blank" as={NavLink} to="">
			                    		<p className={`${Components2.serviceFont} text-center`}>Learn about our Services for Schools</p>
			                    	</Nav.Link >
								</div>
							</Row>
						</Container>
					</section>
			</> 
		}
		</>
	)
}