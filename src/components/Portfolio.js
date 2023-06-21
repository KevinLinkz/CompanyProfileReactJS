import { useEffect, useRef, useState } from "react"
import { Col, Container, Row, Modal } from "react-bootstrap"
import Slider from "react-slick"
import dataImages from './data/dataImagesPortfolio.json'

const Portfolio = () => {
    const [showModal, setShowModal] = useState(false);
    const [sliderIndex, setSliderIndex] = useState(0);
    const onceLoad = useRef(false)

    useEffect(() => {
        if (!onceLoad.current) {
            const containersPortfolio = document.querySelectorAll('#portfolio-images .col');
            containersPortfolio.forEach(container => {
                container.addEventListener('mouseover', (event) => {
                    container.querySelector('img').classList.add('hovered-portfolio-images');
                })
                container.addEventListener('mouseout', (event) => {
                    container.querySelector('img').classList.remove('hovered-portfolio-images');
                })

            });
        }
        return () => {
            onceLoad.current = true
        }
    }, [])
    function handleModalOpen(index) {
        setSliderIndex(index)
        setShowModal(true)
    }

    function handleModalClose() {
        setShowModal(false)
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <section id="portfolio" className="wow fadeInUpBig">
            <Container >
                <Container className="header-section">
                    <h1>OUR PORTFOLIO</h1>
                    <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
                </Container>
            </Container >
            <Container fluid id="portfolio-images" className="wow fadeInUpBig">
                <Row >
                    {
                        dataImages.images.map((data, index) => {
                            return (
                                <Col key={data.id} className="col-lg-3 col-md-4">
                                    <img className="w-100" src={require(`${data.url}`)} alt={data.alt} />
                                    <div className="cover-portfolio-images" onClick={() => handleModalOpen(index)} >
                                        <div className="caption-portfolio-images">
                                            <h2>Portfolio item {index + 1}</h2>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
                <Modal show={showModal}
                    onHide={handleModalClose}
                    className='modal-image-portfolio'
                    dialogClassName='modal-image-portfolio-dialog'
                    size="lg"
                >
                    <Modal.Body>
                        <div >
                            <Slider initialSlide={sliderIndex} {...settings}>
                                {
                                    dataImages.images.map((data) => {
                                        return (
                                            <div key={data.id}>
                                                <img className="w-100" src={require(`${data.url}`)} alt={data.alt} />
                                            </div>
                                        )
                                    })
                                }

                            </Slider>
                        </div>

                    </Modal.Body>

                </Modal>
            </Container>
        </section>
    )
}
export default Portfolio