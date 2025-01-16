import { Container, Row, Button, Form } from 'react-bootstrap';
import PagesCss from './Components2.module.css';
import { useState, useEffect } from 'react';
import Swal from "sweetalert2";


export default function HomeAdmin() {
	const [id, setId] = useState();
	const [head, setHead] = useState("");
	const [subHead, setSubHead] = useState("");


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
			const dataHead = (
				data[0]?.homeHead || ""
			)
			const firstHead = dataHead;
			setHead(firstHead);

			const dataSubhead = (
				data[0]?.missionSubHead || ""
			)
			const firstSubHead = dataSubhead;
			setSubHead(firstSubHead);

			const dataId = (
				data[0]?._id || ""
			)
			const firstId = dataId;
			setId(firstId);
		})
	} 



	const updateSubHeadings = (e, id) => {
		e.preventDefault();
		const token = localStorage.getItem('token')
		
		fetch(`${process.env.REACT_APP_API_URL}/home/${id}/update` ,{
			method: 'PATCH',
			headers: {
	        'Content-Type': 'application/json',
	        'Authorization': `Bearer ${token}`
	      	},
	      	body: JSON.stringify({
      		homeHead: head,
      		missionSubHead: subHead
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



	return(
		<>
		<section className={`${PagesCss.landing}`}>
			<Container>
				<Row>
	        
                    <Form onSubmit={e => updateSubHeadings(e, id)}> 
				      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
				        <Form.Label className={`${PagesCss.landingfont}`}>Home Landing Page</Form.Label>
				        <Form.Control 
				        as="textarea" 
				        rows={12} 
				        value={head}
				        onChange={e => setHead(e.target.value)}
				        />
				      </Form.Group>
			            <Button variant="primary" type="submit">
        					Submit
     	 				</Button>
				    </Form>
                    
				</Row>
			</Container>
		</section>

		<section className={`${PagesCss.mission}`}>
			<Container className="px-lg-5">
				<Row>
                    <Form onSubmit={e => updateSubHeadings(e, id)}>
				      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
				        <Form.Label className={`${PagesCss.landingfont}`}>Home Sub Heading Landing Page</Form.Label>
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
				</Row>
			</Container>
		</section>

		</>
	)
}