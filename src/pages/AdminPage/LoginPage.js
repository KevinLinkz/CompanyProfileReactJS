import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import '../../style/mainStyleAdmin.scss'

const LoginPage = () => {
    return (
        <section id='login'>
            <Container fluid className='background'>
                <Container className='layout'>
                    <Container className='form'>


                        <Form className="form-login">
                            <Form.Group controlId="formBasicEmails">
                                <Row>
                                    <Col className='col-7'>
                                        <a href="#">
                                            <h3># DASHMIN</h3>
                                        </a>
                                    </Col>
                                    <Col><h3>Sign In</h3></Col>
                                </Row>
                                <Row>
                                    <Col><Form.Control type="email" placeholder="Email Address" /></Col>
                                </Row>
                                <Row>
                                    <Col><Form.Control type="password" placeholder="Password" /></Col>
                                </Row>
                                <Row>
                                    <Col><Form.Check type="checkbox" label="Check me out" /></Col>
                                    <Col><a href='#'>Forgot Password</a></Col>
                                </Row>
                                <Row>
                                    <Col><Button variant="primary" type="submit">
                                        Sign In
                                    </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col><span> Don't have an Account? <a href='#'>Sign Up</a></span></Col>
                                </Row>

                            </Form.Group>
                        </Form>


                    </Container>
                </Container>
            </Container>
        </section>
    )
}

export default LoginPage