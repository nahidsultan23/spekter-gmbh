import img1 from '../images/1.png';
import img2 from '../images/2.png';
import img3 from '../images/3.png';
import img4 from '../images/4.png';
import img5 from '../images/5.png';
import img6 from '../images/6.png';
import img7 from '../images/7.png';
import img8 from '../images/8.png';
import img9 from '../images/9.png';
import img10 from '../images/10.png';
import img11 from '../images/11.png';
import img12 from '../images/12.png';
import img13 from '../images/13.png';
import img14 from '../images/14.png';
import img15 from '../images/15.png';
import img16 from '../images/16.png';
import img17 from '../images/17.png';
import img18 from '../images/18.png';
import img19 from '../images/19.png';
import img20 from '../images/20.png';

const singlePost = (obj) => {
    let imageNumber = Number(obj.id % 20);

    let imageToShow = img20;

    if (imageNumber === 1) {
        imageToShow = img1;
    } else if (imageNumber === 2) {
        imageToShow = img2;
    } else if (imageNumber === 3) {
        imageToShow = img3;
    } else if (imageNumber === 4) {
        imageToShow = img4;
    } else if (imageNumber === 5) {
        imageToShow = img5;
    } else if (imageNumber === 6) {
        imageToShow = img6;
    } else if (imageNumber === 7) {
        imageToShow = img7;
    } else if (imageNumber === 8) {
        imageToShow = img8;
    } else if (imageNumber === 9) {
        imageToShow = img9;
    } else if (imageNumber === 10) {
        imageToShow = img10;
    } else if (imageNumber === 11) {
        imageToShow = img11;
    } else if (imageNumber === 12) {
        imageToShow = img12;
    } else if (imageNumber === 13) {
        imageToShow = img13;
    } else if (imageNumber === 14) {
        imageToShow = img14;
    } else if (imageNumber === 15) {
        imageToShow = img15;
    } else if (imageNumber === 16) {
        imageToShow = img16;
    } else if (imageNumber === 17) {
        imageToShow = img17;
    } else if (imageNumber === 18) {
        imageToShow = img18;
    } else if (imageNumber === 19) {
        imageToShow = img19;
    }

    return (
        <div className="single-post break-word">
            <div>
                <img className="single-post-photo" src={imageToShow} alt="post" />
            </div>
            <h4>{obj.title}</h4>
            <div>{obj.body}</div>
        </div>
    );
};

export default singlePost;
