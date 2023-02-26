import { useEffect, useState } from "react"

export default function Carousel ({ images }) {
    const [imageIndex, setImageIndex] = useState(0)
    const [image, setImage] = useState(images[imageIndex])

    useEffect(()=>{
        setImage(images[imageIndex])
    },[images, imageIndex])

    const nextPictureHandler = () => {
        setImageIndex(currState => {
            currState++
            if (currState === images.length) return 0
            return currState
        })
    }

    const prevPictureHandler = () => {
        setImageIndex(currState => {
            currState--
            if (currState < 0) return images.length - 1
            return currState
        })
    }
    
    return (
        <div className="carousel">
            <button onClick={prevPictureHandler}>prev</button>
            <img src={image} alt={`number ${imageIndex + 1}`} />
            <button onClick={nextPictureHandler}>next</button>
        </div>
    )
}