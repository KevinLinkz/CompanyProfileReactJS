import { faFacebook, faGooglePlus, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap"


const OurTeams = (dataJson) => {
    return (
        <section id="our-teams" className="wow fadeInUpBig">
            <Container >
                <Container className="header-section">
                    <h1>OUR TEAMS</h1>
                    <Row>
                        {
                            dataJson.data.teams.map((data) => {
                                return (
                                    <Col key={data.id} className="col-lg-3 col-md-6 col-12">
                                        <div className="item">
                                            <img alt={data.alt} src={require(`${data.imageURL}`)}></img>
                                            <div className="item-details">
                                                <h3>{data.name}</h3>
                                                <h4>{data.position}</h4>
                                                <div className="icons">
                                                    <a href={data.hrefTwitter} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                                                    <a href={data.hrefFacebook} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                                                    <a href={data.hrefGoggle} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGooglePlus} /></a>
                                                    <a href={data.hrefLinkedIn} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }


                    </Row>
                </Container>
            </Container>
        </section >
    )
}
export default OurTeams