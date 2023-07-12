import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

const TopBarForm = () => {
    return (
        <>
            <div className='top-bar'>
                <h5>Top Bar Form</h5>
            </div>
            <Form>
                <Form.Group controlId='test' >
                    <Row className="">
                        <Col className='col-lg-4'><Form.Label>URL twitter</Form.Label></Col>
                        <Col className='col-lg-4'>
                            <Form.Control
                                type="text"
                                defaultValue="Otto"
                                placeholder='Url Twitter'>
                            </Form.Control>
                        </Col>

                    </Row>
                </Form.Group>
            </Form>
        </>
    )
}

export default TopBarForm