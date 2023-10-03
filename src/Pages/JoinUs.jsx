import React, { useState, useEffect } from 'react';
import './join.css';

const JoinUs = () => {
    const targetDate = new Date('2023/11/24').getTime(); // Set your target date here
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const timeRemaining = targetDate - now;

            if (timeRemaining <= 0) {
                clearInterval(interval);
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
                setCountdown({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div className='back'>
            <header id="header" className="d-flex align-items-center" >
                <div className="container d-flex flex-column align-items-center">
                    <h1>Coming Soon</h1>
                    <h2>We're working hard to improve our website and we'll be ready to launch after</h2>

                    <div className="countdown d-flex justify-content-center">
                        <div>
                            <h3>{countdown.days}</h3>
                            <h4>Days</h4>
                        </div>
                        <div>
                            <h3>{countdown.hours}</h3>
                            <h4>Hours</h4>
                        </div>
                        <div>
                            <h3>{countdown.minutes}</h3>
                            <h4>Minutes</h4>
                        </div>
                        <div>
                            <h3>{countdown.seconds}</h3>
                            <h4>Seconds</h4>
                        </div>

                    </div>
                    <div class="subscribe">

                        <div class="container">

                            <div class="section-title">
                                <h2>Subscribe now to get the latest updates!</h2>
                            </div>

                            <div class="row justify-content-center">


                            </div>

                            <div class="row justify-content-center">
                                <div class="col-lg-10">
                                    <form role="form" class="php-email-form">
                                        <div class="row">
                                            <div class="col-md-6 form-group">
                                                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                                            </div>
                                            <div class="col-md-6 form-group mt-3 mt-md-0">
                                                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                                            </div>
                                        </div>
                                        <div class="form-group mt-3">
                                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Your Instagram Id" required />
                                        </div>

                                        <div class="my-3">
                                            <div class="loading">Loading</div>
                                            <div class="error-message"></div>
                                            <div class="sent-message">Your message has been sent. Thank you!</div>
                                        </div>
                                        <div class="text-center"><button type="submit">Send Message</button></div>
                                    </form>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="social-links text-center">
                        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default JoinUs;
