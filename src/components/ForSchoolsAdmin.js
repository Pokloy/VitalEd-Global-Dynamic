import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import PagesCss from './Components2.module.css';
import Swal from "sweetalert2";

export default function ForSchools(){
	const [subHead, setSubHead] = useState("");
	const [id, setId] = useState();



	const showSubHeadings = () => {
		const token = localStorage.getItem('token')
		
		fetch(`${process.env.REACT_APP_API_URL}/forschools/`,{
			method: 'GET',
			 headers: {
	        'Content-Type': 'application/json',
	        'Authorization': `Bearer ${token}`
	      	}
		})
		.then(res => res.json())
		.then(data => {
			const dataSubhead = data.map((result) => {
				return result.fsSubHead;
			})
			const firstSubHed = dataSubhead[0];
			setSubHead(firstSubHed);
			const dataId = data.map((result) => {
				return result._id;
			})
			const firstId = dataId[0];
			setId(firstId);
		})
	}

		const updateSubHeadings = (e, id) => {
		e.preventDefault();
		const token = localStorage.getItem('token')
		
		fetch(`${process.env.REACT_APP_API_URL}/forschools/${id}/update` ,{
			method: 'PATCH',
			headers: {
	        'Content-Type': 'application/json',
	        'Authorization': `Bearer ${token}`
	      	},
	      	body: JSON.stringify({
      		fsSubHead: subHead
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
    	.catch(err => {
    		Swal.fire({
            title: 'SERVER Error!',
            icon: 'error',
            text: 'Backend Data not recieved!'
            })
    	})
	}


	useEffect(() => {
		showSubHeadings();
	},[])



	return (
		<>
			<section className={`${PagesCss.landingforschools}`}>
				<Container className="p-5">
					<Row>
				      <Col lg={8} xs={12} className="d-flex flex-column justify-content-center mt-4 pt-3 align-items-lg-start align-items-center">
	    			  	 <h1 className={`${PagesCss.aboutusfont1} mt-5 text-center`}>For Schools</h1>
	    			  </Col>
					</Row>
				</Container>
			</section>

			<section className={`${PagesCss.mission}`}>
				<Container className="p-lg-5">


	                <Form onSubmit={e => updateSubHeadings(e, id)}>
				      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
				        <Form.Label className={`${PagesCss.landingfont}`}>For Schools Sub Heading</Form.Label>
				        <Form.Control 
				        	as="textarea" 
				        	rows={10} 
				    		value={subHead} 
				    		onChange={e => setSubHead(e.target.value)}
				    		/> 
				      </Form.Group>
			            <Button variant="primary" type="submit" >
	    					Submit
	 	 				</Button>
				    </Form>	



				</Container>
			</section>
		</>
	)
}