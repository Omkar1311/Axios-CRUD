import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

function Update({ openModal, setopenModal, id, fname, lname, getData }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

  

    const updateAPIData = async (e) => {
        e.preventDefault();
        await axios.put(`https://622ed4965c86fd315eb5d8e4.mockapi.io/fakeData/${id}`, {
            firstName,
            lastName,
            checkbox
        })
        setopenModal(false)
        getData()
    }

    return (
        <div className='container'>
         <Modal show={openModal} className='p-5'>
         <Form className="create-form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="first name" 
                    defaultValue={fname}
                    onChange={(e) => setFirstName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="last Name" 
                    defaultValue={lname}
                    onChange={(e) => setLastName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" checked={checkbox} onChange={() => setCheckbox(!checkbox)} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(e)=>{updateAPIData(e)}}>Submit</Button>
                    
                <Button variant="danger" type="submit" onClick={(e)=>{setopenModal(false)}}>Close</Button>
            </Form>
         </Modal>
        </div>
    )
}

export default Update