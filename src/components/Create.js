import React from 'react'
// import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { Formik } from 'formik';
// import {FormHelperText} from '@material-ui/core';

function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const history = useHistory()
    const initialValues = { firstName: '', lastName: '', checkbox }

    const postData=async (e)=>{
        if (!firstName && !lastName) {
            alert('Should not be empty')
        }
        else {
            // const postData = async (e) => {
            e.preventDefault();
            const res = await axios.post(`https://622ed4965c86fd315eb5d8e4.mockapi.io/fakeData`, {
                firstName,
                lastName,
                checkbox
            })
            console.log("====================", res)
            history.push('/read')
        }
        // postData()
    }
    // }
    const schema = yup.object().shape({
        firstName: yup.string().min(3).required(),
        lastName: yup.string().min(3).required(),
    })

    return (
        <div>
            <Formik
                validationSchema={schema}
                // onSubmit={postData}
                initialValues={initialValues}>
                {(props) => (
                    <Form className="create-form">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="first name"
                                name="firstName"
                                onChange={(e) => { setFirstName(e.target.value) }}  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="last Name"
                                onChange={(e) => setLastName(e.target.value)}
                                name='lastName'
                               />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" onChange={(e) => setCheckbox(!checkbox)} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={(e) => { postData(e) }}>
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Create