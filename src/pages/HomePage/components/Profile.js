import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap"
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const imgProfile = require('./assets/img/about-img.jpg')
const Profile = () => {
    return (
        <section id="profile" className="wow fadeInUpBig" data-wow-duration="1s">
            <Container>
                <Row>
                    <Col className="col-lg-6 col-md-12">
                        <Container>
                            <img src={imgProfile} alt="profile"></img>
                        </Container>
                    </Col>
                    <Col className="col-lg-6 col-md-12">
                        <Container id="profile-detail">
                            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing</h1>
                            <h3>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                            <ListGroup className="custom-list-group">
                                <ListGroupItem><IoMdCheckmarkCircleOutline size={25} /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</ListGroupItem>
                                <ListGroupItem><IoMdCheckmarkCircleOutline size={25} /> Duis aute irure dolor in reprehenderit in voluptate velit.</ListGroupItem>
                                <ListGroupItem><IoMdCheckmarkCircleOutline size={25} /> Ullamco laboris nisi ut aliquip ex
                                    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                                </ListGroupItem>
                            </ListGroup>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Profile