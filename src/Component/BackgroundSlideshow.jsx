import React from 'react'
import { Carousel } from 'react-bootstrap'

export const BackgroundSlideshow = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{ objectFit: 'cover', maxHeight: '25rem', objectPosition: 'center' }}
                        className="d-block w-100"
                        src="https://images.tokopedia.net/img/KRMmCm/2022/5/20/fa2e7b00-3db8-48dc-b1c8-c7f926338793.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='caption-carousel'>Jurrasic World</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ objectFit: 'cover', maxHeight: '25rem', objectPosition: 'center' }}
                        className="d-block w-100"
                        src="https://cdn-2.tstatic.net/tribunnews/foto/bank/images/cover-film-the-black-phone.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='caption-carousel'>The Black Phone</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ objectFit: 'cover', maxHeight: '25rem', objectPosition: 'center' }}
                        className="d-block w-100"
                        src="https://warningmagazine.files.wordpress.com/2013/02/tintin07.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='caption-carousel'>The Adventure of TinTin</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
