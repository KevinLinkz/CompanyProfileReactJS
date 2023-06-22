import { Carousel, Container, Button } from "react-bootstrap"
import dataImages from './data/dataImagesBanner.json'


const Banner = () => {

    return (
        <section id='banner' className="">
            <Container fluid >
                <Carousel className="carousel-banner" interval={4000} fade={true}>
                    {
                        dataImages.images.map((data) => {
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
                        <Button style={{ backgroundColor: "#50d8af", borderColor: "#50d8af" }}>Our Projects</Button>
                    </Container>
                </Container>

            </Container >
        </section>

    )

}
export default Banner