import React from 'react'
import { Button, Card, CardBody, CardText, Col, Container, Input, Label, Row } from 'reactstrap'
import Base from './Base'

function Signup() {
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
          <h3>Register Here!!</h3>
          <div className='mb-2 mt-1'>
            <Label for='firstName'>FirstName</Label>
            <Input type='text' placeholder='Enter here' id="firstName" name='firstName'></Input>
          </div>

          <div>
            <Label for='lastName'>LastName</Label>
            <Input type='text' placeholder='Enter here' id="lastName" name='lastName'></Input>
          </div>
          
          <div className='mt-2'>
            <Label for='email'>Email Id</Label>
            <Input type='email' placeholder='Enter here' id="email" name='email'></Input>
          </div>
          
          <div className='mt-2'>
            <Label for='password'>Password</Label>
            <Input type='password' placeholder='Enter here' id="password" name='password'></Input>
          </div>

          
          <div className='mt-2'>
            <Label for='phone'>Mobile No.</Label>
            <Input type='phone' placeholder='Enter here' id="phone" name='phone'></Input>
          </div>

          
          <div className='mt-3'>
            <Label for='gender'>Gender</Label>
            <Input type='radio' id="gender" name='gender' value={'Male'} className="ms-2">Male</Input>
            <Label>Male</Label>
            <Input type='radio' id="gender" name='gender' value={'Female'} className="ms-2">Female</Input>
            <Label>Female</Label>
          </div>

          <div>
            <Container className='text-center mt-2'>
              <Button color='primary'>Register</Button>
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

export default Signup