import React from 'react';
import "./Loading.css";
import aa from './Images/download.png';
import aa2 from "./Images/download (1).png";
import aa3 from "./Images/download (2).png";
import aa4 from "./Images/download (3).png";

const images = [aa, aa2, aa3, aa4];
function Loading() {

    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentImage(images[Math.floor(Math.random() * images.length)]);
        }, 500);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <img src={currentImage} alt="image" className="imageDiv" />
        </div>
    );
}

export default Loading;
