import React from 'react'
import { Button, Card } from 'react-bootstrap';



const ItemDetail = ({todos})=>{
    const {title}=todos
    

  return (

        <Card className='Card' >
  <Card.Img variant="top" img src= {Image} />

  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      {}
     </Card.Text>
    <Card.Text className='text'>
    $ 150000
     {} 
    </Card.Text>
    <Button  className='btn btn-dark' variant="primary">ver detalles</Button>
  </Card.Body>
</Card>
    
  )
}

export default ItemDetail;