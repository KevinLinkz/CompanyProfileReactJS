import { Container } from "react-bootstrap"
import Slider from "react-slick"

const img1 = require('./img/testimonial-1.jpg')
const img2 = require('./img/testimonial-2.jpg')
const img3 = require('./img/testimonial-3.jpg')
const img4 = require('./img/testimonial-4.jpg')
const img5 = require('./img/testimonial-5.jpg')

const Testimonials = () => {
    var settings = {
        dots: true,
        dotsClass: 'custom-dots-logo',
        infinite: true,
        slidesToShow: 3,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <section id="testimonials" className="wow fadeInUpBig">
            <Container >
                <Container className="header-section">
                    <h1>TESTIMONIALS</h1>
                    <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
                </Container>
                <Container id="testimonials-card">
                    <Slider {...settings}>
                        <div>
                            <div className="testimonials-card-item">
                                <p>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</p>
                                <img alt="Testimonial1" className="circle-image" src={img1} />
                                <h2>Saul Goodman</h2>
                                <h3>CEO & Founder</h3>
                            </div>
                        </div>

                        <div>
                            <div className="testimonials-card-item">
                                <p>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</p>
                                <img alt="Testimonial2" className="circle-image" src={img2} />
                                <h2>Sara Wilsson</h2>
                                <h3>Designer</h3>
                            </div>
                        </div>

                        <div>
                            <div className="testimonials-card-item">
                                <p>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</p>
                                <img alt="Testimonial3" className="circle-image" src={img3} />
                                <h2>Jena Karlis</h2>
                                <h3>Store Owner</h3>
                            </div>
                        </div>

                        <div>
                            <div className="testimonials-card-item">
                                <p>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</p>
                                <img alt="Testimonial4" className="circle-image" src={img4} />
                                <h2>Matt Brandon</h2>
                                <h3>Freelancer</h3>
                            </div>
                        </div>

                        <div>
                            <div className="testimonials-card-item">
                                <p>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.</p>
                                <img alt="Testimonial5" className="circle-image" src={img5} />
                                <h2>John Larson</h2>
                                <h3>Entrepreneur</h3>
                            </div>
                        </div>






                    </Slider>


                </Container>
            </Container >
        </section>
    )
}
export default Testimonials