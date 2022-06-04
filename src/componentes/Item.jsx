import React from 'react'
import { Button, Card } from 'react-bootstrap';

const Item = ({resultado})=>{
    const {image,title,description,price}=resultado
    

  return (

        <Card className='Card' >
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      {description}
     
    </Card.Text>
    <Card.Text>
    $ {price}
    </Card.Text>
    <Button variant="primary">ver detalles</Button>
  </Card.Body>
</Card>
    
  )
}

export default Item;