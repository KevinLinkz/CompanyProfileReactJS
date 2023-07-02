import { Carousel, Container, Button } from "react-bootstrap"
import { Link } from "react-scroll"

const Banner = (dataJson) => {

    const propLink = {
        spy: true,
        smooth: 'easeInOutQuint',
        offset: -100,
        duration: 100,
    }
    return (
        <section id='banner'>
            <Container fluid >
                <Carousel className="carousel-banner" interval={4000} fade={true}>
                    {
                        dataJson.data.images.map((data) => {
                            return (
                                <Carousel.Item key={data.id}>
                                    <img className="d-block w-100" src={require(`${data.url}`)} alt={data.alt} />
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
                <Container className="intro-banner" fluid>
                    <Container className="intro-banner-content">
                        <h1>Making <span>your ideas</span></h1>
                        <h1>happen!</h1>
                        <Link {...propLink} to="profile"><Button>Get Started</Button></Link>
                        <Link {...propLink} to="portfolio"><Button>Our Projects</Button></Link>
                    </Container>
                </Container>

            </Container >
        </section>

    )

}
export default Banner