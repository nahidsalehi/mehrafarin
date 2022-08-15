 function Slider(){

    return (
        <section className="colored-section-blue" id="pooyesh-ha">
            <div id="carouselIndicators" className="carousel slide" data-bs-ride="false" data-bs-pause="hover">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="images/pooyesh1.jpg" className="carousel-img" alt="pooyesh1-img"></img>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>پویش اول - پاییز 1399</h5>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="images/pooyesh2.jpg" className="carousel-img" alt="pooyesh1-img"></img>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>پویش دوم - زمستان 1399</h5>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="images/pooyesh3.jpg" className="carousel-img" alt="pooyesh3-img"></img>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>پویش سوم - بهار 1400</h5>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                <img className="pooyesh-bp" src="images/pooyesh-bp2.png" alt="pooyesh-bp-img"></img>
                <img className="pooyesh-rp1" src="images/pooyesh-rp1.png" alt="pooyesh-rp-img"></img>
                <img className="pooyesh-rp2" src="images/pooyesh-rp2.png" alt="pooyesh-rp-img"></img>
            </div>
        </section>
    );
 }

 export default Slider;