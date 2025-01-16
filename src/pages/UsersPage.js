import { Table, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import EditUser from '../components/EditUser'


export default function AllUserPage() {

  const [userData, setUserData] = useState([]);
 
  
  const allUser = () => {
    const token = localStorage.getItem('token')
    fetch(`${process.env.REACT_APP_API_URL}/users/`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })

    .then(res => res.json()) 
    .then(data => {
	       const usersTable = data.map(user => {
	        return (
	          <tr key={user._id}>
	            <td className='px-4'>{user._id}</td>
	            <td className='px-4'>{user.username}</td>
	            <td className='px-4'>{user.password}</td>
              <EditUser userId={user._id} allUser={allUser}/>
	          </tr>
	        );
	      });
	     setUserData(usersTable);
      });
  };


  useEffect(() => {
  		allUser();
  }, []);


  
  return (
    <>
      <div className="container my-5">
        <div className='text-center mb-4'>
          <h1>All Users</h1>
        </div>
        <Table striped bordered hover responsive>
          <thead>
            <tr className="text-center">
              <th>ID</th>
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData}
          </tbody>
        </Table>
      </div>
    </>
  );
}
