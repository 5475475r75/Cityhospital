import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function List_Apt(props) {
    const [data, setData] = useState([])
    const history_1 = useHistory()

    const getdata = () => {
        const localdata = JSON.parse(localStorage.getItem('Apt'));

        if (localStorage !== null) {
            setData(localdata)
        }
    }
    useEffect(() => {
        getdata()
    }, []);

    const deletefun = (id) => {
        const localdata = JSON.parse(localStorage.getItem('Apt'));

        const ddata = localdata.filter((m) => m.id !== id);

        localStorage.setItem('Apt', JSON.stringify(ddata));
        getdata()
    }
    const editfun = (id) => {
        history_1.push("/appointment");

    }
    return (
        <div>
            <main id="main">
                <section id="appointment" className="appointment">
                    <div className="container">
                        <div className="section-title">
                            <h2>Book an Appointment</h2>
                        </div>
                        <div className='row'>
                            <div className='col-6 text-center'>
                                <NavLink to="/appointment">
                                    <h2> Appointment</h2></NavLink>
                            </div>
                            <div className='col-6 text-center'>
                                <NavLink to="/list">
                                    <h3>List</h3></NavLink>
                            </div>
                        </div>
                        {
                            data.map((l) => {
                                return (
                                    <div key={l.id} className='col-3 d-inline-block mx-4' >
                                        <Card className=''>
                                            <CardBody className=''>
                                                <CardTitle tag="h5" className='text-primary fw-bold fs-2'>
                                                    {l.name}
                                                </CardTitle>
                                                <CardSubtitle
                                                    className="mb-2 fs-4  text-dark"
                                                    tag="h6"
                                                >
                                                    {l.date}
                                                </CardSubtitle>
                                                <CardText className='text-dark fs-4'>
                                                    {l.email}
                                                </CardText>
                                                <CardText className='text-dark fs-5'>
                                                    {l.phone}
                                                </CardText>
                                                <CardText className='text-dark '>
                                                    {l.department}
                                                </CardText>

                                                <CardText className='text-danger fw-bolder'>
                                                    {l.message}
                                                </CardText>
                                                <Button className='me-4 btn-success' onClick={() => editfun(l.id)}>
                                                    Edit
                                                </Button>
                                                <Button className='btn-success' onClick={() => deletefun(l.id)}>
                                                    Delete
                                                </Button>
                                            </CardBody>
                                        </Card>
                                    </div>
                                )
                            })
                        }

                    </div>
                </section>
            </main>
        </div>
    );
}

export default List_Apt;