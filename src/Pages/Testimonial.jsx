import React, { useContext } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import themeContext from "../Theme/ThemeContext";
import './Test.css'
const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const { isDark} = useContext(themeContext);

    return (
        <section id="client" className="pt-0" >
            <div className="container">
                <div className="title text-center" data-aos="fade-up">
                    <br />
                    <header className="text-center my-4">
                                <h5 className="mx-auto my-4 font-bold" style={{color:"#3090f0"}}><b>TESTIMONIALS</b></h5>
                            </header>
                    
                </div>
                <Slider {...settings} style={{display:" flex"}}>
                    <TestimonialCard
                        name="Teresa May"
                        position="Founder at ET Company"
                        quote="Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat
                        ad velit ab hic tenetur Quod eos idQuod eos id ."
                        avatarSrc="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                        rating={4.5}
                    />
                    <TestimonialCard
                        name="Maggie McLoan"
                        position="Photographer at Studio LA"
                        quote="Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat
                        ad velit ab hic tenetur Quod eos idQuod eos id ."
                        avatarSrc="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp"
                        rating={5}
                    />
                    <TestimonialCard
                        name="Alexa Horwitz"
                        position="Front-end Developer in NY"
                        quote="Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat
                        ad velit ab hic tenetur Quod eos idQuod eos id ."
                        avatarSrc="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"
                        rating={4}
                    />
                     <TestimonialCard
                        name="Alexa Horwitz"
                        position="Front-end Developer in NY"
                        quote="Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat
                        ad velit ab hic tenetur Quod eos idQuod eos id ."
                        avatarSrc="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"
                        rating={4}
                    />
                     <TestimonialCard
                        name="Alexa Horwitz"
                        position="Front-end Developer in NY"
                        quote="Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat
                        ad velit ab hic tenetur Quod eos idQuod eos id ."
                        avatarSrc="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"
                        rating={4}
                    />
                     <TestimonialCard
                        name="Alexa Horwitz"
                        position="Front-end Developer in NY"
                        quote="Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat
                        ad velit ab hic tenetur Quod eos idQuod eos id ."
                        avatarSrc="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"
                        rating={4}
                    />
                </Slider>
            </div>
            <br/>
            
        </section>
    );
};

const TestimonialCard = ({ name, position, quote, avatarSrc, rating }) => (

    <div className="card-body py-4 mt-2" >
        <div className="d-flex justify-content-center mb-4">
            <div class="col-md-4 mb-4 mb-md-0">
                <div class="card" style={{borderRadius: '15px'}}>
                <div class="card-body py-4 mt-2" >
                        <div class="d-flex justify-content-center mb-4" >
                            <img src={avatarSrc} alt={name}
                                class="rounded-circle shadow-1-strong" width="100" height="100" />
                        </div>
                        <h5 class="font-weight-bold">{name}</h5>
                        <h6 class="font-weight-bold my-3">{position}</h6>
                        <ul class="list-unstyled d-flex justify-content-center">
                            <li>
                                <i class="fas fa-star fa-sm text-info"></i>
                            </li>
                            <li>
                                <i class="fas fa-star fa-sm text-info"></i>
                            </li>
                            <li>
                                <i class="fas fa-star fa-sm text-info"></i>
                            </li>
                            <li>
                                <i class="fas fa-star fa-sm text-info"></i>
                            </li>
                            <li>
                                <i class="fas fa-star-half-alt fa-sm text-info"></i>
                            </li>
                        </ul>
                        <p class="mb-2">
                            <i class="fas fa-quote-left pe-2"></i>{quote}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Testimonial;
