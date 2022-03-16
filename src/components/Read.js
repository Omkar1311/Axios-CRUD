import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Update from './Update';

function Read() {
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    const [openModal, setopenModal] = useState(false)
    const [id, setid] = useState()
    const [fname, setfname] = useState()
    const [lname, setlname] = useState()

    const setData = ( id, fname, lname) => {
        setid(id)
        setfname(fname)
        setlname(lname)
        setopenModal(true)
        }


        const getData = () => {
            axios.get(`https://622ed4965c86fd315eb5d8e4.mockapi.io/fakeData`)
            .then((getData) => {
                setAPIData(getData.data);
            })
        }
        
        const onDelete = (id) => {
            axios.delete(`https://622ed4965c86fd315eb5d8e4.mockapi.io/fakeData/${id}`)
                .then(() => {
                    getData();
                })
        }


    return (
        <div>
        <h1>Crud Opeartion Using Axios</h1>
            <Table bordered style={{color:'white'}}>
                <thead>
                    <tr>

                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>CheckBox</th>
                        <th>Update</th>
                        <th>Delete</th>
                        <th><Link to='/' ><Button variant='success'>Add</Button></Link></th>
                    </tr>
                </thead>
                <tbody>
                    {APIData.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td>{data.firstName}</td>
                                <td>{data.lastName}</td>
                                <td>{data.checkbox ? 'Checked' : 'Unchecked'}</td>
                                <td><Button className='btn btn-primary' onClick={() => setData( data.id, data.firstName, data.lastName)}>Update</Button></td>
                               <td> <Button variant='danger' onClick={() => onDelete(data.id)}>Delete</Button></td>
                               <td></td>
                            </tr>
                        )
                    })}
                </tbody>

            </Table>

            {
                APIData && 
                <Update getData={getData} openModal={openModal} setopenModal={setopenModal} id={id && id} fname={fname && fname } lname={lname && lname} />
            }
        </div>
    )
}

export default Read