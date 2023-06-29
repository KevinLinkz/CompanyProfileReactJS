import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { CiLocationOn } from 'react-icons/ci'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

const sizeIcon = 40;
const ContactUs = () => {
    return (
        <section id="contact-us" className="wow fadeInUpBig">
            <Container >
                <Container className="header-section">
                    <h1>CONTACT US</h1>
                    <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
                </Container>
                <Container className="items">
                    <Row>
                        <Col className="col-lg-4 col-md-4 col-12">
                            <div className="item">
                                <CiLocationOn size={sizeIcon} />
                                <h3>ADDRESS</h3>
                                <p>A108 Adam Street, NY 535022, USA</p>
                            </div>
                        </Col>
                        <Col className="col-lg-4 col-md-4 col-12">
                            <div className="item">
                                <BsTelephone size={sizeIcon} />
                                <h3>PHONE NUMBER</h3>
                                <a href="/" ><p>+1 5589 55488 55</p></a>
                            </div>
                        </Col>
                        <Col className="col-lg-4 col-md-4 col-12">
                            <div className="item">
                                <AiOutlineMail size={sizeIcon} />
                                <h3>EMAIL</h3>

                                <a href="/" ><p>info@example.com</p></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <iframe
                    title="Share Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423029.37385365256!2d-118.22294592220133!3d34.072380598603914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20California%2C%20Amerika%20Serikat!5e0!3m2!1sid!2sid!4v1686964723656!5m2!1sid!2sid"
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex="0"
                />

                <Form className="form">
                    <Form.Group controlId="formBasicEmails">
                        <Row>
                            <Col><Form.Control type="text" placeholder="Your Name" /></Col>
                            <Col><Form.Control type="email" placeholder="Your Email" /></Col>
                        </Row>
                        <Row>
                            <Col><Form.Control type="text" placeholder="Subject" /></Col>
                        </Row>
                        <Row>
                            <Col><Form.Control as="textarea" rows={5} placeholder="Message" /></Col>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-center">
                                <Button variant="primary" type="submit">
                                    Send Message
                                </Button>
                            </Col>
                        </Row>

                    </Form.Group>

                </Form>

            </Container >
        </section>
    )

}
export default ContactUs