import React from 'react'
import Base from './Base'
import { Button, Card, CardBody, CardText, Col, Container, Input, Label, Row } from 'reactstrap'
function Certificate() {
  return (
    <Base>
       <div>
    <Container>
        <Row>
          <Col md={{
            size:6,
            offset:3
          }} >
         <Card className='border-0 shadow-sm mt-5'  color="light">
         
          <CardBody>
          <h3>Check Certificate</h3>
          

          
          <div className='mt-2'>
            <Label for='certificate'>Certificate Number</Label>
            <Input type='certificate' placeholder='Enter here' id="certificate" name='certificate'></Input>
          </div>
           
       
         
          <div>
            <Container className='text-center mt-2'>
              <Button color='primary'>Get Certificate</Button>
              <Button className='ms-2' color='warning'>Reset</Button>

            </Container>
          </div>



          </CardBody>
         </Card>
         </Col>
        </Row>
       
    </Container>


    </div>
    </Base>
 

  )
}

export default Certificate