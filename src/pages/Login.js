import { Form, Container } from 'react-bootstrap';
import PagesCss from './PagesCss.module.css';
import Card from 'react-bootstrap/Card';
import { useState, useEffect, useContext } from 'react';
import UserContext from '../UserContext';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';



export default function Login() {
	const { user, setUser } = useContext(UserContext);

	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const [isActive, setIsActive] = useState(false)



	function authenticate(e){
		e.preventDefault();
		fetch(`${process.env.REACT_APP_API_URL}/users/login`,{
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					username: username,
					password: password
				})
			})
			.then(res => res.json())
			.then(data => {

				if(typeof data.access !== "undefined"){
					localStorage.setItem('token' , data.access);

					setUser({
						access: localStorage.getItem('token'),
					})

					Swal.fire({
						title: "Login Succesful",
						icon: "success",
						text: "Welcome Admin!"
					});

				 	} 
			})
			.catch(error => {
			    console.error('There was a problem with the fetch operation:', error);
		        Swal.fire({
		            title: "Authentication failed",
		            icon: "error",
		            text: "Check your login details and try again."
		        });
			})  

		setUsername('');
		setPassword('');

	}







		useEffect(() => {
		if(username !== '' && password !== ''){
			setIsActive(true);
		} else {
			setIsActive(false);
		}
		}, [username,password]);


		return (	
			(user.id !== null) ?
			<Navigate to="/" />
			:
			<Container className="p-5 m-lg-5 m-2">
				<Card style={{ width: '30rem' }} className={`${PagesCss.about2placeholder1} mx-auto`}>
	      		  <Card.Body>
					<Form onSubmit ={(e) => authenticate(e)}>
						<div className={PagesCss.authHead}><h1 className="mb-0 pb-0 ">Login</h1></div>
						<Form.Group controlId="userEmail" className="mt-0 mb-3">
						<Form.Control
							type="text"
							placeholder="Username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required	
						/>
						</Form.Group>
						<Form.Group controlId="userPassword" className="my-3">
						<Form.Control
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required	
						/>
						</Form.Group>

						<div>
						{isActive ?
						<div className="text-center"><button type="submit" id="submitBtn" className={PagesCss.btnLogin1}>Submit</button></div>
						:
						<div className="text-center"><button type="submit" id="submitBtn" disabled className={PagesCss.loginButtonDisabled}>Submit</button></div>

						}
						</div>



{/*						<div className="text-center">
						<button type="submit" id="submitBtn" className={PagesCss.servicesButton}>Login</button>
						</div>*/}
					</Form>
			      </Card.Body>
				</Card>
			</Container>
		)
}