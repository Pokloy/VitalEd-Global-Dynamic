import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PagesCss from './Components2.module.css';
import Swal from "sweetalert2";
import { useState, useEffect } from 'react';



export default function AboutUs() {
	const [firstsubHead, setFirstSubHead] = useState("");
	const [firstId, setFirstId] = useState();

	const [secondsubHead, setsecondsubHead] = useState("");
	const [secondId, setSecondId] = useState();

	const [subHeadData, setsubHeadData] = useState();



	const showSubHeadings = () => {
		const token = localStorage.getItem('token')
		
		fetch(`${process.env.REACT_APP_API_URL}/aboutus/`,{
			 method: 'GET',
			 headers: {
	        'Content-Type': 'application/json',
	        'Authorization': `Bearer ${token}`
	      	}
		})
		.then(res => res.json())
		.then(data => {

			const dataSubhead = data.map((result) => {
				return result.auSubHead;
			})
			const firstSubHed = dataSubhead[0];
			setFirstSubHead(firstSubHed);
			const secondSubHed = dataSubhead[1];
			setsecondsubHead(secondSubHed);



			const dataId = data.map((result) => {
				return result._id;
			})
			const firstId = dataId[0];
			setFirstId(firstId);
			const secondId = dataId[1];
			setSecondId(secondId);

		})
	}




		const updateSubHeadings = (e, id, subHead) => {
		e.preventDefault();
		const token = localStorage.getItem('token')
		fetch(`${process.env.REACT_APP_API_URL}/aboutus/${id}/update` ,{
			method: 'PATCH',
			headers: {
	        'Content-Type': 'application/json',
	        'Authorization': `Bearer ${token}`
	      	},
	      	body: JSON.stringify({
      		auSubHead: subHead
	      	})
		})
		.then(res => res.json())
		.then(data => {
			if(data === true){
	            Swal.fire({
	                title: 'Success!',
	                icon: 'success',
	                text: 'Product successfully updated'
	            })
			} else {
                Swal.fire({
                    title: 'Error!',
                    icon: 'error',
                    text: 'Please try again'
                })
			}
		})

	}




	useEffect(() => {
		showSubHeadings();
	},[])




	return(
		<>
		<section className={`${PagesCss.landingaboutus}`}>
			<Container>
				<Row>
				   <Col lg={8} xs={12} className="d-flex flex-column justify-content-center mt-4 pt-3 align-items-lg-start align-items-center">
				      	<p className={`${PagesCss.aboutusfont1} mt-5 text-center px-5`}>
				      		About Us
				      	</p>
				    </Col>
				</Row>
			</Container>
		</section>

		<section className={`${PagesCss.Aboutus1}`}>
			<Container className="p-5">
			
                    <Form onSubmit={e => updateSubHeadings(e, firstId, firstsubHead)}>
				      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
				        <Form.Label className={`${PagesCss.aboutusAdminfont}`}>About Us Sub Heading 1</Form.Label>
				        <Form.Control 
				        as="textarea" 
				        rows={12} 
				        value={firstsubHead}
				        onChange={e => setFirstSubHead(e.target.value)}
				        />
				      </Form.Group>
			            <Button variant="primary" type="submit">
        					Submit
     	 				</Button>
				    </Form>


		     
                    <Form onSubmit={e => updateSubHeadings(e, secondId, secondsubHead)}>
				      <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
				         <Form.Label className={`${PagesCss.aboutusAdminfont}`}>About Us Sub Heading 2</Form.Label>
			         	<Form.Control 
			         	className="mt-3"
				        as="textarea" 
				        rows={12} 
				        value={secondsubHead}
				        onChange={e => setsecondsubHead(e.target.value)}
				        />
				      </Form.Group>
			            <Button variant="primary" type="submit">
        					Submit
     	 				</Button>
				    </Form>
			</Container>
		</section>
		</>
	)
}






