
import React from 'react'
import { Button, Card } from 'react-bootstrap';

const ItemDetail = ({character}) => {
    return (


      <Card className='Card' >
      <Card.Img variant="top" src={character.image} />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>
        $150
         </Card.Text>
        <Card.Text className='text'>
       
        
        location: {character.location.name}
        
        </Card.Text>
        stock 50 unidades
        <Button  className='btn btn-dark' variant="primary">ver detalles</Button>
      </Card.Body>
    </Card>
      
         


    );
};

export default ItemDetail;

