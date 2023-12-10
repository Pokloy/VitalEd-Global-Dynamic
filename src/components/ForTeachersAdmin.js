import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PagesCss from './Components2.module.css';
import { useState, useEffect } from 'react';
import Swal from "sweetalert2";


export default function ForTeachers() {
	const [id, setId] = useState();
	const [subHead, setSubHead] = useState("");


	const showSubHeadings = () => {
		const token = localStorage.getItem('token')
		
		fetch(`${process.env.REACT_APP_API_URL}/forteachers/`,{
			method: 'GET',
			 headers: {
	        'Content-Type': 'application/json',
	        'Authorization': `Bearer ${token}`
	      	}
		})
		.then(res => res.json())
		.then(data => {
			const dataSubhead = data.map((result) => {
				return result.ftSubHead;
			})
			const firstSubHed = dataSubhead[0];
			setSubHead(firstSubHed);

			const dataId = data.map((result) => {
				return result._id;
			})
			const firstId = dataId[0];
			setId(firstId);

		})
	  	.catch(err => {
			Swal.fire({
	        title: 'SERVER Error!',
	        icon: 'error',
	        text: 'Backend Data not recieved!'
        })
	})
	} 



	const updateSubHeadings = (e, id) => {
		e.preventDefault();
		const token = localStorage.getItem('token')
		
		fetch(`${process.env.REACT_APP_API_URL}/forteachers/${id}/update` ,{
			method: 'PATCH',
			headers: {
	        'Content-Type': 'application/json',
	        'Authorization': `Bearer ${token}`
	      	},
	      	body: JSON.stringify({
      		ftSubHead: subHead
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
		<section className={PagesCss.landingforteachers}>
			<Container className="p-5">
				<Row>
				   <Col lg={8} sm={12} className="d-flex flex-column justify-content-center mt-4 pt-3 align-items-lg-start align-items-center">
				   		<p className={`${PagesCss.aboutusfont1} mt-5 text-center`}>For Teachers</p>
				   </Col>
				</Row>
			</Container>
		</section>

		<section className={PagesCss.mission}>
			<Container className="p-lg-5">
                <Form onSubmit={e => updateSubHeadings(e, id)}>
			      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
			        <Form.Label className={`${PagesCss.landingfont}`}>For Teachers Sub Heading</Form.Label>
			        <Form.Control 
			        as="textarea" 
			        rows={12} 
		    		value={subHead} 
		    		onChange={e => setSubHead(e.target.value)}
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

