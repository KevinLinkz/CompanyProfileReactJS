import { Container } from "react-bootstrap"
import Slider from "react-slick"
import dataClients from './data/dataImagesClients.json'


const Clients = () => {
    const settings = {
        dots: true,
        dotsClass: 'custom-dots-logo',
        infinite: true,
        slidesToShow: 6,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    swipeToSlide: true,
                    infinite: true,
                    dots: true,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    swipeToSlide: true,
                    infinite: true,
                    dots: true,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                    infinite: true,
                    dots: true,
                    initialSlide: 1
                }
            }
        ]
    };
    return (
        <section id="clients" className="wow fadeInUpBig">

            <Container >
                <Container className="header-section">
                    <h1>CLIENTS</h1>
                    <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
                </Container>
                <Container className="logo-clients">
                    <Slider {...settings}>
                        {
                            dataClients.clients.map((data) => {
                                return (
                                    <div key={data.id}>
                                        <img className="d-block w-100" src={require(`${data.imageURL}`)} alt={data.alt} />
                                    </div>
                                )
                            })
                        }


                    </Slider>
                </Container>
            </Container >
        </section>
    )
}
export default Clients