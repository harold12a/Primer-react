import React from 'react'
import { Button, Card } from 'react-bootstrap';



const ItemDetail = ({todos})=>{
    const {domain_name,category_name,domain_id}=todos
    

  return (

        <Card className='Card' >
  <Card.Img variant="top"  />

  <Card.Body>
    <Card.Title>{domain_id}</Card.Title>
    <Card.Text>
      {domain_name}
     </Card.Text>
    <Card.Text className='text'>
    $ 150000
     {category_name} 
    </Card.Text>
    <Button  className='btn btn-dark' variant="primary">ver detalles</Button>
  </Card.Body>
</Card>
    
  )
}

export default ItemDetail;