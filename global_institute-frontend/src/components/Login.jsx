import React from 'react'
import Base from './Base'
import { Button, Card, CardBody, CardText, Col, Container, Input, Label, Row } from 'reactstrap'
function Login() {
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
          <h3>Login Here!!</h3>
          

          
          <div className='mt-2'>
            <Label for='email'>Email Id</Label>
            <Input type='email' placeholder='Enter here' id="email" name='email'></Input>
          </div>
           
          <div className='mt-2'>
            <Label for='password'>Password</Label>
            <Input type='password' placeholder='Enter here' id="password" name='password'></Input>
          </div>



          <div>
            <Container className='text-center mt-2'>
              <Button color='primary'>Login</Button>
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

export default Login