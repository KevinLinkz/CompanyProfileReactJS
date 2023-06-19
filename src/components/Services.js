import { Col, Container, Row } from "react-bootstrap"
import { AiOutlineBarChart, AiOutlinePicture, AiFillShopping } from "react-icons/ai"
import { FaMap } from "react-icons/fa"

const sizeIcon = 80;
const Services = () => {
    return (
        <section id="services">
            <Container >
                <Container className="header-section">
                    <h1>SERVICES</h1>
                    <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
                </Container>

                <Container id="services-box" className="wow fadeInUpBig">
                    <Row>
                        <Col className="col-lg-6">
                            <Container className="services-box-detail wow fadeInLeftBig" data-wow-duration="2s">
                                <AiOutlineBarChart size={sizeIcon} />
                                <Container className="services-box-detail-text">
                                    <h2>Lorem Ipsum</h2>
                                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident etiro rabeta lingo.</p>
                                </Container>
                            </Container>
                        </Col>
                        <Col className="col-lg-6">
                            <Container className="services-box-detail wow fadeInRightBig" data-wow-duration="2s">
                                <AiOutlinePicture size={sizeIcon} />
                                <Container className="services-box-detail-text">
                                    <h2>Dolor Sitema</h2>
                                    <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata nodera clas.</p>
                                </Container>
                            </Container>
                        </Col>
                        <Col className="col-lg-6">

                            <Container className="services-box-detail wow fadeInLeftBig" data-wow-duration="2s">
                                <AiFillShopping size={sizeIcon} />
                                <Container className="services-box-detail-text">
                                    <h2>Sed ut perspiciatis</h2>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur trinige zareta lobur trade</p>
                                </Container>
                            </Container>
                        </Col>
                        <Col className="col-lg-6">
                            <Container className="services-box-detail wow fadeInRightBig" data-wow-duration="2s">
                                <FaMap size={sizeIcon} />
                                <Container className="services-box-detail-text">
                                    <h2>Magni Dolores</h2>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum rideta zanox satirente madera</p>
                                </Container>
                            </Container>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col>
                            <Container className="services-box-detail wow fadeInLeftBig" data-wow-duration="2s">
                                <AiOutlineBarChart size={sizeIcon} />
                                <Container className="services-box-detail-text">
                                    <h2>Lorem Ipsum</h2>
                                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident etiro rabeta lingo.</p>
                                </Container>
                            </Container>
                            <Container className="services-box-detail wow fadeInRightBig" data-wow-duration="2s">
                                <AiOutlinePicture size={sizeIcon} />
                                <Container className="services-box-detail-text">
                                    <h2>Dolor Sitema</h2>
                                    <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata nodera clas.</p>
                                </Container>
                            </Container>
                            <Container className="services-box-detail wow fadeInLeftBig" data-wow-duration="2s">
                                <AiFillShopping size={sizeIcon} />
                                <Container className="services-box-detail-text">
                                    <h2>Sed ut perspiciatis</h2>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur trinige zareta lobur trade</p>
                                </Container>
                            </Container>

                            <Container className="services-box-detail wow fadeInRightBig" data-wow-duration="2s">
                                <FaMap size={sizeIcon} />
                                <Container className="services-box-detail-text">
                                    <h2>Magni Dolores</h2>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum rideta zanox satirente madera</p>
                                </Container>
                            </Container>
                        </Col>
                    </Row> */}
                </Container>
            </Container>
        </section>
    )
}
export default Services