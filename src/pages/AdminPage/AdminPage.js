import '../../style/mainStyleAdmin.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'

import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
const AdminPage = () => {
    return (
        <section id='login'>
            <Container fluid className='background'>
                <Container className='layout'>
                    <NavBar />

                </Container>
            </Container>
        </section>
    )
}

export default AdminPage
