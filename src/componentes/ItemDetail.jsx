
import React from 'react'
import { Button, Card } from 'react-bootstrap';

const ItemDetail = ({producto}) => {
    return (

      <Card className='Card' >
      <Card.Img variant="top" src={producto.image} />
      <Card.Body>
        <Card.Title>{producto.title}</Card.Title>
        <Card.Text>
          {producto.description}
         </Card.Text>
        <Card.Text className='text'>
        $ {producto.price}
        </Card.Text>
        <Button  className='btn btn-dark' variant="primary">ver detalles</Button>
      </Card.Body>
    </Card>
      
         


    );
};

export default ItemDetail;

