import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export const HomeCarousel = () => {
    return (

        <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false}>
            <div>
                <img className="h-[75vh] w-[75%] object-cover " src="https://watermark.lovepik.com/photo/40252/0043.jpg_wh1200.jpg" />
                <div className="absolute top-48 flex flex-col   text-center rounded-md">
                    <div className="px-6 py-8 sm:p-10 sm:pb-6">
                        <div className="grid items-start  w-full grid-cols-1 text-center">
                            <div>
                                <h2 className="text-5xl font-medium tracking-tighter text-gray-500 font-serif ">
                                    Where Every Present Becomes a Cherished Memory

                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img className="h-[75vh] w-[75%] object-cover " src="https://m.media-amazon.com/images/I/911gvyAq64L.jpg" />
                <div className="absolute top-48 flex flex-col   text-center rounded-md">
                    <div className="px-6 py-8 sm:p-10 sm:pb-6">
                    </div>
                </div>
            </div>
            <div>
                <img className="h-[75vh] w-[75%] object-cover " src="https://blog.xtrawine.com/wp-content/uploads/2023/11/multiple-gifts-2023.jpg" />
                <div className="absolute top-48 flex flex-col   text-center rounded-md">
                    <div className="px-6 py-8 sm:p-10 sm:pb-6">

                    </div>
                </div>
            </div>
        </Carousel>
    )
}
export default HomeCarousel