import React from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';


const Home = () => {
    const imagesArr = [img1, img2, img3, img4, img5, img6, img7];
    const mappedImages = imagesArr.map((img, index) =>
        (<img key={img} className='img' src={img} alt='thumbnail' />));

    return (
        <div>
            <div>
                <div className='container'>
                    <div className='imgHolder'>
                        {mappedImages}
                    </div>
                    <div className='imgHolder'>
                        {mappedImages}
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Home;