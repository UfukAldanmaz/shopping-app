import { useState } from "react";
import { images } from "../data/imageData";

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <div className="slider">

            <div className="slides" style={{ backgroundImage: `url(${images[currentIndex].img})` }}>
                <div className="slide-icon" onClick={() => {
                    currentIndex > 0 && setCurrentIndex(currentIndex - 1)
                }} style={{ fontSize: "100px", float: "left" }}>
                    ﹤
                </div>

                <div className="slider-text">
                    <h1>{images[currentIndex].title}</h1>
                    <p>{images[currentIndex].subtitle}</p>
                </div>

                <div className="slide-icon" onClick={() => {
                    currentIndex < images.length - 1 && setCurrentIndex(currentIndex + 1)
                }} style={{ fontSize: "100px", float: "right" }}>
                    ﹥
                </div>
            </div>
        </div>
    )
}

export default ImageSlider;