import { Carousel, Container, Button } from "react-bootstrap"

const Banner = (dataJson) => {

    return (
        <section id='banner' className="">
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
                        <Button>Get Started</Button>
                        <Button>Our Projects</Button>
                    </Container>
                </Container>

            </Container >
        </section>

    )

}
export default Banner