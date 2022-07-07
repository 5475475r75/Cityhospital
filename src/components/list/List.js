import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button  } from 'reactstrap';

function List({ data, id }) {
    return (
        <div className=''>
             <div className='col-3'>
            {
                data.map((o, i) => {
                    return (
                        <Card key={i}
                        >
                            <CardBody>
                                <CardTitle tag="h5">
                                    {o.name}
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    {o.quantity}
                                </CardSubtitle>
                                <CardText>
                                    {o.expiry}
                                </CardText>
                                <Button onClick={() => {id(o.id)}}>
                                    Button
                                </Button>
                            </CardBody>
                        </Card>
                    )
                })
            }
        </div>
        </div>
       
    );
}

export default List;