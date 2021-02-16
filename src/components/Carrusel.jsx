

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Carrusel = () => {

        return (
            <Carousel
                autoplay={true}
                showThumbs={false}
                infiniteLoop={true}
            >
                <div>
                    <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg" height="500"  />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(16).jpg" height="500" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg" height="500" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        );
};

export default Carrusel