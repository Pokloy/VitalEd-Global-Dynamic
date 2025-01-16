import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";


export default function EditUser({ userId, allUser }) {

   const [username, setUsername] = useState();
   const [password, setPassword] = useState();

    const [showEdit, setShowEdit] = useState(false);


    const editProduct = (e, userId) => {
    	e.preventDefault();

    	fetch(`${process.env.REACT_APP_API_URL}/users/${userId}/update`,{
    		method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                username:username,
                password:password
            })
    	})
    	.then(res => res.json())


    	.then(data => {

            if(data === true) {
                Swal.fire({
                    title: 'Success!',
                    icon: 'success',
                    text: 'Product successfully updated'
                })
                allUser();
                closeEdit();
            } else {
                Swal.fire({
                    title: 'Error!',
                    icon: 'error',
                    text: 'Please try again'
                })
                closeEdit();
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


    //UPDATE
    const openEdit = (userId) => {

    	fetch(`http://localhost:4000/users/${userId}/details`,{
    		method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
    	})
    	.then(res => res.json())
    	.then(data => {

    		setUsername(data.username);
    		setPassword(data.password);
    	})
    	setShowEdit(true);
    }


    const closeEdit = () => {
    		setShowEdit(false);
            setUsername("");
            setPassword("");
    }



    return (
    	<>
        <Button variant="primary" size="sm" onClick={() => openEdit(userId)}>Edit</Button>

            <Modal show={showEdit} onHide={closeEdit}>
                <Form onSubmit={e => editProduct(e, userId)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>    



                        <Form.Group controlId="courseName">
                            <Form.Label className="mt-2">Username</Form.Label>
                            <Form.Control
                                
                                type="text"
                                required
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                />
                        </Form.Group>


                        <Form.Group controlId="courseDescription">
                            <Form.Label className="my-2">Password</Form.Label>
                            <Form.Control
                                
                                type="text"
                                required
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                />
                        </Form.Group>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" size="sm" onClick={closeEdit}>Close</Button>
                        <Button variant="success" type="submit">Submit</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
    	</>

    )
}


