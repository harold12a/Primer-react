import React from 'react'
import { Button, Card } from 'react-bootstrap';

const Item = ({resultado})=>{
    const {Title,description,price}=resultado
    

  return (

        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src />
  <Card.Body>
    <Card.Title>{Title}</Card.Title>
    <Card.Text>
      description={description}
      price={price}
    </Card.Text>
    <Button variant="primary">ver detalles</Button>
  </Card.Body>
</Card>
    
  )
}

export default Item;